'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { ICategory } from '@/types/category.type'
import { IEvents } from '@/types/event.types'

import EventCard from './EventCard'
import CategoryItems from './CategoryItems'

interface IUpcomingEventListProps {
  events: IEvents[]
  category: ICategory[]
}

const UpcomingEventList = ({ events, category }: IUpcomingEventListProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredEvents = events.filter((event) => {
    const matchCategory =
      selectedCategory === 'all' ||
      event.eventType.toLowerCase() === selectedCategory.toLowerCase()

    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim())

    return matchCategory && matchesSearch
  })

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10'>
      {/* Category and Search */}
      <div className='grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,1fr)_20rem] xl:items-center'>
        {/* Category */}
        <div className='min-w-0'>
          <CategoryItems
            category={category}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Search Bar */}
        <div className='w-full min-w-0'>
          <div className='relative'>
            <Search className='absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground' />

            <Input
              type='search'
              placeholder='Search events by title...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='h-12 w-full rounded-xl bg-card pl-12'
            />
          </div>
        </div>
      </div>

      {/* Events */}
      <section className='grid grid-cols-1 gap-5 py-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
        {filteredEvents.length > 0 ? (
          filteredEvents
            .slice(0, 5)
            .map((event) => <EventCard key={event._id} event={event} />)
        ) : (
          <div className='col-span-full py-16 text-center'>
            <h3 className='text-lg font-semibold text-foreground'>
              No Events Available
            </h3>

            <p className='mt-2 text-sm text-muted-foreground'>
              There are currently no events in this category. Check back soon!
            </p>
          </div>
        )}
      </section>
    </div>
  )
}

export default UpcomingEventList
