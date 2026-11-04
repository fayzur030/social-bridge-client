import Link from 'next/link'
import { ArrowRight, Heart, UsersRound } from 'lucide-react'
import heroIcon from '@/assets/heroIcon.svg'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='border-t border-border bg-muted/40 text-foreground'>
      <div className='mx-auto max-w-7xl px-6 pt-12 pb-6 sm:px-8 sm:pt-14 lg:px-10'>
        <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12'>
          <div className='max-w-sm'>
            <Link
              href='/'
              aria-label='SocialBridge home'
              className='flex shrink-0 items-center gap-2'
            >
              {/* <UsersRound
                aria-hidden='true'
                className='size-7 fill-primary/20 text-primary'
                strokeWidth={2.5}
              /> */}
              <Image src={heroIcon} alt='Social Bridge' className='size-11.5' />

              <h1 className='text-[24px] font-bold tracking-[-0.04em]'>
                <span className='text-primary'>Social</span>
                <span className='text-brand-amber'>Bridge</span>
              </h1>
            </Link>

            <p className='mt-4 text-sm leading-6 text-muted-foreground'>
              Bringing people together through meaningful events and everyday
              acts of community care.
            </p>

            <Link
              href='/create-event'
              className='group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80'
            >
              Create an event
              <ArrowRight
                aria-hidden='true'
                className='size-4 transition-transform duration-200 group-hover:translate-x-1'
              />
            </Link>
          </div>

          <nav aria-label='Explore'>
            <h2 className='text-sm font-semibold'>Explore</h2>
            <ul className='mt-4 space-y-3'>
              <li>
                <Link
                  href='/'
                  className='text-sm text-muted-foreground transition-colors hover:text-primary'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/upcoming-events'
                  className='text-sm text-muted-foreground transition-colors hover:text-primary'
                >
                  Upcoming events
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label='Get involved'>
            <h2 className='text-sm font-semibold'>Get involved</h2>
            <ul className='mt-4 space-y-3'>
              <li>
                <Link
                  href='/create-event'
                  className='text-sm text-muted-foreground transition-colors hover:text-primary'
                >
                  Create an event
                </Link>
              </li>
              <li>
                <Link
                  href='/join-events'
                  className='text-sm text-muted-foreground transition-colors hover:text-primary'
                >
                  Joined events
                </Link>
              </li>
              <li>
                <Link
                  href='/manage-events'
                  className='text-sm text-muted-foreground transition-colors hover:text-primary'
                >
                  Manage events
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className='text-sm font-semibold'>A little goes a long way</h2>
            <p className='mt-4 text-sm leading-6 text-muted-foreground'>
              Find a cause you care about, show up, and make a difference
              alongside your community.
            </p>
            <span className='mt-4 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground'>
              Made for people who care
              <Heart
                aria-hidden='true'
                className='size-3.5 fill-primary/15 text-primary'
              />
            </span>
          </div>
        </div>

        <div className='mt-10 flex flex-col gap-3 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between'>
          <p>
            © {new Date().getFullYear()} SocialBridge. Together, we make a
            difference.
          </p>
          <Link
            href='/login'
            className='w-fit transition-colors hover:text-primary'
          >
            Sign in to your account
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
