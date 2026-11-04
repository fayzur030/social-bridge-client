'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowUpRight,
  // HeartPlus,
  Menu,
  Moon,
  Sun,
  UsersRound,
  X,
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import heroIcon from '@/assets/heroIcon.svg'
import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import NavbarAuth from '../user/NavbarAuth'
import Image from 'next/image'

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
]

const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const { resolvedTheme, setTheme } = useTheme()

  const isDarkMode = resolvedTheme === 'dark'

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark')
  }

  return (
    <header className='sticky top-0 z-50 border-b border-border bg-background text-foreground'>
      <nav
        aria-label='Main navigation'
        className='mx-auto flex h-15 w-full max-w-7xl items-center justify-between gap-2 px-3 sm:gap-3 sm:px-6 lg:px-8'
      >
        {/* Logo */}
        <Link
          href='/'
          aria-label='SocialBridge home'
          className='flex shrink-0 items-center gap-1.5 sm:gap-2.5'
        >
          {/* <div className='flex size-11 items-center justify-center rounded-xl bg-linear-to-br from-brand-green-hover to-brand-green shadow-md shadow-brand-green/20 transition-transform duration-300 group-hover:scale-105'>
            <HeartPlus
              aria-hidden='true'
              className='size-5 text-primary-foreground dark:text-white'
              strokeWidth={2.5}
            />
          </div> */}
          <Image
            src={heroIcon}
            alt='Social Bridge'
            className='size-9 sm:size-11.5'
          />

          <h1 className='text-base font-extrabold tracking-tight sm:text-xl'>
            <span className='text-primary'>Social</span>
            <span className='text-brand-amber'>Bridge</span>
          </h1>
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
        <div className='flex shrink-0 items-center gap-1 sm:gap-3'>
          {/* Theme Toggle */}
          <button
            type='button'
            aria-label='Toggle theme'
            onClick={toggleTheme}
            className='flex size-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:size-9'
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
                className='flex size-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent hover:text-accent-foreground sm:size-9'
              >
                {open ? <X className='size-5' /> : <Menu className='size-5' />}
              </SheetTrigger>

              <SheetContent
                side='right'
                className='flex max-h-dvh w-[min(20rem,calc(100vw-2rem))] flex-col overflow-y-auto overscroll-contain border-border bg-background px-4 text-foreground'
              >
                {/* Mobile Logo */}
                <SheetHeader className='border-b border-border pb-5 text-left'>
                  <SheetTitle className='flex items-center gap-2 text-foreground'>
                    {/* <UsersRound
                      aria-hidden='true'
                      className='size-7 fill-primary/20 text-primary'
                    /> */}
                    <Image
                      src={heroIcon}
                      alt='Social Bridge'
                      className='size-9 sm:size-11.5'
                    />

                    <span className='text-lg font-bold'>SocialBridge</span>
                  </SheetTitle>
                </SheetHeader>

                <NavbarAuth mobile onNavigate={() => setOpen(false)} />

                {/* Mobile Links */}
                <div className='flex flex-col gap-2 px-1'>
                  {links.map(({ label, href, matches }) => {
                    const isActive = matches(pathname)

                    return (
                      <Link
                        key={label}
                        href={href}
                        aria-current={isActive ? 'page' : undefined}
                        onClick={() => setOpen(false)}
                        className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${
                          isActive
                            ? 'text-primary'
                            : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                        }`}
                      >
                        <span>{label}</span>

                        <ArrowUpRight
                          className={`size-4 transition-transform duration-200 ${
                            isActive
                              ? 'text-primary'
                              : 'text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary'
                          }`}
                        />
                      </Link>
                    )
                  })}
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
