import { Skeleton } from '@/components/ui/skeleton'

const EventCardSkeleton = () => {
  return (
    <div className='overflow-hidden rounded-2xl border border-border bg-card'>
      {/* Image */}
      <Skeleton className='h-48 w-full rounded-none' />

      <div className='space-y-4 p-5'>
        {/* Category */}
        <Skeleton className='h-5 w-24 rounded-full' />

        {/* Title */}
        <Skeleton className='h-6 w-3/4' />

        {/* Description */}
        <div className='space-y-2'>
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-2/3' />
        </div>

        {/* Date and Location */}
        <div className='flex justify-between'>
          <Skeleton className='h-4 w-28' />
          <Skeleton className='h-4 w-24' />
        </div>

        {/* Button */}
        <Skeleton className='h-10 w-full rounded-xl' />
      </div>
    </div>
  )
}

export default EventCardSkeleton
