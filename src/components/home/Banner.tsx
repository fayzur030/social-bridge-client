import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  Sparkles,
} from 'lucide-react'

import { Button } from '@/components/ui/button'

const Banner = () => {
  return (
    <section className='relative isolate flex min-h-[650px] items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-[#EFF6FF] via-background to-[#ECFEFF] px-5 py-24 dark:from-[#172554] dark:via-background dark:to-[#083344] sm:px-8 lg:min-h-[700px]'>
      {/* Background Decorations */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -left-40 -top-40 -z-10 size-[450px] rounded-full bg-primary/10 blur-[120px]'
      />

      <div
        aria-hidden='true'
        className='pointer-events-none absolute -bottom-40 -right-40 -z-10 size-[450px] rounded-full bg-accent/10 blur-[120px]'
      />

      <div
        aria-hidden='true'
        className='pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10'
      />

      <div
        aria-hidden='true'
        className='pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10'
      />

      {/* Hero Content */}
      <div className='mx-auto w-full max-w-4xl text-center'>
        {/* Badge */}
        <div className='mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-primary shadow-sm backdrop-blur-md sm:text-sm'>
          <Sparkles className='size-4' />
          <span>BUILD STRONGER COMMUNITIES</span>
        </div>

        {/* Heading */}
        <h1 className='font-heading text-4xl leading-[1.15] font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl'>
          Small Actions.
          <span className='mt-3 block bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent'>
            Meaningful Change.
          </span>
        </h1>

        {/* Description */}
        <p className='mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg'>
          Connect with people who care, discover meaningful community events,
          and turn your time and skills into a positive impact. Together, we can
          build stronger communities and create a better tomorrow.
        </p>

        {/* CTA Buttons */}
        <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
          <Button
            render={<Link href='/upcoming-events' />}
            nativeButton={false}
            size='lg'
            className='group h-12 w-full rounded-full px-7 sm:w-auto'
          >
            Explore Events
            <ArrowRight
              aria-hidden='true'
              data-icon='inline-end'
              className='transition-transform duration-200 group-hover/button:translate-x-1'
            />
          </Button>

          <Button
            render={<Link href='/create-event' />}
            nativeButton={false}
            variant='outline'
            size='lg'
            className='h-12 w-full rounded-full px-7 sm:w-auto'
          >
            Create an Event
            <ArrowUpRight
              aria-hidden='true'
              data-icon='inline-end'
              className='size-4'
            />
          </Button>
        </div>

        {/* Bottom Highlight */}
        <div className='mx-auto mt-16 flex max-w-md items-center justify-center gap-3 border-t border-border/70 pt-7'>
          <div className='flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary'>
            <HeartHandshake className='size-5' />
          </div>

          <div className='text-left'>
            <p className='text-sm font-semibold text-foreground'>
              Good Things Happen Together.
            </p>
            <p className='mt-1 text-xs text-muted-foreground'>
              Find your people. Find your next step.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
