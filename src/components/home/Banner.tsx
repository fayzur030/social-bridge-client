import Image from 'next/image'
import Link from 'next/link'

import heroImage from '@/assets/socia_hero.jpg'
import { ArrowRight } from 'lucide-react'

const Banner = () => {
  return (
    <div className='bg-(image:--hero-background)'>
      <section className='relative overflow-hidden max-w-7xl mx-auto  px-3 py-16 transition-colors duration-300'>
        <div className='relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4  md:grid-cols-2 md:gap-12 lg:gap-26'>
          {/* Left Side - Content */}
          <div className='flex flex-col items-center text-center md:items-start md:text-left'>
            {/* Badge */}
            <p className='mb-5 w-fit rounded-full border border-hero-outline bg-card/50 px-3.5 py-2 text-[11px] font-medium text-brand-green backdrop-blur-sm sm:px-4 sm:text-xs'>
              Together we build better communities
            </p>

            {/* Heading */}
            <h1 className='font-serif text-[2.65rem] leading-[1.12] font-bold text-hero-copy sm:text-5xl lg:text-6xl'>
              <span className='block'>Small actions</span>
              <span className='mt-1.5 block text-brand-green sm:mt-2'>
                Big change.
              </span>
            </h1>

            {/* Description */}
            <p className='mt-5 max-w-md text-[13px] leading-6 text-hero-muted sm:mt-6 sm:text-base sm:leading-7'>
              Join cleanups, tree plantations, blood drives and more. Organize
              or join events that make your neighborhood stronger.
            </p>

            {/* Buttons */}
            <div className='mt-7 flex w-full flex-wrap items-center justify-center gap-3 md:w-auto md:justify-start sm:mt-8'>
              <Link
                href='/upcoming-events'
                className='group inline-flex h-11 shrink-0 items-center justify-center gap-1 rounded-xl bg-primary px-4 text-xs font-semibold text-white transition-all duration-300 hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hero-accent dark:text-black sm:px-6 sm:text-sm'
              >
                Explore Events
                <ArrowRight
                  aria-hidden='true'
                  className='size-4 transition-transform duration-200 group-hover:translate-x-1'
                />
              </Link>

              <Link
                href='/create-event'
                className='inline-flex h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-xl border border-hero-outline bg-card/40 px-4 text-xs font-semibold text-hero-copy backdrop-blur-sm transition-all duration-300 hover:bg-card/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:px-6 sm:text-sm'
              >
                Create an Event
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className='relative mx-auto w-full max-w-137.5 md:ml-auto'>
            {/* Image Glow */}
            <div className='absolute -inset-3 rounded-4xl bg-linear-to-br from-brand-green/30 via-brand-amber/20 to-brand-blue/30 blur-2xl' />

            <div className='relative aspect-5/4 overflow-hidden rounded-2xl border border-border/50 bg-card/20 shadow-2xl shadow-primary/10'>
              <Image
                src={heroImage}
                alt='People working together in community development events'
                fill
                priority
                sizes='(max-width: 767px) 100vw, 50vw'
                className='object-cover transition-transform duration-700 hover:scale-105'
              />

              {/* Image Overlay */}
              <div className='absolute inset-0 bg-linear-to-t from-deep2/30 via-transparent to-transparent' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
