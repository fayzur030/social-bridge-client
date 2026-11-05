import { Skeleton } from '@/components/ui/skeleton'

const ProfileLoading = () => {
  return (
    <main className='min-h-screen'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        {/* Profile Header Skeleton */}
        <div className='overflow-hidden rounded-2xl border border-border bg-card'>
          {/* Cover Image */}
          <Skeleton className='h-40 w-full rounded-none sm:h-52' />

          <div className='px-5 pb-6 sm:px-8'>
            {/* Avatar */}
            <div className='-mt-14 flex items-end justify-between'>
              <Skeleton className='size-28 rounded-full border-4 border-card sm:size-32' />
              <Skeleton className='h-10 w-28 rounded-lg' />
            </div>

            {/* User Information */}
            <div className='mt-5 space-y-3'>
              <Skeleton className='h-7 w-48' />
              <Skeleton className='h-4 w-64 max-w-full' />
              <Skeleton className='h-4 w-40' />
            </div>
          </div>
        </div>

        {/* Profile Information Skeleton */}
        <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2'>
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className='rounded-2xl border border-border bg-card p-6'
            >
              <Skeleton className='mb-5 h-6 w-36' />

              <div className='space-y-5'>
                {Array.from({ length: 3 }).map((_, itemIndex) => (
                  <div key={itemIndex} className='space-y-2'>
                    <Skeleton className='h-4 w-24' />
                    <Skeleton className='h-5 w-3/4' />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default ProfileLoading
