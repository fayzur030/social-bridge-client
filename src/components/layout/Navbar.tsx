'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Moon, Sun, UsersRound, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import NavbarAuth from '../user/NavbarAuth'

const links = [
  {
    label: 'Home',
    href: '/',
    matches: (pathname: string) => pathname === '/',
  },
  {
    label: 'Upcoming Events',
    href: '/upcoming-events',
    matches: (pathname: string) => pathname.startsWith('/upcoming-events'),
  },
  // {
  //   label: 'About',
  //   href: '/#about',
  //   matches: () => false,
  // },
  // {
  //   label: 'Impact',
  //   href: '/#impact',
  //   matches: () => false,
  // },
  // {
  //   label: 'Contact',
  //   href: '/#contact',
  //   matches: () => false,
  // },
]

const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const { resolvedTheme, setTheme } = useTheme()

  const isDarkMode = resolvedTheme === 'dark'

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark')
  }

  const navLinkClass = (active: boolean) =>
    cn(
      'block rounded-lg px-4 py-3 text-sm font-medium transition-colors sm:px-2 sm:py-2 sm:text-xs lg:px-3 lg:text-sm',
      active
        ? 'bg-primary/10 text-primary sm:bg-transparent'
        : 'text-muted-foreground hover:bg-accent hover:text-primary sm:hover:bg-transparent'
    )

  return (
    <header className='sticky top-0 z-50 border-b border-border bg-background text-foreground'>
      <nav
        aria-label='Main navigation'
        className='mx-auto flex h-15 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8'
      >
        {/* Logo */}
        <Link
          href='/'
          aria-label='SocialBridge home'
          className='flex shrink-0 items-center gap-2'
        >
          <UsersRound
            aria-hidden='true'
            className='size-7 fill-primary/20 text-primary'
            strokeWidth={2.5}
          />

          <span className='text-[17px] font-bold tracking-[-0.04em] text-foreground'>
            SocialBridge
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden items-center gap-1 sm:flex'>
          {links.map(({ label, href, matches }) => {
            const isActive = matches(pathname)

            return (
              <Link
                key={label}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'relative px-2 py-2 text-[11px] font-medium transition-colors lg:px-3 lg:text-xs',
                  isActive
                    ? 'text-primary after:absolute after:right-2 after:bottom-0 after:left-2 after:h-0.5 after:rounded-full after:bg-primary lg:after:right-3 lg:after:left-3'
                    : 'text-muted-foreground hover:text-primary'
                )}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* Right Actions */}
        <div className='flex shrink-0 items-center gap-2 sm:gap-3'>
          {/* Theme Toggle */}
          <button
            type='button'
            aria-label='Toggle theme'
            onClick={toggleTheme}
            className='flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
          >
            {isDarkMode ? (
              <Sun className='size-4' />
            ) : (
              <Moon className='size-4' />
            )}
          </button>

          {/* Desktop Auth */}
          <div className='hidden sm:block'>
            <NavbarAuth />
          </div>

          {/* Mobile Navigation */}
          <div className='sm:hidden'>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                type='button'
                aria-label={
                  open ? 'Close navigation menu' : 'Open navigation menu'
                }
                className='flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent hover:text-primary'
              >
                {open ? <X className='size-5' /> : <Menu className='size-5' />}
              </SheetTrigger>

              <SheetContent
                side='right'
                className='flex w-[min(20rem,calc(100vw-2rem))] flex-col border-border bg-background px-4 text-foreground'
              >
                {/* Mobile Logo */}
                <SheetHeader className='border-b border-border pb-5 text-left'>
                  <SheetTitle className='flex items-center gap-2 text-foreground'>
                    <UsersRound
                      aria-hidden='true'
                      className='size-7 fill-primary/20 text-primary'
                    />

                    <span className='text-lg font-bold'>SocialBridge</span>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Links */}
                <div className='flex flex-col gap-2'>
                  {links.map(({ label, href, matches }) => {
                    const isActive = matches(pathname)

                    return (
                      <Link
                        key={label}
                        href={href}
                        aria-current={isActive ? 'page' : undefined}
                        onClick={() => setOpen(false)}
                        className={navLinkClass(isActive)}
                      >
                        {label}
                      </Link>
                    )
                  })}

                  <NavbarAuth mobile onNavigate={() => setOpen(false)} />
                </div>

                {/* Mobile Footer */}
                <p className='mt-auto border-t border-border pt-4 text-center text-xs text-muted-foreground'>
                  Together for a Better Tomorrow
                </p>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
