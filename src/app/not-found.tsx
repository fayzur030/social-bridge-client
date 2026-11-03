import Link from 'next/link'
import { ArrowLeft, ArrowRight, UsersRound } from 'lucide-react'

export default function NotFound() {
  return (
    <main className='relative flex flex-1 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-background to-amber-50 px-5 py-20 dark:from-[#111b33] dark:via-background dark:to-[#1b1b2e] sm:px-8'>
      <div
        aria-hidden='true'
        className='absolute -top-32 -right-24 size-80 rounded-full bg-primary/10 blur-3xl'
      />
      <div
        aria-hidden='true'
        className='absolute -bottom-36 -left-24 size-96 rounded-full bg-brand-amber/10 blur-3xl'
      />

      <section className='relative z-10 mx-auto w-full max-w-2xl text-center'>
        <Link
          href='/'
          aria-label='SocialBridge home'
          className='mb-10 inline-flex items-center gap-2 text-lg font-bold tracking-tight'
        >
          <UsersRound
            aria-hidden='true'
            className='size-6 fill-primary/20 text-primary'
            strokeWidth={2.5}
          />
          <span>
            <span className='text-primary'>Social</span>
            <span className='text-brand-amber'>Bridge</span>
          </span>
        </Link>

        <p className='font-heading text-8xl leading-none font-extrabold tracking-tight text-primary sm:text-9xl'>
          404
        </p>
        <h1 className='mt-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
          Looks like you took a wrong turn
        </h1>
        <p className='mx-auto mt-4 max-w-lg text-base leading-7 text-muted-foreground'>
          We can’t find the page you’re looking for. It may have moved, or the
          link might be out of date.
        </p>

        <div className='mt-8 flex flex-wrap justify-center gap-3'>
          <Link
            href='/'
            className='inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'
          >
            <ArrowLeft aria-hidden='true' className='size-4' />
            Back to home
          </Link>
          <Link
            href='/upcoming-events'
            className='inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background/70 px-5 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'
          >
            Explore events
            <ArrowRight aria-hidden='true' className='size-4' />
          </Link>
        </div>
      </section>
    </main>
  )
}
