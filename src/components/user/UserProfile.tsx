import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { ArrowRight, Calendar, Pencil } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { getManageEvents } from '@/app/(website)/manage-events/page'
import ManageEventCard from '@/components/user/ManageEventCard'
import Link from 'next/link'
import AccountInformation from './AccountInformation'
import { EditProfile } from './EditProfileDialog'

const UserProfile = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  const user = session?.user

  if (!user) return null

  const userJoinDate = Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(user.createdAt))

  const manageEventsCard = await getManageEvents()

  return (
    <div className='min-h-screen pb-12'>
      {/* Profile Header */}
      <div className='bg-[image:var(--hero-background)]'>
        <div className='mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between md:py-14 lg:px-8'>
          {/* User Information */}
          <div className='flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left'>
            <Avatar className='size-24 shrink-0 border-4 border-hero-accent sm:size-28 md:size-32'>
              {user.image && (
                <AvatarImage
                  src={user.image}
                  alt={user.name || 'User avatar'}
                />
              )}

              <AvatarFallback className='text-2xl font-semibold uppercase'>
                {user.name?.charAt(0) || user.email?.charAt(0) || 'U'}
              </AvatarFallback>
            </Avatar>

            <div>
              <h1 className='text-xl font-bold tracking-tight text-hero-copy sm:text-2xl md:text-3xl'>
                {user.name}
              </h1>

              <p className='mt-1 break-all text-sm leading-7 text-hero-muted sm:text-base'>
                {user.email}
              </p>

              <p className='mx-auto mt-2 w-fit rounded-full border border-hero-outline/40 bg-brand-amber/10 px-4 py-1 text-xs font-medium text-brand-amber sm:mx-0'>
                Member since {userJoinDate}
              </p>
            </div>
          </div>
          {/* Edit Profile Dialog */}
          <EditProfile name={user.name} image={user.image as string} />
        </div>
      </div>

      {/* Profile Sections */}
      <div className='mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 lg:mt-10 lg:grid-cols-2 lg:gap-6 lg:px-8'>
        <AccountInformation user={user} />
        {/* Created Events */}
        <Card className='min-w-0'>
          <CardHeader className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <div className='flex items-center gap-2'>
              <Calendar className='size-5 shrink-0 text-accent-foreground' />

              <h2 className='text-lg font-bold tracking-tight text-accent-foreground sm:text-xl'>
                My Created Events
              </h2>
            </div>

            <Link
              href='/manage-events'
              className='flex w-fit items-center gap-1 text-sm font-medium text-accent-foreground transition-colors hover:opacity-75'
            >
              View All
              <ArrowRight className='size-4' />
            </Link>
          </CardHeader>

          <CardContent>
            {manageEventsCard.length > 0 ? (
              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                {manageEventsCard.slice(0, 2).map((item) => (
                  <ManageEventCard key={item._id} event={item} />
                ))}
              </div>
            ) : (
              <div className='rounded-xl border border-dashed p-8 text-center'>
                <Calendar className='mx-auto mb-3 size-8 text-muted-foreground' />

                <p className='text-sm text-muted-foreground'>
                  You haven&apos;t created any events yet.
                </p>

                <Button className='mt-4' size='sm'>
                  <Link href='/create-event'>Create Event</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default UserProfile
