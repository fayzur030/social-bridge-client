import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const UserProfile = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  const user = session?.user
  const userJoinDate = Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(user?.createdAt)
  return (
    <div>
      <div className='bg-[#1E3A8A] dark:bg-linear-to-r dark:from-[#1E3A8A] dark:via-[#172554] dark:to-[#312E81]'>
        <div className='mx-auto max-w-7xl px-4 py-10 text-left sm:px-6 md:py-15 lg:px-8'>
          <div className='flex flex-wrap items-center gap-4'>
            <Avatar className='size-30 border-4 border-hero-accent'>
              {user?.image && (
                <AvatarImage
                  src={user.image}
                  alt={user.name || 'User avatar'}
                />
              )}
              <AvatarFallback className='text-2xl font-semibold uppercase'>
                {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className='text-xl font-bold tracking-tight text-white sm:text-2xl'>
                {user?.name}
              </h1>
              <p className=' max-w-xl text-sm leading-7 text-white/80 sm:text-base'>
                {user?.email}
              </p>
              <p className=' w-fit mt-2 rounded-full border border-hero-accent/40 bg-hero-accent text-black dark:text-accent-foreground px-4 py-1 text-xs font-medium backdrop-blur-sm dark:bg-white/5'>
                Member since {userJoinDate}
              </p>
            </div>
          </div>
          {/* Edit button */}
        </div>
      </div>
    </div>
  )
}

export default UserProfile
