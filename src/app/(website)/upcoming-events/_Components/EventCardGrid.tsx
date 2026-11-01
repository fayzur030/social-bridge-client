import { IEvents } from '@/types/event.types'
import EventCard from './EventCard'

interface IEventGridProps {
  events: IEvents[]
}

const EventCardGrid = ({ events }: IEventGridProps) => {
  if (!events.length) {
    return (
      <div className='py-16 text-center'>
        <h3 className='text-lg font-semibold text-slate-800 dark:text-white'>
          No events found
        </h3>
        <p className='mt-2 text-sm text-slate-500 dark:text-slate-400'>
          Check back later for upcoming events.
        </p>
      </div>
    )
  }

  return (
    <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}{' '}
    </div>
  )
}

export default EventCardGrid
