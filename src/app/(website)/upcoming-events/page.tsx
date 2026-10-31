import { IEvents } from '@/types/event.types'
import React from 'react'
import EventCard from './_Components/EventCard'

const getUpcomingEvents = async (): Promise<IEvents[]> => {
  try {
    const res = await fetch(`http://localhost:5000/events`)
    if (!res.ok) {
      throw new Error('Fetch to failed upcoming events')
    }
    const event = await res.json()
    return event.data
  } catch (error) {
    console.log(error)
  }
  return []
}

const UpcomingEvents = async () => {
  const events = await getUpcomingEvents()

  return (
    <section className='mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:gap-6 lg:px-8'>
      {events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </section>
  )
}

export default UpcomingEvents
