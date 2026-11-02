import { IEvents } from '@/types/event.types'
import { Button } from '@/components/ui/button'
import {
  CalendarDays,
  Handshake,
  Heart,
  Search,
  UsersRound,
} from 'lucide-react'
import Image from 'next/image'
import heroImage from '@/assets/hero-Picsart-BackgroundRemover.png'
import EventCard from './_Components/EventCard'

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
      <section className='relative isolate overflow-hidden border-b border-border bg-background text-foreground'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_48%,rgba(73,177,47,0.12),transparent_38%),linear-gradient(105deg,var(--background)_0%,var(--background)_55%,var(--accent)_100%)]'
        />

        <div
          aria-hidden='true'
          className='pointer-events-none absolute -right-32 -bottom-72 size-136 rounded-full bg-primary/15 blur-[100px]'
        />

        <div className='relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:min-h-147.5 lg:grid-cols-2 lg:gap-6 lg:px-8 lg:py-16'>
          {/* Hero Content */}
          <div className='relative z-10'>
            <span className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold leading-none text-primary'>
              <CalendarDays aria-hidden='true' className='size-3.5' />
              UPCOMING EVENTS
            </span>

            <h1 className='mt-5 max-w-2xl font-heading text-[clamp(2.5rem,5.2vw,4.25rem)] leading-[1.06] font-extrabold tracking-[-0.045em] text-foreground'>
              Discover &amp; Join{' '}
              <span className='bg-linear-to-r from-[#23AD56] to-[#1C87ED] bg-clip-text text-transparent'>
                Upcoming Events
              </span>
            </h1>

            <p className='mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg'>
              Be part of meaningful events, connect with people, and contribute
              to a better society.
            </p>

            {/* Search Bar - UI Only */}
            <div className='mt-8 flex w-full max-w-2xl flex-wrap items-center gap-2 rounded-2xl border border-border bg-card p-2 shadow-lg shadow-primary/5'>
              <div className='flex min-w-37.5 flex-1 items-center gap-3 px-3'>
                <Search
                  aria-hidden='true'
                  className='size-5 shrink-0 text-muted-foreground'
                />

                <input
                  type='search'
                  placeholder='Search events by name or location...'
                  className='h-11 w-full min-w-0 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-0'
                />
              </div>

              <Button
                type='button'
                size='lg'
                className='h-11 shrink-0 rounded-xl px-5'
              >
                Search
                <Search aria-hidden='true' className='size-4' />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className='relative mx-auto flex min-h-75 w-full max-w-xl items-center justify-center sm:min-h-95 lg:min-h-115'>
            <div
              aria-hidden='true'
              className='absolute inset-[8%] rounded-full bg-primary/10 blur-3xl'
            />

            <div
              aria-hidden='true'
              className='absolute right-[8%] top-[10%] size-20 rounded-full border border-primary/15 bg-primary/5'
            />

            <div
              aria-hidden='true'
              className='absolute bottom-[10%] left-[5%] size-14 rounded-full bg-accent'
            />

            <Image
              src={heroImage}
              alt='Volunteers planting a tree together at a community event'
              priority
              sizes='(max-width: 1024px) 90vw, 45vw'
              className='relative z-10 w-full max-w-125 object-contain drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]'
            />

            {/* Floating Icons */}
            <div className='absolute left-0 top-[15%] z-20 rounded-2xl border border-border bg-card/95 p-3.5 text-primary shadow-lg shadow-foreground/5 backdrop-blur transition-transform duration-300 hover:-translate-y-1 sm:left-[2%]'>
              <CalendarDays aria-hidden='true' className='size-5' />
            </div>

            <div className='absolute right-[2%] top-[20%] z-20 rounded-2xl border border-border bg-card/95 p-3.5 text-primary shadow-lg shadow-foreground/5 backdrop-blur transition-transform duration-300 hover:-translate-y-1'>
              <Heart aria-hidden='true' className='size-5 fill-primary/15' />
            </div>

            <div className='absolute bottom-[19%] left-[5%] z-20 rounded-2xl border border-border bg-card/95 p-3.5 text-primary shadow-lg shadow-foreground/5 backdrop-blur transition-transform duration-300 hover:-translate-y-1'>
              <Handshake aria-hidden='true' className='size-5' />
            </div>

            <div className='absolute bottom-[12%] right-[4%] z-20 rounded-2xl border border-border bg-card/95 p-3.5 text-primary shadow-lg shadow-foreground/5 backdrop-blur transition-transform duration-300 hover:-translate-y-1 sm:right-[8%]'>
              <UsersRound aria-hidden='true' className='size-5' />
            </div>
          </div>
        </div>
      </section>

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
