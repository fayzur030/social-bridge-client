import { IEvents } from '@/types/event.types'
import EventCard from './_Components/EventCard'
import Banner from './_Components/Banner'

const getUpcomingEvents = async (): Promise<IEvents[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
      cache: 'no-cache',
    })

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
    <>
      <Banner />
      {/* Upcoming Events */}
      <section
        aria-label='Upcoming events'
        className='mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:gap-6 lg:px-8'
      >
        {events.length ? (
          events.map((event) => <EventCard key={event._id} event={event} />)
        ) : (
          <p className='col-span-full py-16 text-center text-sm text-muted-foreground'>
            No upcoming events right now. Check back soon.
          </p>
        )}
      </section>
    </>
  )
}

export default UpcomingEvents
