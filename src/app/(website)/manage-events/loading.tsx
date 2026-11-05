import { Skeleton } from '@/components/ui/skeleton'

const ManageEventsLoading = () => {
  return (
    <section className='min-h-screen'>
      {/* Banner Skeleton */}
      <div className='space-y-3 py-16 text-center'>
        <Skeleton className='mx-auto h-10 w-64' />
        <Skeleton className='mx-auto h-5 w-96 max-w-full' />
      </div>

      <div className='mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8'>
        {/* Stats Cards Skeleton */}
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className='rounded-2xl border border-border bg-card p-5 shadow-sm'
            >
              <div className='flex items-center justify-between'>
                <Skeleton className='size-12 rounded-xl' />
                <Skeleton className='h-5 w-16 rounded-full' />
              </div>

              <div className='mt-5 space-y-2'>
                <Skeleton className='h-4 w-28' />
                <Skeleton className='h-8 w-20' />
              </div>
            </div>
          ))}
        </div>

        {/* Table Skeleton */}
        <div className='overflow-hidden rounded-2xl border border-border bg-card'>
          {/* Table Header */}
          <div className='flex items-center justify-between gap-4 border-b border-border p-5'>
            <div className='space-y-2'>
              <Skeleton className='h-6 w-36' />
              <Skeleton className='h-4 w-52' />
            </div>

            <Skeleton className='h-10 w-28 rounded-lg' />
          </div>

          {/* Search and Filter */}
          <div className='flex flex-col gap-3 border-b border-border p-5 sm:flex-row sm:items-center sm:justify-between'>
            <Skeleton className='h-10 w-full sm:max-w-xs' />
            <Skeleton className='h-10 w-full sm:w-36' />
          </div>

          {/* Table Rows */}
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='border-b border-border'>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <th key={index} className='px-5 py-4'>
                      <Skeleton className='h-4 w-20' />
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {Array.from({ length: 5 }).map((_, index) => (
                  <tr
                    key={index}
                    className='border-b border-border last:border-0'
                  >
                    {Array.from({ length: 5 }).map((_, cellIndex) => (
                      <td key={cellIndex} className='px-5 py-5'>
                        {cellIndex === 0 ? (
                          <div className='flex items-center gap-3'>
                            <Skeleton className='size-12 shrink-0 rounded-lg' />
                            <Skeleton className='h-4 w-28' />
                          </div>
                        ) : (
                          <Skeleton className='h-4 w-20' />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className='flex items-center justify-between gap-4 border-t border-border p-5'>
            <Skeleton className='h-4 w-32' />
            <div className='flex gap-2'>
              <Skeleton className='size-9 rounded-lg' />
              <Skeleton className='size-9 rounded-lg' />
              <Skeleton className='size-9 rounded-lg' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ManageEventsLoading
