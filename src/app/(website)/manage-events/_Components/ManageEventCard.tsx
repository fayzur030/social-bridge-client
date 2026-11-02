import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  CalendarDays,
  Eye,
  MapPin,
  Pencil,
  Sparkles,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { IEvents } from '@/types/event.types'

import { EditModal } from './EditModal'
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
    <article className='group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:bg-accent/20 hover:shadow-xl hover:shadow-primary/10 focus-within:ring-2 focus-within:ring-primary/30 motion-reduce:transition-none motion-reduce:hover:translate-y-0'>
      <div className='relative aspect-[16/9] overflow-hidden bg-muted'>
        {event.thumbnail ? (
          <Image
            src={event.thumbnail}
            alt={event.title}
            fill
            unoptimized
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            className='object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100'
          />
        ) : (
          <div className='flex size-full items-center justify-center text-muted-foreground'>
            <Sparkles aria-hidden='true' className='size-8' strokeWidth={1.5} />
          </div>
        )}

        <div className='absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-card/95 px-2.5 py-1.5 text-xs font-medium text-card-foreground shadow-sm'>
          <CalendarDays className='size-3.5 text-brand-green' />
          {hasValidDate
            ? new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: 'numeric',
              }).format(eventDate)
            : 'Coming soon'}
        </div>
      </div>

      <div className='flex flex-1 flex-col p-4'>
        <div className='flex items-center justify-between gap-3'>
          <Badge
            variant={event.eventType === 'Donation' ? 'destructive' : 'default'}
            className={
              event.eventType === 'Donation'
                ? ''
                : 'border-transparent bg-brand-green/10 text-brand-green hover:bg-brand-green/10'
            }
          >
            {event.eventType || 'Community event'}
          </Badge>

          <span className='shrink-0 text-xs text-muted-foreground'>
            {dateLabel}
          </span>
        </div>

        <h2 className='mt-2 line-clamp-2 font-heading text-lg font-semibold leading-snug text-card-foreground transition-colors duration-200 group-hover:text-primary'>
          {event.title}
        </h2>

        <div className='mt-3 flex items-center gap-2 text-sm text-muted-foreground'>
          <MapPin className='size-4 shrink-0 text-brand-green' />
          <span className='truncate'>
            {event.location || 'Location to be announced'}
          </span>
        </div>

        <p className='mt-2 line-clamp-2 text-sm leading-5 text-muted-foreground'>
          {event.description ||
            'More information about this event coming soon.'}
        </p>

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

        <div className='mt-auto pt-4'>
          <div className='mt-2 grid grid-cols-4 gap-2'>
            <Link
              href={`/upcoming-events/${event._id}`}
              className='flex items-center justify-center gap-2 col-span-2'
            >
              <Button variant='outline' className='w-full py-5 cursor-pointer'>
                <Eye aria-hidden='true' className='size-4' />
                View
              </Button>
            </Link>
            <EditModal event={event} />
            <DeleteAlert event={event} />
          </div>
        </div>
      </div>
    </article>
  )
}

export default ManageEventCard
