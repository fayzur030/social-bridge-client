import { ChevronDown, Search } from 'lucide-react'

const EventFilters = () => {
  return (
    <section className='mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-12 sm:px-6 lg:px-8'>
      {/* Category Filter */}
      <div className='sm:col-span-8'>
        <button
          type='button'
          className='flex h-12 w-full items-center justify-between rounded-xl border border-border bg-card px-4 text-left text-sm text-muted-foreground shadow-sm transition-colors hover:border-brand-green/50'
        >
          <span>Select by category</span>
          <ChevronDown aria-hidden='true' className='size-4 text-brand-green' />
        </button>
      </div>

      {/* Search Input */}
      <div className='flex h-12 items-center gap-3 rounded-xl border border-border bg-card px-4 shadow-sm transition-colors focus-within:border-brand-green/50 focus-within:ring-2 focus-within:ring-brand-green/15 sm:col-span-4'>
        <Search
          aria-hidden='true'
          className='size-4 shrink-0 text-brand-green'
        />

        <input
          type='search'
          aria-label='Search events'
          placeholder='Search by event title...'
          className='w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground'
        />
      </div>
    </section>
  )
}

export default EventFilters
