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

interface NavbarAuthProps {
  mobile?: boolean
  onNavigate?: () => void
}

const NavbarAuth = ({ mobile = false, onNavigate }: NavbarAuthProps) => {
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
        mobile ? 'w-full flex-col' : 'hidden md:flex'
      )}
    >
      {!mobile && user && (
        <div className='hidden md:block'>
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger
                render={
                  <DropdownMenuTrigger
                    className='group flex items-center rounded-full border border-neutral-200 bg-white transition-all duration-200 hover:border-[#15A1BF]/40 hover:bg-[#15A1BF]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15A1BF]/30'
                    aria-label='Open user menu'
                  />
                }
              >
                <Avatar className='size-10 border border-amber-900 ring-2 ring-white'>
                  <AvatarImage
                    src={user.image ?? undefined}
                    alt={user.name ?? 'User avatar'}
                  />
                  <AvatarFallback className='bg-[#15A1BF]/10 text-xs font-semibold text-[#1289a2]'>
                    {initials}
                  </AvatarFallback>
                  <AvatarBadge className='border-2 border-white bg-emerald-500' />
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>{user.name ?? 'User'}</TooltipContent>
            </Tooltip>
            <DropdownMenuContent
              align='end'
              sideOffset={10}
              className='w-56 rounded-xl border border-neutral-200 bg-white p-1.5 shadow-lg shadow-neutral-900/5'
            >
              <div className='flex items-center gap-3 px-2.5 py-3'>
                <Avatar className='size-10'>
                  <AvatarImage
                    src={user.image ?? undefined}
                    alt={user.name ?? 'User avatar'}
                  />
                  <AvatarFallback className='bg-[#15A1BF]/10 text-sm font-semibold text-[#1289a2]'>
                    {initials}
                  </AvatarFallback>
                </Avatar>

                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-semibold text-neutral-900'>
                    {user.name}
                  </p>
                  <p className='truncate text-xs text-neutral-500'>
                    {user.email}
                  </p>
                </div>
              </div>
              <DropdownMenuItem
                render={<Link href='/create-event' />}
                className='cursor-pointer gap-2.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 focus:bg-[#15A1BF]/10 focus:text-[#1289a2]'
              >
                <CirclePlus className='size-4 text-[#23AD56] hover:text-[#23AD56]' />
                Create Event
              </DropdownMenuItem>
              <DropdownMenuItem
                render={<Link href='/create-event' />}
                className='cursor-pointer gap-2.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 focus:bg-[#15A1BF]/10 focus:text-[#1289a2]'
              >
                <Settings className='size-4 text-[#7C3AED] hover:text-[#23AD56]' />
                Manage Events
              </DropdownMenuItem>
              <DropdownMenuItem
                render={<Link href='/create-event' />}
                className='cursor-pointer gap-2.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 focus:bg-[#15A1BF]/10 focus:text-[#1289a2]'
              >
                <CircleCheck className='size-4 text-[#23AD56] hover:text-[#23AD56]' />
                Joined Events
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}

      {mobile && user && (
        <div className='w-full border-b pb-3'>
          <div className='flex items-center gap-3 px-1 py-2'>
            <Avatar className='size-10'>
              <AvatarImage
                src={user.image ?? undefined}
                alt={user.name ?? 'User avatar'}
              />
              <AvatarFallback className='bg-[#15A1BF]/10 text-sm font-semibold text-[#1289a2]'>
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className='min-w-0'>
              <p className='truncate text-sm font-semibold'>{user.name}</p>
              <p className='truncate text-xs text-muted-foreground'>
                {user.email}
              </p>
            </div>
          </div>
          <Link
            href='/create-event'
            onClick={onNavigate}
            className='flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent'
          >
            <CalendarPlus className='size-4' />
            Create Event
          </Link>
        </div>
      )}

      {user ? (
        <Button
          variant='destructive'
          size='lg'
          onClick={handleLogOut}
          className={cn(
            'cursor-pointer',
            mobile ? 'w-full justify-center' : 'w-full md:w-auto'
          )}
        >
          <LogOut className='size-4' />
          Logout
        </Button>
      ) : (
        <Link
          href='/login'
          onClick={onNavigate}
          className={cn(
            buttonVariants({ variant: 'default', size: 'lg' }),
            'flex items-center gap-2',
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
