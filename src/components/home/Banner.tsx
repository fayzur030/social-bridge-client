import Image from 'next/image'
import Link from 'next/link'

import heroImage from '@/assets/socia_hero.jpg'
import { ArrowRight } from 'lucide-react'

const Banner = () => {
  return (
    <section className='relative overflow-hidden bg-[image:var(--hero-background)] px-3 py-16 transition-colors duration-300 sm:px-8 sm:py-20 lg:px-10 lg:py-24'>
      <div className='relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16'>
        {/* Left Side - Content */}
        <div className='flex flex-col items-center md:items-start md:text-left'>
          {/* Badge */}
          <p className='mb-5 w-fit rounded-full border border-hero-accent/40 bg-card/50 px-4 py-2 text-xs font-medium text-brand-amber backdrop-blur-sm'>
            Together we build better communities
          </p>

          {/* Heading */}
          <h1 className='font-serif text-5xl leading-[1.1] font-bold text-hero-copy sm:text-5xl lg:text-6xl'>
            <span className='block'>Small actions</span>
            <span className='mt-2 block text-hero-accent'>Big change.</span>
          </h1>

          {/* Description */}
          <p className='mt-6 max-w-xl text-sm leading-7 text-hero-muted sm:text-base'>
            Join cleanups, tree plantations, blood drives and more. Organize or
            join events that make your neighbourhood stronger.
          </p>

          {/* Buttons */}
          <div className='mt-8 flex flex-nowrap items-center justify-center gap-3 md:justify-start'>
            <Link
              href='/upcoming-events'
              className='group inline-flex h-11 shrink-0 items-center justify-center gap-1 rounded-xl bg-hero-accent px-4 text-xs font-semibold text-deep2 shadow-lg shadow-hero-accent/20 transition-all duration-300 hover:-translate-y-1 hover:bg-hero-accent/90 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hero-accent sm:px-6 sm:text-sm'
            >
              Explore Events
              <ArrowRight
                aria-hidden='true'
                className='size-4 transition-transform duration-200 group-hover:translate-x-1'
              />
            </Link>

            <Link
              href='/create-event'
              className='inline-flex h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-xl border border-hero-outline bg-card/40 px-4 text-xs font-semibold text-hero-copy backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-card/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:px-6 sm:text-sm'
            >
              Create an Event
            </Link>
          </div>

          {/* Bottom Text */}
          <p className='mt-8 text-xs font-medium tracking-wide text-hero-muted'>
            Together, we can make every action count.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className='relative mx-auto w-full max-w-[550px] md:ml-auto'>
          {/* Image Glow */}
          <div className='absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-green/30 via-brand-amber/20 to-brand-blue/30 blur-2xl' />

          <div className='relative aspect-[5/4] overflow-hidden rounded-2xl border border-border/50 bg-card/20 shadow-2xl shadow-primary/10'>
            <Image
              src={heroImage}
              alt='People working together in community development events'
              fill
              priority
              sizes='(max-width: 767px) 100vw, 50vw'
              className='object-cover transition-transform duration-700 hover:scale-105'
            />

            {/* Image Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-deep2/30 via-transparent to-transparent' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
