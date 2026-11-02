'use client'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { authClient } from '@/lib/auth-client'
import { getTokenFromClient } from '@/lib/getTokenFromClient'
import { IEvents } from '@/types/event.types'
import { JoinEventType } from '@/types/joinEvent.type'
import { ArrowUpRight, CheckCircle2, Mail, UserRound } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

interface IDetailsEventProps {
  eventDetails: IEvents
}

const AddJoinEvents = ({ eventDetails }: IDetailsEventProps) => {
  const [loading, setLoading] = useState(false)
  const [isJoined, setIsJoined] = useState(false)

  const { data: session } = authClient.useSession()
  const user = session?.user

  //todo: Check if the current user has already joined this event
  useEffect(() => {
    const checkJoinedStatus = async () => {
      if (!user?.email) return

      try {
        const jwtToken = await getTokenFromClient()
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/joined-events/${encodeURIComponent(user.email)}`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        )

        if (!res.ok) {
          throw new Error('Failed to fetch joined events')
        }

        const data = await res.json()
        const isEventJoined = data.data.some(
          (event: JoinEventType) => event.eventId === eventDetails._id
        )

        setIsJoined(isEventJoined)
      } catch (error) {
        console.log(error)
      }
    }
    checkJoinedStatus()
  }, [user?.email, eventDetails._id])

  //todo: handleJoinEvent function

  const handleJoinEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!user) {
      toast.error('Please login to join this event!')
      return
    }

    setLoading(true)

    try {
      const jwtToken = await getTokenFromClient()
      if (isJoined) {
        // Leave Event

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/leave-joined-events/${eventDetails._id}/${encodeURIComponent(user.email)}`,
          {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        )

        if (!res.ok) {
          throw new Error('Failed to leave event')
        }

        setIsJoined(false)

        toast.success('You have successfully left this event!')
      } else {
        // Join Event

        const joinUserData = {
          ...eventDetails,
          eventId: eventDetails._id,
          participant: { ...user },
        }

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/joined-events`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${jwtToken}`,
            },
            body: JSON.stringify(joinUserData),
          }
        )

        if (res.status === 409) {
          setIsJoined(true)
          toast.info('You have already joined this event!')
          return
        }

        if (!res.ok) {
          throw new Error('Failed to join event')
        }

        setIsJoined(true)

        toast.success('You have successfully joined this event!')
      }
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form
        onSubmit={handleJoinEvent}
        className='h-fit rounded-2xl border border-border bg-muted/80 p-5'
      >
        <div className='flex items-center gap-2 text-sm font-semibold text-foreground'>
          <CheckCircle2 aria-hidden='true' className='size-4 text-brand-green' />
          Make a difference
        </div>
        <p className='mt-2 text-sm leading-6 text-muted-foreground'>
          Take part in this community event and connect with people making a
          positive impact.
        </p>

        <Button
          type='submit'
          variant={'default'}
          disabled={loading}
          className='mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold '
          aria-describedby='join-event-unavailable'
        >
          {loading ? (
            <>
              <Spinner className='size-4 animate-spin' />
              Processing...
            </>
          ) : isJoined ? (
            <>
              <CheckCircle2 className='size-4' />
              Leave Event
            </>
          ) : (
            <>
              Join Event
              <ArrowUpRight className='size-4' />
            </>
          )}
        </Button>

        <div className='mt-5 border-t border-border pt-4'>
          <p className='text-xs font-medium text-muted-foreground'>
            Event type
          </p>
          <p className='mt-1 text-sm font-medium text-foreground'>
            {eventDetails.eventType || 'Community event'}
          </p>
        </div>

        {eventDetails.email && (
          <div className='mt-4 border-t border-border pt-4'>
            <p className='mb-3 text-xs font-medium text-muted-foreground'>
              Organizer
            </p>

            <div className='flex items-center gap-3'>
              {eventDetails.image ? (
                <Image
                  src={eventDetails.image}
                  alt={eventDetails.name || 'Organizer'}
                  width={48}
                  height={48}
                  className='size-12 rounded-full object-cover'
                />
              ) : (
                <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green'>
                  <UserRound className='size-6' />
                </div>
              )}

              <div className='min-w-0'>
                <h3 className='truncate text-sm font-semibold text-foreground'>
                  {eventDetails.name || 'Community Organizer'}
                </h3>

                <a
                  href={`mailto:${eventDetails.email}`}
                  className='mt-1 inline-flex max-w-full items-center gap-2 text-sm font-medium text-brand-green hover:text-brand-green-hover'
                >
                  <Mail aria-hidden='true' className='size-4 shrink-0' />
                  <span className='truncate'>{eventDetails.email}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default AddJoinEvents
