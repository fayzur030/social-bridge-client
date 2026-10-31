import Image from 'next/image'
import { Caveat } from 'next/font/google'
import {
  ArrowRight,
  CalendarDays,
  Heart,
  Leaf,
  Users,
  CalendarPlus,
} from 'lucide-react'
import heroImage from '@/assets/hero.png'
import { Button } from '@/components/ui/button'

const caveat = Caveat({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-script',
  display: 'swap',
})

const features = [
  {
    icon: Users,
    title: 'Discover Events',
    description: 'Find and join local and global events.',
    iconClassName: 'bg-primary/10 text-primary',
  },
  {
    icon: Heart,
    title: 'Support Causes',
    description: 'Contribute to verified causes and make a real difference.',
    iconClassName: 'bg-[#047857]/10 text-[#047857]',
  },
  {
    icon: CalendarDays,
    title: 'Connect Community',
    description: 'Collaborate with NGOs, volunteers and changemakers.',
    iconClassName: 'bg-primary/10 text-primary',
  },
  {
    icon: Leaf,
    title: 'Track Impact',
    description: 'See the real impact of your participation.',
    iconClassName: 'bg-[#047857]/10 text-[#047857]',
  },
]

const Banner = () => {
  return (
    <section className='relative isolate overflow-hidden bg-background'>
      {/* Soft background washes */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-primary/10 blur-3xl'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -bottom-32 -left-24 size-80 rounded-full bg-[#047857]/10 blur-3xl'
      />

      <div className='relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-10'>
        <div className='grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8'>
          {/* Copy */}
          <div className='text-center lg:text-left'>
            <span className='inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary sm:text-xs'>
              <Leaf className='size-4 shrink-0' />
              Social Development Events Platform
            </span>

            <h1 className='font-heading mt-4 text-4xl leading-[1.06] font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.3rem]'>
              Small Actions
              <br />
              Create <span className='text-primary'>Big</span>{' '}
              <span className='text-[#047857]'>Change</span>
            </h1>

            <p className='mx-auto mt-4 max-w-lg text-xs leading-relaxed text-muted-foreground md:text-base lg:mx-0'>
              Join events, support causes, and be part of a community that works
              together for a better, more inclusive and sustainable tomorrow.
            </p>

            <div className='mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:mt-5 lg:justify-start'>
              <Button variant='default' size='lg' className='w-full sm:w-auto'>
                Explore Events
                <ArrowRight className='size-4' />
              </Button>

              <Button
                variant='outline'
                size='lg'
                className='w-full cursor-pointer font-semibold text-foreground sm:w-auto'
              >
                <CalendarPlus className='size-5 text-primary' />
                Create An Event
              </Button>
            </div>

            {/* Feature cards */}
            <ul
              id='features'
              className='mt-8 grid scroll-mt-24 grid-cols-2 gap-x-4 gap-y-6 text-left sm:gap-x-6 lg:mt-7 lg:grid-cols-4 lg:gap-x-4'
            >
              {features.map(
                ({ icon: Icon, title, description, iconClassName }) => (
                  <li key={title} className='flex flex-col gap-2'>
                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-xl sm:size-10 ${iconClassName}`}
                    >
                      <Icon className='size-5' />
                    </span>

                    <h2 className='text-sm font-semibold text-foreground'>
                      {title}
                    </h2>

                    <p className='text-xs leading-snug text-muted-foreground lg:text-[11px] lg:leading-tight'>
                      {description}
                    </p>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Imagery */}
          <div
            className={`${caveat.variable} relative mx-auto w-full max-w-md lg:max-w-none`}
          >
            <div className='mb-2 text-right text-foreground sm:mb-4'>
              <p
                aria-hidden='true'
                className='mb-1 flex justify-end gap-1.5 pr-2'
              >
                <span className='h-1 w-4 rotate-12 rounded-full bg-primary' />
                <span className='h-1 w-4 rotate-12 rounded-full bg-primary' />
              </p>

              <p
                style={{ fontFamily: 'var(--font-script)' }}
                className='text-2xl leading-[1.1] sm:text-3xl'
              >
                Better Communities
                <br />
                Stronger{' '}
                <span className='relative inline-block'>
                  <span className='relative z-10'>Tomorrow</span>
                  <span
                    aria-hidden='true'
                    className='absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-[#047857]'
                  />
                </span>
              </p>
            </div>

            <Image
              src={heroImage}
              alt='Volunteers planting a tree together'
              priority
              sizes='(min-width: 1024px) 42vw, (min-width: 640px) 28rem, 100vw'
              className='h-auto w-full'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
