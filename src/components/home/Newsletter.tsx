import {
  ArrowRight,
  CalendarDays,
  HandHeart,
  Mail,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const perks = [
  { icon: CalendarDays, label: 'Upcoming events' },
  { icon: HandHeart, label: 'Volunteer calls' },
  { icon: ShieldCheck, label: 'No spam, ever' },
]

const Newsletter = () => {
  return (
    <section className='px-4 sm:px-6 lg:px-0 mt-20'>
      <div className='relative isolate overflow-hidden rounded-none border border-border bg-linear-to-br from-background via-card to-accent/60 px-5 py-14  sm:px-12 sm:py-20 lg:px-20'>
        <div
          aria-hidden='true'
          // className='pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[44px_44px] opacity-40 mask-[radial-gradient(ellipse_at_center,var(--foreground)_20%,transparent_72%)]'
        />

        {/* Content */}
        <div className='relative mx-auto max-w-2xl text-center'>
          {/* Icon with glow */}

          {/* Eyebrow */}
          <div className='mt-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.15em] text-primary uppercase sm:text-xs'>
            <Sparkles className='size-3.5' />
            Community Updates
          </div>

          {/* Heading */}
          <h2 className='mt-5 font-heading text-2xl leading-tight font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl'>
            Stay Connected to
            <span className='mt-1 block bg-linear-to-r from-primary via-brand-blue to-primary bg-clip-text pb-1 text-transparent'>
              Your Community
            </span>
          </h2>

          <p className='mx-auto mt-5 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7'>
            Get community events, volunteer opportunities, and stories of local
            impact delivered straight to your inbox.
          </p>

          {/* Form with gradient ring */}
          <form className='mx-auto mt-9 max-w-lg rounded-2xl bg-linear-to-r from-primary/50 via-border to-brand-blue/50 p-px shadow-lg shadow-primary/10 sm:rounded-full'>
            <div className='flex flex-col gap-2 rounded-[calc(1rem-1px)] bg-card/90 p-2 backdrop-blur-xl sm:flex-row sm:rounded-full'>
              <div className='relative flex-1'>
                <Mail
                  aria-hidden='true'
                  className='pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground'
                />
                <Input
                  type='email'
                  required
                  placeholder='Your email address'
                  aria-label='Email address'
                  className='h-12 rounded-full border-transparent bg-transparent pl-11 text-foreground shadow-none placeholder:text-muted-foreground focus-visible:ring-primary'
                />
              </div>

              <Button
                type='submit'
                className='group relative h-12 shrink-0 overflow-hidden rounded-full bg-primary px-7 font-semibold text-primary-foreground shadow-md shadow-primary/30 transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/40'
              >
                {/* Shine effect */}
                <span
                  aria-hidden='true'
                  className='absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-primary-foreground/25 transition-all duration-700 group-hover:left-[150%]'
                />
                <span className='relative flex items-center gap-2'>
                  Subscribe
                  <ArrowRight
                    aria-hidden='true'
                    className='size-4 transition-transform duration-300 group-hover:translate-x-1'
                  />
                </span>
              </Button>
            </div>
          </form>

          {/* Trust chips */}
          <ul className='mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3'>
            {perks.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className='flex items-center gap-2 text-xs font-medium text-muted-foreground sm:text-sm'
              >
                <span className='flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary'>
                  <Icon className='size-3.5' />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
