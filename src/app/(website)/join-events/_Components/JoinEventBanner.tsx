import { CalendarDays, CalendarCheck, UsersRound, Sparkles } from 'lucide-react'

const JoinEventBanner = () => {
  return (
    <section className='relative isolate overflow-hidden border-b border-border bg-background'>
      {/* Background Decoration */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(34,197,94,0.12),transparent_40%)]'
      />

      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-24 -top-32 size-80 rounded-full bg-primary/10 blur-[100px]'
      />

      <div className='relative mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:px-8 lg:py-20'>
        {/* Banner Content */}
        <div className='max-w-2xl'>
          <span className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-primary'>
            <Sparkles className='size-3.5' />
            YOUR COMMUNITY JOURNEY
          </span>

          <h1 className='mt-5 text-3xl leading-tight font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl'>
            Events You&apos;ve{' '}
            <span className='bg-gradient-to-r from-[#23AD56] to-[#1C87ED] bg-clip-text text-transparent'>
              Joined
            </span>
          </h1>

          <p className='mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base'>
            Every event is an opportunity to connect, learn, and make a
            difference. Keep track of the events you&apos;ve joined and stay
            connected with your community.
          </p>
        </div>

        {/* Visual Card */}
        <div className='relative mx-auto flex w-full max-w-sm items-center justify-center lg:mx-0'>
          <div className='relative w-full rounded-3xl border border-border bg-card p-6 shadow-xl shadow-primary/5 sm:p-8'>
            <div className='absolute -right-3 -top-3 flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-background text-primary shadow-lg'>
              <CalendarCheck className='size-6' />
            </div>

            <div className='flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
              <CalendarDays className='size-7' />
            </div>

            <h3 className='mt-5 text-lg font-bold text-foreground'>
              Your Events, Your Impact
            </h3>

            <p className='mt-2 text-sm leading-6 text-muted-foreground'>
              Be present, build connections, and create meaningful memories.
            </p>

            <div className='mt-6 flex items-center gap-3 border-t border-border pt-5'>
              <div className='flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary'>
                <UsersRound className='size-5' />
              </div>

              <div>
                <p className='text-sm font-semibold text-foreground'>
                  Stay Connected
                </p>
                <p className='text-xs text-muted-foreground'>
                  Together we make a difference.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Circle */}
          <div
            aria-hidden='true'
            className='absolute -bottom-5 -left-5 -z-10 size-24 rounded-full border border-primary/20'
          />
        </div>
      </div>
    </section>
  )
}

export default JoinEventBanner
