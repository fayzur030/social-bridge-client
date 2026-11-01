import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, Eye, MapPin, Pencil, Sparkles } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { IEvents } from '@/types/event.types'
import { DeleteAlert } from './DeleteAlert'

interface IEventProps {
  event: IEvents
}

const ManageEventCard = ({ event }: IEventProps) => {
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
    <article className='group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#23AD56]/50 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900'>
      <div className='relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800'>
        {event.thumbnail ? (
          <Image
            src={event.thumbnail}
            alt={event.title}
            fill
            unoptimized
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            className='object-cover transition-transform duration-300 group-hover:scale-[1.03]'
          />
        ) : (
          <div className='flex size-full items-center justify-center text-slate-400 dark:text-slate-500'>
            <Sparkles aria-hidden='true' className='size-9' strokeWidth={1.5} />
          </div>
        )}
        <div className='absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent' />
        <div className='absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-lg border border-white/70 bg-white/95 px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-200'>
          <CalendarDays
            aria-hidden='true'
            className='size-3.5 text-[#087F5B]'
          />
          {hasValidDate
            ? new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: 'numeric',
              }).format(eventDate)
            : 'Coming soon'}
        </div>
      </div>

      <div className='flex flex-1 flex-col p-5'>
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

        <h2 className='mt-3 line-clamp-2 font-heading text-lg font-semibold leading-snug text-slate-900 dark:text-white'>
          {event.title}
        </h2>
        <p className='mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-slate-600 dark:text-slate-300'>
          {event.description ||
            'More information about this event coming soon.'}
        </p>

        <div className='mt-3 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300'>
          <MapPin
            aria-hidden='true'
            className='size-4 shrink-0 text-[#087F5B]'
          />
          <span className='truncate'>
            {event.location || 'Location to be announced'}
          </span>
        </div>

        {tags.length > 0 && (
          <div className='mt-3 flex flex-wrap gap-1.5'>
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant='secondary' className='font-normal'>
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant='outline' className='font-normal'>
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        )}

        <div className='mt-auto grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 dark:border-slate-800'>
          <Link href={`/upcoming-events/${event._id}`}>
            <Button variant='outline' size='sm' className='w-full'>
              <Eye aria-hidden='true' />
              View
            </Button>
          </Link>
          <Button variant='outline' size='sm' className='w-full' type='button'>
            <Pencil aria-hidden='true' />
            Edit
          </Button>
          <DeleteAlert event={event} />
        </div>
      </div>
    </article>
  )
}

export default ManageEventCard
