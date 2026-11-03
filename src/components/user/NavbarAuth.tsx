'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'
import {
  CalendarPlus,
  CircleCheck,
  CirclePlus,
  LogIn,
  LogOut,
  Settings,
} from 'lucide-react'
import { authClient } from '@/lib/auth-client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from '../ui/avatar'
import { toast } from 'sonner'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { useRouter } from 'next/navigation'
import { Separator } from '../ui/separator'

interface NavbarAuthProps {
  mobile?: boolean
  onNavigate?: () => void
  compact?: boolean
}

const NavbarAuth = ({
  mobile = false,
  onNavigate,
  compact = false,
}: NavbarAuthProps) => {
  const router = useRouter()
  const { data: session } = authClient.useSession()
  const user = session?.user

  // handleSignOut
  const handleLogOut = async () => {
    const { error } = await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/')
        },
      },
    })

    if (error) {
      toast.error(error.message)
      return
    }

    toast.success('Logged out successfully!')
  }

  const initials =
    user?.name
      ?.trim()
      .split(/\s+/)
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase() || 'U'

  return (
    <div
      className={cn(
        'flex items-center gap-4',
        compact ? 'flex' : mobile ? 'w-full flex-col' : 'hidden sm:flex'
      )}
    >
      {(!mobile || compact) && user && (
        <div className={compact ? '' : 'hidden md:block'}>
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger
                render={
                  <DropdownMenuTrigger
                    className='group flex items-center rounded-full border border-border bg-card transition-all duration-200 hover:border-primary/40 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30'
                    aria-label='Open user menu'
                  />
                }
              >
                <Avatar className='size-10 border border-border ring-2 ring-background'>
                  <AvatarImage
                    src={user.image ?? undefined}
                    alt={user.name ?? 'User avatar'}
                  />
                  <AvatarFallback className='bg-primary/10 text-xs font-semibold text-primary'>
                    {initials}
                  </AvatarFallback>
                  <AvatarBadge className='border-2 border-background bg-emerald-500' />
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>{user.name ?? 'User'}</TooltipContent>
            </Tooltip>

            <DropdownMenuContent
              align='end'
              sideOffset={10}
              className='max-h-[calc(100dvh-2rem)] w-56 overscroll-contain rounded-xl border border-border bg-popover p-1.5 shadow-lg shadow-black/5'
            >
              <div className='flex items-center gap-3 px-2.5 py-3'>
                <Avatar className='size-10'>
                  <AvatarImage
                    src={user.image ?? undefined}
                    alt={user.name ?? 'User avatar'}
                  />
                  <AvatarFallback className='bg-primary/10 text-sm font-semibold text-primary'>
                    {initials}
                  </AvatarFallback>
                </Avatar>

                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-semibold text-popover-foreground'>
                    {user.name}
                  </p>
                  <p className='truncate text-xs text-muted-foreground'>
                    {user.email}
                  </p>
                </div>
              </div>

              <DropdownMenuItem
                render={<Link href='/create-event' />}
                className='cursor-pointer gap-2.5 rounded-lg px-2.5 py-2 text-sm text-popover-foreground focus:bg-accent focus:text-primary'
              >
                <CirclePlus className='size-4 text-primary' />
                Create Event
              </DropdownMenuItem>

              <DropdownMenuItem
                render={<Link href='/manage-events' />}
                className='cursor-pointer gap-2.5 rounded-lg px-2.5 py-2 text-sm text-popover-foreground focus:bg-accent focus:text-primary'
              >
                <Settings className='size-4 text-brand-green' />
                Manage Events
              </DropdownMenuItem>

              <DropdownMenuItem
                render={<Link href='/join-events' />}
                className='cursor-pointer gap-2.5 rounded-lg px-2.5 py-2 text-sm text-popover-foreground focus:bg-accent focus:text-primary'
              >
                <CircleCheck className='size-4 text-emerald-600' />
                Joined Events
              </DropdownMenuItem>

              <Separator className='my-1.5' />

              <DropdownMenuItem
                onClick={handleLogOut}
                className='cursor-pointer gap-2.5 rounded-lg px-2.5 py-2 text-sm text-red-500 focus:bg-red-50 focus:text-red-600 dark:focus:bg-red-500/10'
              >
                <LogOut className='size-4' />
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}

      {mobile && !compact && user && (
        <div className='w-full border-b border-border pb-4'>
          {/* User Info */}
          <div className='mb-3 flex items-center gap-3 rounded-xl bg-primary/5 p-3 dark:bg-primary/10'>
            <Avatar className='size-11 border border-border ring-2 ring-background'>
              <AvatarImage
                src={user.image ?? undefined}
                alt={user.name ?? 'User avatar'}
              />
              <AvatarFallback className='bg-primary/10 text-sm font-semibold text-primary'>
                {initials}
              </AvatarFallback>
              <AvatarBadge className='border-2 border-background bg-emerald-500' />
            </Avatar>

            <div className='min-w-0 flex-1'>
              <p className='truncate text-sm font-semibold text-foreground'>
                {user.name}
              </p>
              <p className='truncate text-xs text-muted-foreground'>
                {user.email}
              </p>
            </div>
          </div>

          {/* User Navigation */}
          <div className='flex flex-col gap-1.5'>
            <Link
              href='/create-event'
              onClick={onNavigate}
              className='group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-foreground transition-all hover:bg-primary/10 hover:text-primary'
            >
              <span className='flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white'>
                <CalendarPlus className='size-4' />
              </span>
              <span>Create Event</span>
            </Link>

            <Link
              href='/manage-events'
              onClick={onNavigate}
              className='group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-foreground transition-all hover:bg-primary/10 hover:text-primary'
            >
              <span className='flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white'>
                <Settings className='size-4' />
              </span>
              <span>Manage Events</span>
            </Link>

            <Link
              href='/join-events'
              onClick={onNavigate}
              className='group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-foreground transition-all hover:bg-primary/10 hover:text-primary'
            >
              <span className='flex size-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white'>
                <CircleCheck className='size-4' />
              </span>
              <span>Joined Events</span>
            </Link>
            <Button
              variant='outline'
              size='lg'
              onClick={handleLogOut}
              className={cn(
                'cursor-pointer border-red-500 text-red-500 hover:text-red-600',
                mobile ? 'w-full justify-center' : 'w-full md:w-auto'
              )}
            >
              <LogOut className='size-4' />
              Logout
            </Button>
          </div>
        </div>
      )}

      {user ? (
        !compact && (
          <Button
            variant='outline'
            size='lg'
            onClick={handleLogOut}
            className={cn(
              'cursor-pointer border-red-500 text-red-500 hover:text-red-600',
              mobile ? 'w-full justify-center' : 'w-full md:w-auto'
            )}
          >
            <LogOut className='size-4' />
            Logout
          </Button>
        )
      ) : (
        <Link
          href='/login'
          onClick={onNavigate}
          className={cn(
            buttonVariants({ variant: 'default', size: 'lg' }),
            'flex items-center gap-2 bg-primary font-medium text-primary-foreground',
            mobile && 'w-full justify-center'
          )}
        >
          <LogIn className='size-4' />
          Login
        </Link>
      )}
    </div>
  )
}

export default NavbarAuth
