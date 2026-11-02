import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CalendarDays, MapPin, Sparkles } from 'lucide-react'

import { IEvents } from '@/types/event.types'
import AddJoinEvents from '../../join-events/_Components/AddJoinEvents'

interface IDetailsEventProps {
  eventDetails: IEvents
}

const EventsDetails = ({ eventDetails }: IDetailsEventProps) => {
  const dateValue = (eventDetails.eventDate ?? '').trim()

  const eventDate = /^\d{4}-\d{2}-\d{2}$/.test(dateValue)
    ? new Date(`${dateValue}T00:00:00`)
    : new Date(dateValue)

  console.log(eventDate, 'This is event Date')
  const hasValidDate = !Number.isNaN(eventDate.getTime())
  const dateLabel = hasValidDate
    ? new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }).format(eventDate)
    : 'Date to be announced'
  const tags = (eventDetails.tags ?? '')
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean)

  return (
    <main className='min-h-screen bg-background px-4 py-8 sm:px-6 sm:py-12'>
      <div className='mx-auto max-w-6xl'>
        <Link
          href='/upcoming-events'
          className='mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-brand-green focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-green'
        >
          <ArrowLeft aria-hidden='true' className='size-4' />
          All events
        </Link>

        <div className='overflow-hidden rounded-3xl border border-border bg-card shadow-sm'>
          <div className='relative aspect-[16/7] min-h-52 overflow-hidden bg-muted sm:min-h-72'>
            {eventDetails.thumbnail ? (
              <Image
                src={eventDetails.thumbnail}
                alt={eventDetails.title}
                fill
                priority
                unoptimized
                sizes='(max-width: 1280px) 100vw, 1152px'
                className='object-cover'
              />
            ) : (
              <div className='flex size-full items-center justify-center text-muted-foreground'>
                <Sparkles
                  aria-hidden='true'
                  className='size-12'
                  strokeWidth={1.3}
                />
              </div>
            )}
            <div className='absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent' />
            <span className='absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-border/40 bg-card/95 px-3 py-1.5 text-sm font-medium text-card-foreground shadow-sm'>
              <span className='size-2 rounded-full bg-brand-green' />
              {eventDetails.eventType || 'Community event'}
            </span>
          </div>

          <div className='grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10 lg:p-10'>
            <section className='min-w-0'>
              <p className='text-sm font-semibold tracking-wide text-brand-green'>
                SOCIALBRIDGE COMMUNITY EVENT
              </p>
              <h1 className='mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
                {eventDetails.title}
              </h1>
              <p className='mt-4 max-w-3xl whitespace-pre-line text-base leading-7 text-muted-foreground'>
                {eventDetails.description ||
                  'More information about this event will be shared soon.'}
              </p>

              <div className='mt-8 grid gap-3 sm:grid-cols-2'>
                <div className='flex items-start gap-3 rounded-2xl border border-border p-4'>
                  <span className='flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green'>
                    <CalendarDays aria-hidden='true' className='size-5' />
                  </span>
                  <div className='min-w-0'>
                    <p className='text-xs font-medium text-muted-foreground'>
                      Date
                    </p>
                    <p className='mt-1 text-sm font-semibold text-foreground'>
                      {dateLabel}
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3 rounded-2xl border border-border p-4'>
                  <span className='flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green'>
                    <MapPin aria-hidden='true' className='size-5' />
                  </span>
                  <div className='min-w-0'>
                    <p className='text-xs font-medium text-muted-foreground'>
                      Location
                    </p>
                    <p className='mt-1 break-words text-sm font-semibold text-foreground'>
                      {eventDetails.location || 'Location to be announced'}
                    </p>
                  </div>
                </div>
              </div>

              {tags.length > 0 && (
                <div className='mt-8'>
                  <h2 className='text-sm font-semibold text-foreground'>
                    About this event
                  </h2>
                  <div className='mt-3 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className='rounded-full border border-border bg-muted px-3 py-1.5 text-sm text-muted-foreground'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </section>
            {/* Join event card */}
            <AddJoinEvents eventDetails={eventDetails} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default EventsDetails
