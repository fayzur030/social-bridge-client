import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { IEvents } from '@/types/event.types'

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

const formatEventDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

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
        <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3'>
          {recentEvents.map((event) => (
            <article
              key={event._id}
              className='group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5'
            >
              {/* Thumbnail */}
              <div className='relative aspect-[16/10] overflow-hidden bg-muted'>
                <Image
                  src={event.thumbnail}
                  alt={event.title}
                  fill
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                />

                <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10' />

                <Badge className='absolute top-4 left-4 border border-white/20 bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur-md'>
                  {event.eventType}
                </Badge>
              </div>

              {/* Content */}
              <div className='p-5'>
                <div className='flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-muted-foreground'>
                  <span className='flex items-center gap-1.5'>
                    <CalendarDays className='size-4 text-primary' />
                    {formatEventDate(event.eventDate)}
                  </span>

                  <span className='flex min-w-0 items-center gap-1.5'>
                    <MapPin className='size-4 shrink-0 text-primary' />
                    <span className='truncate'>{event.location}</span>
                  </span>
                </div>

                <h3 className='mt-4 line-clamp-1 font-heading text-lg font-bold tracking-tight text-card-foreground transition-colors duration-200 group-hover:text-primary'>
                  {event.title}
                </h3>

                <p className='mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground'>
                  {event.description}
                </p>

                <div className='mt-5 flex items-center justify-between border-t border-border/70 pt-4'>
                  <Link
                    href={`/upcoming-events/${event._id}`}
                    className='group/link inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-200 hover:gap-3'
                  >
                    View Details
                    <ArrowRight className='size-4 transition-transform duration-200 group-hover/link:translate-x-1' />
                  </Link>

                  {/* <span className='size-2 rounded-full bg-primary/70 ring-4 ring-primary/10' /> */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents
