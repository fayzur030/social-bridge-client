'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CalendarDays, MapPin, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { IEvents } from '@/types/event.types'

interface IEventProps {
  event: IEvents
}

const EventCard = ({ event }: IEventProps) => {
  const dateValue = (event.eventDate ?? '').trim()

  const eventDate = /^\d{4}-\d{2}-\d{2}$/.test(dateValue)
    ? new Date(`${dateValue}T00:00:00`)
    : new Date(dateValue)

  const hasValidDate = !Number.isNaN(eventDate.getTime())

  const dateLabel = hasValidDate
    ? new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }).format(eventDate)
    : 'Date to be announced'

  const tags = (event.tags ?? '')
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean)

  return (
    <article className='group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#23AD56]/50 hover:shadow-md dark:border-slate-700 dark:bg-slate-900'>
      {/* Thumbnail */}
      <div className='relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800'>
        {event.thumbnail ? (
          <Image
            src={event.thumbnail}
            alt={event.title}
            fill
            unoptimized
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            className='object-cover transition-transform duration-300 group-hover:scale-[1.02]'
          />
        ) : (
          <div className='flex size-full items-center justify-center text-slate-400 dark:text-slate-500'>
            <Sparkles aria-hidden='true' className='size-8' strokeWidth={1.5} />
          </div>
        )}

        {/* Date Overlay */}
        <div className='absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-lg border border-white/70 bg-white/95 px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-200'>
          <CalendarDays className='size-3.5 text-[#087F5B]' />

          {hasValidDate
            ? new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: 'numeric',
              }).format(eventDate)
            : 'Coming soon'}
        </div>
      </div>

      {/* Content */}
      <div className='flex flex-1 flex-col p-4'>
        {/* Category & Date */}
        <div className='flex items-center justify-between gap-3'>
          <Badge
            variant={event.eventType === 'Donation' ? 'destructive' : 'default'}
            className={
              event.eventType === 'Donation'
                ? ''
                : 'border-transparent bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-950 dark:text-green-400 dark:hover:bg-green-950'
            }
          >
            {event.eventType || 'Community event'}
          </Badge>

          <span className='shrink-0 text-xs text-slate-500 dark:text-slate-400'>
            {dateLabel}
          </span>
        </div>

        {/* Title */}
        <h2 className='mt-2 line-clamp-2 font-heading text-lg font-semibold leading-snug text-slate-900 dark:text-white'>
          {event.title}
        </h2>

        {/* Description */}
        {/* <p className='mt-2 line-clamp-2 text-sm leading-5 text-slate-600 dark:text-slate-300'>
          {event.description}
        </p> */}

        {/* Location */}
        <div className='mt-3 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300'>
          <MapPin className='size-4 shrink-0 text-[#087F5B]' />

          <span className='truncate'>
            {event.location || 'Location to be announced'}
          </span>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className='mt-3 flex flex-wrap gap-1.5'>
            {tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant='secondary' className='font-normal'>
                {tag}
              </Badge>
            ))}

            {tags.length > 2 && (
              <Badge variant='outline' className='font-normal'>
                +{tags.length - 2}
              </Badge>
            )}
          </div>
        )}

        {/* View Details */}
        <div className='mt-auto pt-4'>
          <Link
            href={`/upcoming-events/${event._id}`}
            className='flex items-center justify-center gap-2'
          >
            <Button variant='default' className='w-full py-5'>
              View Details
              <ArrowUpRight aria-hidden='true' className='size-4' />
            </Button>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default EventCard
