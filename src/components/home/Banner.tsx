import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf } from 'lucide-react'

import heroImage from '@/assets/hero.png'

const Banner = () => {
  return (
    <section
      id='about'
      className='relative isolate overflow-hidden border-b border-border bg-background text-foreground'
    >
      {/* Background Gradient */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_48%,rgba(73,177,47,0.15),transparent_38%),linear-gradient(105deg,var(--background)_0%,var(--background)_55%,var(--accent)_100%)]'
      />

      {/* Background Glow */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-32 bottom-[-18rem] size-[34rem] rounded-full bg-primary/15 blur-[100px]'
      />

      <div className='relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 py-10 sm:min-h-[280px] sm:grid-cols-[1fr_1fr] sm:gap-0 sm:py-7 lg:min-h-screen lg:px-8'>
        {/* Content */}
        <div className='relative z-10'>
          {/* Badge */}
          <span className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[11px] font-medium leading-none text-primary'>
            <Leaf className='size-3.5 shrink-0 fill-primary text-primary' />
            Together for a Better Tomorrow
          </span>

          {/* Heading */}
          <h1 className='mt-3 text-[clamp(2.15rem,5.25vw,4rem)] leading-[1.02] font-extrabold tracking-[-0.045em] text-foreground'>
            Join Events.
            <br />
            <span className='text-primary'>Create Impact.</span>
          </h1>

          {/* Description */}
          <p className='mt-3 max-w-[365px] text-[13px] leading-[1.45] text-muted-foreground sm:text-[13.5px]'>
            SocialBridge connects people with meaningful events to build a more
            inclusive, active and developed society.
          </p>

          {/* Buttons */}
          <div className='mt-4 flex flex-wrap items-center gap-2'>
            <Link
              href='/upcoming-events'
              className='inline-flex h-9 items-center justify-center gap-2 rounded-full bg-primary px-4 text-xs font-bold text-primary-foreground shadow-sm shadow-primary/20 transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background'
            >
              Explore Events
              <ArrowRight className='size-4' />
            </Link>

            <Link
              href='/create-event'
              className='inline-flex h-9 items-center justify-center rounded-full border border-border bg-card/70 px-4 text-xs font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background'
            >
              Create Event
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className='relative mx-auto h-56 w-full max-w-xl overflow-hidden rounded-[2rem] sm:absolute sm:inset-y-0 sm:right-0 sm:mx-0 sm:h-full sm:w-[53%] sm:max-w-none sm:rounded-none'>
          <Image
            src={heroImage}
            alt='Volunteers planting a tree together'
            priority
            sizes='(min-width: 640px) 53vw, 100vw'
            className='absolute inset-0 size-full scale-[1.25] object-cover object-[82%_75%]'
          />

          {/* Image Overlay */}
          <div
            aria-hidden='true'
            className='absolute inset-0 bg-gradient-to-r from-background via-background/25 to-transparent sm:from-background sm:via-background/15'
          />

          <div
            aria-hidden='true'
            className='absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/10'
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
