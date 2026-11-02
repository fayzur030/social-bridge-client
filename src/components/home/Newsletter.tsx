import { ArrowRight, Mail, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Newsletter = () => {
  return (
    <section className=''>
      <div className='relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-[#EFF6FF] via-white to-[#ECFEFF] px-6 py-14 shadow-sm dark:border-white/10 dark:from-[#172554] dark:via-[#101C38] dark:to-[#083344] sm:px-12 sm:py-16 lg:px-20'>
        {/* Background Decorations */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20'
        />

        <div
          aria-hidden='true'
          className='pointer-events-none absolute -bottom-32 -left-20 size-72 rounded-full bg-accent/10 blur-3xl dark:bg-accent/20'
        />

        <div
          aria-hidden='true'
          className='pointer-events-none absolute -right-10 -top-10 size-52 rounded-full border border-primary/10 dark:border-white/10'
        />

        {/* Content */}
        <div className='relative z-10 mx-auto max-w-2xl text-center'>
          {/* Icon */}
          <div className='mx-auto flex size-14 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-cyan-300'>
            <Mail className='size-7' />
          </div>

          {/* Heading */}
          <div className='mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-primary uppercase dark:text-cyan-300'>
            <Sparkles className='size-4' />
            Stay Connected
          </div>

          <h2 className='mt-3 font-heading text-3xl leading-tight font-bold tracking-tight text-[#172554] dark:text-white sm:text-4xl lg:text-5xl'>
            Be Part of Something
            <span className='mt-2 block bg-gradient-to-r from-primary to-[#06B6D4] bg-clip-text text-transparent'>
              Meaningful.
            </span>
          </h2>

          <p className='mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base'>
            Stay inspired with the latest community events, volunteering
            opportunities, and stories of positive change. Let meaningful
            opportunities find their way to your inbox.
          </p>

          {/* Newsletter Form */}
          <form className='mx-auto mt-9 flex max-w-lg flex-col gap-3 rounded-2xl border border-primary/10 bg-white/70 p-2 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 sm:flex-row sm:rounded-full'>
            <Input
              type='email'
              placeholder='Enter your email address'
              aria-label='Email address'
              className='h-12 rounded-full border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-primary dark:border-slate-700 dark:bg-slate-900/80 dark:text-white dark:placeholder:text-slate-400'
            />

            <Button
              type='submit'
              className='h-12 shrink-0 rounded-full bg-primary px-6 font-semibold text-white hover:bg-primary/90'
            >
              Subscribe
              <ArrowRight
                aria-hidden='true'
                data-icon='inline-end'
                className='size-4'
              />
            </Button>
          </form>

          <p className='mt-4 text-xs text-slate-500 dark:text-slate-400'>
            No spam. Just meaningful updates and opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
