import Image from 'next/image'
import Link from 'next/link'

import heroImage from '@/assets/socia_hero.jpg'
import { ArrowRight } from 'lucide-react'

const Banner = () => {
  return (
    <section className='relative overflow-hidden bg-gradient-to-b from-blue-200 via-indigo-100 to-slate-50 px-5 py-16 transition-colors duration-300 dark:from-[#312E81] dark:via-[#172554] dark:to-[#0B1220] sm:px-8 sm:py-20 lg:px-10 lg:py-24'>
      <div className='relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16'>
        {/* Left Side - Content */}
        <div className='flex flex-col items-center text-center md:items-start md:text-left'>
          {/* Badge */}
          <p className='mb-5 w-fit rounded-full border border-hero-accent/40 bg-white/50 px-4 py-2 text-xs font-medium text-brand-amber backdrop-blur-sm dark:bg-white/5'>
            Together we build better communities
          </p>

          {/* Heading */}
          <h1 className='font-serif text-4xl leading-[1.1] font-bold text-slate-900 sm:text-5xl lg:text-6xl dark:text-white'>
            <span className='block'>Small actions</span>
            <span className='mt-2 block text-hero-accent'>Big change.</span>
          </h1>

          {/* Description */}
          <p className='mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300'>
            Join cleanups, tree plantations, blood drives and more. Organize or
            join events that make your neighbourhood stronger.
          </p>

          {/* Buttons */}
          <div className='mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start'>
            <Link
              href='/upcoming-events'
              className='inline-flex h-11 items-center justify-center rounded-xl bg-hero-accent px-6 text-sm font-semibold text-deep2 shadow-lg shadow-hero-accent/20 transition-all duration-300 hover:-translate-y-1 hover:bg-hero-accent/90 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hero-accent gap-0.5'
            >
              Explore Events
              <ArrowRight
                aria-hidden='true'
                data-icon='inline-end'
                className='transition-transform duration-200 group-hover/button:translate-x-1'
              />
            </Link>

            <Link
              href='/create-event'
              className='inline-flex h-11 items-center justify-center rounded-xl border border-hero-outline bg-white/40 px-6 text-sm font-semibold text-hero-copy backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:bg-white/5 dark:hover:bg-white/10'
            >
              Create an Event
            </Link>
          </div>

          {/* Bottom Text */}
          <p className='mt-8 text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400'>
            Together, we can make every action count.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className='relative mx-auto w-full max-w-[550px] md:ml-auto'>
          {/* Image Glow */}
          <div className='absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-cyan-400/30 blur-2xl' />

          <div className='relative aspect-[5/4] overflow-hidden rounded-2xl border border-white/50 bg-white/20 shadow-2xl shadow-blue-950/10 dark:border-white/10 dark:shadow-black/30'>
            <Image
              src={heroImage}
              alt='People working together in community development events'
              fill
              priority
              sizes='(max-width: 767px) 100vw, 50vw'
              className='object-cover transition-transform duration-700 hover:scale-105'
            />

            {/* Image Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
