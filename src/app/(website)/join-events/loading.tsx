import EventCardSkeleton from '@/components/shared/EventCardSkeleton'
import { Skeleton } from '@/components/ui/skeleton'

const JoinedEventsLoading = () => {
  return (
    <section className='min-h-screen'>
      {/* Banner Skeleton */}
      <div className='space-y-3 py-16 text-center'>
        <Skeleton className='mx-auto h-10 w-96' />
        <Skeleton className='mx-auto h-5 w-96 max-w-full' />
      </div>

      {/* Event Count / Filter Skeleton */}
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-6'>
        <Skeleton className='h-6 w-36' />
        <Skeleton className='h-10 w-32 rounded-lg' />
      </div>

      {/* Event Cards Skeleton */}
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-16 sm:grid-cols-2 lg:grid-cols-3'>
        {Array.from({ length: 6 }).map((_, index) => (
          <EventCardSkeleton key={index} />
        ))}
      </div>
    </section>
  )
}

export default JoinedEventsLoading
