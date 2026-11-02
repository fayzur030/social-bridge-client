import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { auth } from '@/lib/auth'
import { IEvents } from '@/types/event.types'

import { Plus } from 'lucide-react'
import { headers } from 'next/headers'
import Link from 'next/link'
import ManageEventCard from './_Components/ManageEventCard'
import { getTokenFromServer } from '@/lib/getTokenFromServer'

const getManageEvents = async (): Promise<IEvents[]> => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  const user = session?.user

  try {
    const jwtToken = await getTokenFromServer()

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/manage-events/${user?.email}`,
      {
        cache: 'no-store',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    )
    if (!res.ok) {
      throw new Error('Fetch to Failed manage events data')
    }
    const data = await res.json()
    return data.data
  } catch (error) {
    console.log(error)
  }
  return []
}

const ManageEvents = async () => {
  const manageEvents = await getManageEvents()
  const sortedManageEvents = [...manageEvents].sort((a, b) =>
    b._id.localeCompare(a._id)
  )
  console.log(sortedManageEvents)
  return (
    <section className='px-4 py-10 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center'>
          <div className='mb-8'>
            <h1 className='text-2xl font-bold text-foreground sm:text-3xl'>
              Manage My Events
            </h1>

            <p className='mt-2 max-w-xl text-sm text-muted-foreground'>
              Every great initiative starts with an idea. Manage the events you
              have created, make updates whenever needed, and continue bringing
              your community together for meaningful experiences.
            </p>
          </div>
          <Link href={'/create-event'}>
            <Button variant='default' className='px-8 py-6'>
              <Plus /> Create New Event
            </Button>
          </Link>
        </div>
        <Separator />
        <div className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {sortedManageEvents.map((event) => (
            <ManageEventCard key={event._id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ManageEvents
