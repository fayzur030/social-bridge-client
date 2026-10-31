import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Mail,
  MapPin,
  Sparkles,
  UserRound,
} from 'lucide-react'

import { IEvents } from '@/types/event.types'

interface IDetailsEventProps {
  eventDetails: IEvents
}

const EventsDetails = ({ eventDetails }: IDetailsEventProps) => {
  const dateValue = (eventDetails.eventDate ?? '').trim()
  const eventDate = /^\d{4}-\d{2}-\d{2}$/.test(dateValue)
    ? new Date(`${dateValue}T00:00:00`)
    : new Date(dateValue)
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
    <main className='min-h-screen bg-slate-50/70 px-4 py-8 dark:bg-slate-950 sm:px-6 sm:py-12'>
      <div className='mx-auto max-w-6xl'>
        <Link
          href='/upcoming-events'
          className='mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#087F5B] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087F5B] dark:text-slate-300'
        >
          <ArrowLeft aria-hidden='true' className='size-4' />
          All events
        </Link>

        <div className='overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <div className='relative aspect-[16/7] min-h-52 overflow-hidden bg-slate-100 dark:bg-slate-800 sm:min-h-72'>
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
              <div className='flex size-full items-center justify-center text-slate-400 dark:text-slate-500'>
                <Sparkles
                  aria-hidden='true'
                  className='size-12'
                  strokeWidth={1.3}
                />
              </div>
            )}
            <div className='absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent' />
            <span className='absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/95 px-3 py-1.5 text-sm font-medium text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-100'>
              <span className='size-2 rounded-full bg-[#23AD56]' />
              {eventDetails.eventType || 'Community event'}
            </span>
          </div>

          <div className='grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10 lg:p-10'>
            <section className='min-w-0'>
              <p className='text-sm font-semibold tracking-wide text-[#087F5B]'>
                SOCIALBRIDGE COMMUNITY EVENT
              </p>
              <h1 className='mt-3 font-heading text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white'>
                {eventDetails.title}
              </h1>
              <p className='mt-4 max-w-3xl whitespace-pre-line text-base leading-7 text-slate-600 dark:text-slate-300'>
                {eventDetails.description ||
                  'More information about this event will be shared soon.'}
              </p>

              <div className='mt-8 grid gap-3 sm:grid-cols-2'>
                <div className='flex items-start gap-3 rounded-2xl border border-slate-200 p-4 dark:border-slate-700'>
                  <span className='flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#23AD56]/10 text-[#087F5B]'>
                    <CalendarDays aria-hidden='true' className='size-5' />
                  </span>
                  <div className='min-w-0'>
                    <p className='text-xs font-medium text-slate-500 dark:text-slate-400'>
                      Date
                    </p>
                    <p className='mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100'>
                      {dateLabel}
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3 rounded-2xl border border-slate-200 p-4 dark:border-slate-700'>
                  <span className='flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#23AD56]/10 text-[#087F5B]'>
                    <MapPin aria-hidden='true' className='size-5' />
                  </span>
                  <div className='min-w-0'>
                    <p className='text-xs font-medium text-slate-500 dark:text-slate-400'>
                      Location
                    </p>
                    <p className='mt-1 break-words text-sm font-semibold text-slate-900 dark:text-slate-100'>
                      {eventDetails.location || 'Location to be announced'}
                    </p>
                  </div>
                </div>
              </div>

              {tags.length > 0 && (
                <div className='mt-8'>
                  <h2 className='text-sm font-semibold text-slate-900 dark:text-white'>
                    About this event
                  </h2>
                  <div className='mt-3 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className='rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </section>

            <aside className='h-fit rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-700 dark:bg-slate-800/50'>
              <div className='flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white'>
                <CheckCircle2
                  aria-hidden='true'
                  className='size-4 text-[#087F5B]'
                />
                Make a difference
              </div>
              <p className='mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300'>
                Take part in this community event and connect with people making
                a positive impact.
              </p>

              {eventDetails.email ? (
                <a
                  href={`mailto:${eventDetails.email}?subject=${encodeURIComponent(`Join ${eventDetails.title}`)}`}
                  className='mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#087F5B] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#066B4D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087F5B]'
                >
                  Join Event
                  <ArrowUpRight aria-hidden='true' className='size-4' />
                </a>
              ) : (
                <button
                  type='button'
                  disabled
                  className='mt-5 inline-flex h-11 w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-slate-300 px-4 text-sm font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-400'
                  aria-describedby='join-event-unavailable'
                >
                  Join Event
                  <ArrowUpRight aria-hidden='true' className='size-4' />
                </button>
              )}
              {!eventDetails.email && (
                <p
                  id='join-event-unavailable'
                  className='mt-2 text-center text-xs text-slate-500 dark:text-slate-400'
                >
                  Organizer contact details are not available yet.
                </p>
              )}

              <div className='mt-5 border-t border-slate-200 pt-4 dark:border-slate-700'>
                <p className='text-xs font-medium text-slate-500 dark:text-slate-400'>
                  Event type
                </p>
                <p className='mt-1 text-sm font-medium text-slate-900 dark:text-slate-100'>
                  {eventDetails.eventType || 'Community event'}
                </p>
              </div>

              {eventDetails.email && (
                <div className='mt-4 border-t border-slate-200 pt-4 dark:border-slate-700'>
                  <p className='mb-3 text-xs font-medium text-slate-500 dark:text-slate-400'>
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
                      <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-[#087F5B]/10 text-[#087F5B]'>
                        <UserRound className='size-6' />
                      </div>
                    )}

                    <div className='min-w-0'>
                      <h3 className='truncate text-sm font-semibold text-slate-900 dark:text-white'>
                        {eventDetails.name || 'Community Organizer'}
                      </h3>

                      <a
                        href={`mailto:${eventDetails.email}`}
                        className='mt-1 inline-flex max-w-full items-center gap-2 text-sm font-medium text-[#087F5B] hover:text-[#066B4D]'
                      >
                        <Mail aria-hidden='true' className='size-4 shrink-0' />
                        <span className='truncate'>{eventDetails.email}</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </main>
  )
}

export default EventsDetails
