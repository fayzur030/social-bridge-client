import EventCardSkeleton from '@/components/shared/EventCardSkeleton'
import { Skeleton } from '@/components/ui/skeleton'

const HomeLoading = () => {
  return (
    <main>
      {/* Hero Section Skeleton */}
      <section className='mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2'>
        <div className='space-y-5'>
          <Skeleton className='h-7 w-52 rounded-full' />
          <Skeleton className='h-12 w-full max-w-md' />
          <Skeleton className='h-12 w-3/4 max-w-sm' />
          <div className='space-y-2'>
            <Skeleton className='h-4 w-full max-w-lg' />
            <Skeleton className='h-4 w-4/5 max-w-md' />
          </div>
          <div className='flex gap-3 pt-3'>
            <Skeleton className='h-11 w-36 rounded-xl' />
            <Skeleton className='h-11 w-36 rounded-xl' />
          </div>
        </div>

        <Skeleton className='aspect-[5/4] w-full rounded-2xl' />
      </section>

      {/* Recent Events Section Skeleton */}
      <section className='mx-auto max-w-7xl px-4 py-16'>
        {/* Section Heading */}
        <div className='mb-10 space-y-3 text-center'>
          <Skeleton className='mx-auto h-8 w-48' />
          <Skeleton className='mx-auto h-4 w-80 max-w-full' />
        </div>

        {/* Recent Event Cards */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {Array.from({ length: 6 }).map((_, index) => (
            <EventCardSkeleton key={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className='mt-10 flex justify-center'>
          <Skeleton className='h-11 w-40 rounded-xl' />
        </div>
      </section>
    </main>
  )
}

export default HomeLoading
