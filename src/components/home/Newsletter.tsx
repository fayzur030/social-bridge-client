import { ArrowRight, Mail, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Newsletter = () => {
  return (
    <section className=''>
      <div className='relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-background via-card to-accent px-6 py-14 shadow-sm sm:px-12 sm:py-16 lg:px-20'>
        {/* Background Decorations */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/10 blur-3xl'
        />

        <div
          aria-hidden='true'
          className='pointer-events-none absolute -bottom-32 -left-20 size-72 rounded-full bg-accent/10 blur-3xl'
        />

        <div
          aria-hidden='true'
          className='pointer-events-none absolute -right-10 -top-10 size-52 rounded-full border border-primary/10'
        />

        {/* Content */}
        <div className='relative z-10 mx-auto max-w-2xl text-center'>
          {/* Icon */}
          <div className='mx-auto flex size-14 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary shadow-sm'>
            <Mail className='size-7' />
          </div>

          {/* Heading */}
          <div className='mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-primary uppercase'>
            <Sparkles className='size-4' />
            Stay Connected
          </div>

          <h2 className='mt-3 font-heading text-3xl leading-tight font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl'>
            Be Part of Something
            <span className='mt-2 block bg-gradient-to-r from-primary to-brand-blue bg-clip-text text-transparent'>
              Meaningful.
            </span>
          </h2>

          <p className='mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base'>
            Stay inspired with the latest community events, volunteering
            opportunities, and stories of positive change. Let meaningful
            opportunities find their way to your inbox.
          </p>

          {/* Newsletter Form */}
          <form className='mx-auto mt-9 flex max-w-lg flex-col gap-3 rounded-2xl border border-border bg-card/70 p-2 shadow-sm backdrop-blur-md sm:flex-row sm:rounded-full'>
            <Input
              type='email'
              placeholder='Enter your email address'
              aria-label='Email address'
              className='h-12 rounded-full border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-primary'
            />

            <Button
              type='submit'
              className='h-12 shrink-0 rounded-full bg-primary px-6 font-semibold text-primary-foreground hover:bg-primary-hover'
            >
              Subscribe
              <ArrowRight
                aria-hidden='true'
                data-icon='inline-end'
                className='size-4'
              />
            </Button>
          </form>

          <p className='mt-4 text-xs text-muted-foreground'>
            No spam. Just meaningful updates and opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
