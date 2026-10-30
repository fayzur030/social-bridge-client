'use client'

import Image from 'next/image'
import Link from 'next/link'
import eventLogo from '@/assets/event_logo.png'
import { Button } from '../ui/button'
import { LogIn } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const pathname = usePathname()

  const isUpcomingActive = pathname.startsWith('/upcoming-events')

  return (
    <header className='border-b bg-background/95'>
      <nav
        aria-label='Main navigation'
        className='mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6 lg:px-8'
      >
        {/* Logo */}
        <Link
          href='/'
          aria-label='ImpactHub home'
          className='flex min-w-0 shrink items-center gap-2'
        >
          <Image
            src={eventLogo}
            alt='ImpactHub logo'
            priority
            className='size-12 shrink-0 object-contain sm:size-10'
          />

          <div className='md:flex min-w-0 flex-col hidden '>
            <h1 className='bg-linear-to-r from-[#23AD56] to-[#1C87ED] bg-clip-text text-xl leading-tight font-bold text-transparent sm:text-2xl'>
              ImpactHub
            </h1>

            <p className='hidden text-[11px] leading-tight text-muted-foreground sm:block'>
              Together for a Better Tomorrow
            </p>
          </div>
        </Link>

        {/* Navigation Link */}
        <Link
          href='/upcoming-events'
          aria-current={isUpcomingActive ? 'page' : undefined}
          className={cn(
            'shrink-0 px-1 py-2 text-xs font-medium transition-colors sm:px-3 sm:text-sm',
            isUpcomingActive
              ? 'text-[#23AD56]'
              : 'text-gray-600 hover:text-[#1C87ED]'
          )}
        >
          Upcoming Events
        </Link>

        {/* Login Button */}
        <div className='shrink-0'>
          <Link href='/login'>
            <Button variant='default' size='lg' className='flex items-center '>
              <LogIn className='size-4' />
              Login
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
