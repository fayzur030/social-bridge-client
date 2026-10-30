'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import eventLogo from '@/assets/event_logo.png'
import { buttonVariants } from '../ui/button'
import { LogIn, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isUpcomingActive = pathname.startsWith('/upcoming-events')

  const navLinkClass = (active: boolean) =>
    cn(
      'block rounded-lg px-4 py-3 text-sm font-medium transition-colors',
      active
        ? 'bg-[#23AD56]/10 text-[#23AD56]'
        : 'text-muted-foreground hover:bg-accent hover:text-[#1C87ED]'
    )

  return (
    <header className='sticky top-0 z-50 border-b bg-background/95 backdrop-blur-md'>
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

          <div className='hidden min-w-0 flex-col md:flex'>
            <h1 className='bg-linear-to-r from-[#23AD56] to-[#1C87ED] bg-clip-text text-xl leading-tight font-bold text-transparent sm:text-2xl'>
              ImpactHub
            </h1>

            <p className='hidden text-[11px] leading-tight text-muted-foreground sm:block'>
              Together for a Better Tomorrow
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className='absolute left-1/2 hidden -translate-x-1/2 items-center md:flex'>
          <Link
            href='/upcoming-events'
            aria-current={isUpcomingActive ? 'page' : undefined}
            className={cn(
              'shrink-0 px-3 py-2 text-sm font-medium transition-colors',
              isUpcomingActive
                ? 'text-[#23AD56] '
                : 'text-gray-600 hover:text-[#1C87ED]'
            )}
          >
            Upcoming Events
          </Link>
        </div>

        {/* Desktop Login */}
        <div className='hidden md:flex items-center gap-4'>
          <div>Profile</div>
          <Link
            href='/login'
            className={cn(
              buttonVariants({ variant: 'default', size: 'lg' }),
              'flex items-center gap-2'
            )}
          >
            <LogIn className='size-4' />
            Login
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className='md:hidden'>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              type='button'
              aria-label='Open navigation menu'
              className='flex size-10 items-center justify-center rounded-lg border bg-background transition-colors hover:bg-accent'
            >
              {open ? <X className='size-5' /> : <Menu className='size-5' />}
            </SheetTrigger>

            <SheetContent side='right' className='w-70 sm:w-[320px] px-4'>
              <SheetHeader className='border-b pb-5 text-left'>
                <SheetTitle className='flex items-center gap-2'>
                  <Image
                    src={eventLogo}
                    alt='ImpactHub logo'
                    className='size-10 object-contain'
                  />

                  <span className='bg-linear-to-r from-[#23AD56] to-[#1C87ED] bg-clip-text text-xl font-bold text-transparent'>
                    ImpactHub
                  </span>
                </SheetTitle>
              </SheetHeader>

              <div className=' flex flex-col gap-3'>
                {/* Upcoming Events */}
                <Link
                  href='/upcoming-events'
                  aria-current={isUpcomingActive ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={navLinkClass(isUpcomingActive)}
                >
                  Upcoming Events
                </Link>

                {/* Login */}
                <Link
                  href='/login'
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants({ variant: 'default', size: 'lg' }),
                    'mt-2 flex w-full items-center justify-center gap-2'
                  )}
                >
                  <LogIn className='size-4' />
                  Login
                </Link>
              </div>

              <div className='absolute right-6 bottom-6 left-6 border-t pt-4'>
                <p className='text-center text-xs text-muted-foreground'>
                  Together for a Better Tomorrow
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
