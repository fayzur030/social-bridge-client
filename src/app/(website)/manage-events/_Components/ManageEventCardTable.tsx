import { IEvents } from '@/types/event.types'
import { ICategory } from '@/types/category.type'
import Image from 'next/image'

import { DeleteAlert } from './DeleteAlert'
import { EditModal } from './EditModal'
import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'
import Link from 'next/link'

interface IEventProps {
  event: IEvents
  category: ICategory[]
}

const ManageEventCardTable = ({ event, category }: IEventProps) => {
  const dateValue = (event.eventDate ?? '').trim()
  const eventDate = /^\d{4}-\d{2}-\d{2}$/.test(dateValue)
    ? new Date(`${dateValue}T00:00:00`)
    : new Date(dateValue)
  const dateLabel = Number.isNaN(eventDate.getTime())
    ? 'Date to be announced'
    : new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }).format(eventDate)

  return (
    <tr className='mx-3 mb-3 block overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-colors hover:bg-muted/70 md:mx-0 md:mb-0 md:table-row md:overflow-visible md:rounded-none md:border-x-0 md:border-t md:border-b-0 md:shadow-none'>
      <td className='block px-3 pt-3 pb-2 md:table-cell md:px-4 md:py-2'>
        <div className='flex min-w-0 items-center gap-3 md:min-w-48 md:gap-2'>
          {event.thumbnail ? (
            <div className='relative size-16 shrink-0 overflow-hidden rounded-xl md:size-16 md:rounded-lg'>
              <Image
                src={event.thumbnail}
                alt=''
                fill
                unoptimized
                sizes='64px'
                className='object-cover'
              />
            </div>
          ) : (
            <div
              aria-hidden='true'
              className='size-16 shrink-0 rounded-xl bg-muted md:size-8 md:rounded-lg'
            />
          )}
          <div className='min-w-0 flex-1 '>
            <div className='flex flex-wrap items-center  gap-x-2 gap-y-1'>
              <span className='font-semibold text-base text-foreground md:text-sm'>
                {event.title}
              </span>
              <span className='inline-flex whitespace-nowrap rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium leading-4 text-accent-foreground md:hidden'>
                {event.eventType || 'Community'}
              </span>
            </div>
            <div className='mt-2 space-y-0.5 text-xs text-muted-foreground md:hidden'>
              <p className='truncate'>
                • {event.location || 'Location to be announced'}
              </p>
              <p>• {dateLabel}</p>
            </div>
          </div>
        </div>
      </td>
      <td className='hidden px-3 py-8 md:table-cell md:px-4'>
        <span className='inline-flex whitespace-nowrap rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium leading-4 text-accent-foreground'>
          {event.eventType || 'Community'}
        </span>
      </td>
      <td className='hidden whitespace-nowrap px-3 text-xs md:text-sm lg:text-base py-2 text-muted-foreground md:table-cell md:px-4'>
        {dateLabel}
      </td>
      <td className='hidden px-3 py-2 text-muted-foreground text-xs md:text-sm lg:text-base md:table-cell md:px-4'>
        <span className='block max-w-36 truncate'>
          {event.location || 'Location to be announced'}
        </span>
      </td>
      <td className='block px-3 pt-1 pb-3 md:table-cell md:px-4 text-xs md:text-sm  lg:text-base md:py-2'>
        <div className='flex items-center gap-2 md:gap-1'>
          <EditModal event={event} category={category} compact />
          <DeleteAlert event={event} compact />
          <Link href={`/upcoming-events/${event._id}`} className='text-xs'>
            <Button variant='outline' className='w-18  cursor-pointer'>
              <Eye aria-hidden='true' className='size-3' />
              View
            </Button>
          </Link>
        </div>
      </td>
    </tr>
  )
}

export default ManageEventCardTable
