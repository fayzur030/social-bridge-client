import EventCardSkeleton from '@/components/shared/EventCardSkeleton'
import { Skeleton } from '@/components/ui/skeleton'

const UpcomingEventsLoading = () => {
  return (
    <div>
      {/* Banner Skeleton */}
      <div className='space-y-3 py-16 text-center'>
        <Skeleton className='mx-auto h-10 w-96' />
        <Skeleton className='mx-auto h-5 w-96 max-w-full' />
      </div>

      {/* Category Skeleton */}
      <div className='mx-auto flex max-w-7xl gap-3 overflow-hidden px-4 py-6'>
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className='h-10 w-24 shrink-0 rounded-full' />
        ))}
      </div>

      {/* Event Cards */}
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3'>
        {Array.from({ length: 6 }).map((_, index) => (
          <EventCardSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}

export default UpcomingEventsLoading
