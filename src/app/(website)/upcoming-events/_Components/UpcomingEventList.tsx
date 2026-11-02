'use client'
import { ICategory } from '@/types/category.type'
import { IEvents } from '@/types/event.types'
import EventCard from './EventCard'
import { useState } from 'react'
import CategoryItems from './CategoryItems'

interface IUpcomingEventListProps {
  events: IEvents[]
  category: ICategory[]
}

const UpcomingEventList = ({ events, category }: IUpcomingEventListProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredEvents =
    selectedCategory === 'all'
      ? events
      : events.filter(
          (event) =>
            event.eventType.toLowerCase() === selectedCategory.toLowerCase()
        )
  return (
    <div>
      <CategoryItems
        category={category}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <section className='mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:gap-6'>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))
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
