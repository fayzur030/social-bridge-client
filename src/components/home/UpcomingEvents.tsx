// import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { IEvents } from '@/types/event.types'
import EventCardGrid from '@/app/(website)/upcoming-events/_Components/EventCardGrid'

// const demoEvents = [
//   {
//     _id: '1',
//     title: 'Community Tree Plantation Drive',
//     eventType: 'Plantation',
//     eventDate: '2026-11-15T09:00:00',
//     location: 'Ramna Park, Dhaka',
//     thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
//     description:
//       'Join us in making our city greener by planting trees and promoting environmental awareness.',
//   },
//   {
//     _id: '2',
//     title: 'Winter Clothes Distribution',
//     eventType: 'Donation',
//     eventDate: '2026-11-20T10:00:00',
//     location: 'Mirpur, Dhaka',
//     thumbnail: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f',
//     description:
//       'Help underprivileged families stay warm this winter by donating and distributing warm clothes.',
//   },
//   {
//     _id: '3',
//     title: 'Community Blood Donation Camp',
//     eventType: 'Blood Donation',
//     eventDate: '2026-11-25T09:30:00',
//     location: 'Dhanmondi, Dhaka',
//     thumbnail: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4',
//     description:
//       'Come forward and donate blood to help save lives. Every donation can make a difference.',
//   },
//   {
//     _id: '4',
//     title: 'Neighborhood Cleaning Campaign',
//     eventType: 'Cleanup',
//     eventDate: '2026-12-02T08:00:00',
//     location: 'Uttara, Dhaka',
//     thumbnail: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b',
//     description:
//       'Work together to clean public spaces and create a healthier environment for everyone.',
//   },
//   {
//     _id: '5',
//     title: 'Youth Volunteer Leadership Workshop',
//     eventType: 'Workshop',
//     eventDate: '2026-12-08T11:00:00',
//     location: 'University of Dhaka',
//     thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
//     description:
//       'Learn teamwork, leadership, and community engagement skills from experienced volunteers.',
//   },
//   {
//     _id: '6',
//     title: 'Food Distribution for Families',
//     eventType: 'Food Distribution',
//     eventDate: '2026-12-15T09:00:00',
//     location: 'Old Dhaka',
//     thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c',
//     description:
//       'Be part of a meaningful initiative to provide nutritious meals to families in need.',
//   },
// ]

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
      <div className='mx-auto max-w-7xl px-6 sm:px-8 lg:px-10'>
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
