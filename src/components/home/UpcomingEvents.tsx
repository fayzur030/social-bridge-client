// import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { IEvents } from '@/types/event.types'
import EventCardGrid from '@/app/(website)/upcoming-events/_Components/EventCardGrid'

const getRecentEvents = async (): Promise<IEvents[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/recent-upcoming-events`,
      {
        cache: 'no-cache',
      }
    )
    if (!res.ok) {
      throw new Error('Fetch to failed recent upcoming events')
    }
    const data = await res.json()
    return data.data
  } catch (error) {
    console.log(error)
  }
  return []
}

// const formatEventDate = (date: string) => {
//   return new Date(date).toLocaleDateString('en-US', {
//     month: 'short',
//     day: 'numeric',
//     year: 'numeric',
//   })
// }

const UpcomingEvents = async () => {
  const recentEvents = await getRecentEvents()
  console.log(recentEvents)

  return (
    <section className='bg-muted/30 py-16 sm:py-20 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-8 lg:px-10'>
        {/* Section Heading */}
        <div className='flex flex-col justify-between gap-5 sm:flex-row sm:items-end'>
          <div className='max-w-2xl'>
            <span className='text-xs font-semibold tracking-[0.16em] text-primary uppercase'>
              Make an Impact
            </span>

            <h2 className='mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
              Upcoming Community Events
            </h2>

            <p className='mt-4 text-base leading-7 text-muted-foreground'>
              Discover meaningful events happening around you and become part of
              something bigger.
            </p>
          </div>

          <Button
            render={<Link href='/upcoming-events' />}
            nativeButton={false}
            variant='outline'
            className='group w-fit py-5'
          >
            View All Events
            <ArrowRight
              aria-hidden='true'
              data-icon='inline-end'
              className='transition-transform duration-200 group-hover/button:translate-x-1'
            />
          </Button>
        </div>

        {/* Event Cards */}
        <div className='mt-10'>
          <EventCardGrid events={recentEvents} />
        </div>
        {/* <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3'>
          {recentEvents.map((event) => (
            <EventCardGrid key={event._id} events={event} />
          ))}
        </div> */}
      </div>
    </section>
  )
}

export default UpcomingEvents
