'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import eventLogo from '@/assets/event_logo.png'
import { HeartPlus, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import NavbarAuth from '../user/NavbarAuth'

const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isUpcomingActive = pathname.startsWith('/upcoming-events')

  const navLinkClass = (active: boolean) =>
    cn(
      'block rounded-lg px-4 py-3 text-sm font-medium transition-colors',
      active
        ? 'bg-primary/10 text-primary'
        : 'text-muted-foreground hover:bg-accent hover:text-primary'
    )

  return (
    <header className='sticky top-0 z-50 border-b bg-background/95 backdrop-blur-md'>
      <nav
        aria-label='Main navigation'
        className='relative mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6 lg:px-8'
      >
        {/* Logo */}
        <Link
          href='/'
          aria-label='SocialBridge home'
          className='flex min-w-0 shrink items-center gap-2.5'
        >
          {/* Logo Icon */}
          <div className='flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#86EFAC] to-[#16A34A] shadow-[0_0_18px_rgba(22,163,74,0.25)]'>
            <HeartPlus className='size-5 text-white' strokeWidth={2.5} />
          </div>

          {/* Brand Name */}
          <div className='flex min-w-0 flex-col'>
            <h1 className='bg-gradient-to-r from-[#16A34A] to-[#047857] bg-clip-text text-lg font-extrabold tracking-tight text-transparent'>
              SocialBridge
            </h1>

            <p className='hidden text-[11px] leading-tight text-muted-foreground sm:block'>
              Connecting communities
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className='absolute left-1/2 hidden -translate-x-1/2 items-center md:flex'>
          <Link
            href='/upcoming-events'
            aria-current={isUpcomingActive ? 'page' : undefined}
            className={cn(
              'shrink-0 px-3 py-2 text-sm font-body transition-colors',
              isUpcomingActive
                ? 'text-primary'
                : 'text-muted-foreground hover:text-primary'
            )}
          >
            Upcoming Events
          </Link>
        </div>

        {/* Desktop Login */}
        <NavbarAuth />

        {/* Mobile Navigation */}
        <div className='md:hidden'>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              type='button'
              aria-label={
                open ? 'Close navigation menu' : 'Open navigation menu'
              }
              className='flex size-10 items-center justify-center rounded-lg border bg-background transition-colors hover:bg-accent'
            >
              {open ? <X className='size-5' /> : <Menu className='size-5' />}
            </SheetTrigger>

            <SheetContent
              side='right'
              className='w-[min(18rem,calc(100vw-2rem))] overflow-y-auto px-4 sm:w-[320px]'
            >
              <SheetHeader className='border-b pb-5 text-left'>
                <SheetTitle className='flex items-center gap-2'>
                  <Image
                    src={eventLogo}
                    alt='SocialBridge logo'
                    className='size-10 object-contain'
                  />

                  <span className='bg-gradient-to-r from-[#16A34A] to-[#047857] bg-clip-text text-xl font-bold text-transparent'>
                    SocialBridge
                  </span>
                </SheetTitle>
              </SheetHeader>

              <div className='flex flex-col gap-3'>
                {/* Upcoming Events */}
                <Link
                  href='/upcoming-events'
                  aria-current={isUpcomingActive ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={navLinkClass(isUpcomingActive)}
                >
                  Upcoming Events
                </Link>

                {/* Account Actions */}
                <NavbarAuth mobile onNavigate={() => setOpen(false)} />
              </div>

              <div className='mt-auto border-t pt-4'>
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
