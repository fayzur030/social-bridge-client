'use client'

import { Loader2, Trash2, Trash2Icon } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { IEvents } from '@/types/event.types'
import { useState } from 'react'
import { Spinner } from '@/components/ui/spinner'
import { getTokenFromClient } from '@/lib/getTokenFromClient'

interface IEventProps {
  event: IEvents
}

export function DeleteAlert({ event }: IEventProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleDeleteEvent = async (id: string) => {
    setIsLoading(true)

    try {
      const jwtToken = await getTokenFromClient()
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/delete-manage-events/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )

      if (!res.ok) {
        throw new Error('Failed to delete event')
      }

      toast.success(`${event.title} deleted successfully`)
      router.refresh()
    } catch (error) {
      console.log(error)

      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('Something went wrong!')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button variant='destructive' size={'lg'} disabled={isLoading} className={`cursor-pointer`}>
            <Trash2 aria-hidden='true' />
            Delete
          </Button>
        }
      />

      <AlertDialogContent size='md'>
        <AlertDialogHeader>
          <AlertDialogMedia className='bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive'>
            <Trash2Icon />
          </AlertDialogMedia>

          <AlertDialogTitle>Delete Event?</AlertDialogTitle>

          <AlertDialogDescription>
            Are you sure you want to delete this event? This action cannot be
            undone, and all event information will be permanently removed.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel variant='outline' disabled={isLoading}>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={(e) => {
              e.preventDefault()
              handleDeleteEvent(event._id)
            }}
            variant='destructive'
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                {/* <Loader2 className='size-4 animate-spin' /> */}
                <Spinner />
                Deleting...
              </>
            ) : (
              'Delete Event'
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
