import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import EventCardGrid from '../upcoming-events/_Components/EventCardGrid'
import { JoinEventType } from '@/types/joinEvent.type'
import JoinEventBanner from './_Components/JoinEventBanner'
import { getTokenFromServer } from '@/lib/getTokenFromServer'

const getJoinEvent = async (): Promise<JoinEventType[]> => {
  // Get current user session
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  const user = session?.user

  if (!user) {
    throw new Error('User email not found')
  }

  // Fetch joined event data
  try {
    const jwtToken = await getTokenFromServer()
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/joined-events/${encodeURIComponent(user.email)}`,
      {
        cache: 'no-cache',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    )

    if (!res.ok) {
      throw new Error('Failed to fetch joined events data')
    }

    const data = await res.json()

    return data.data
  } catch (error) {
    console.error(error)
    return []
  }
}

const JoinEventPage = async () => {
  const joinUserData = await getJoinEvent()
  // const events = joinUserData.map((item) => ({
  //   ...item,
  //   _id: item._id,
  // }))

  //todo: Show events sorted by event date.

  const sortedEvents = [...joinUserData].sort(
    (a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime()
  )

  return (
    <section className='px-4 sm:px-6 lg:px-8'>
      <JoinEventBanner />
      <div className='mx-auto max-w-7xl mt-10'>
        <div className='mb-8'>
          <h1 className='text-2xl font-bold text-foreground sm:text-3xl'>
            Joined Events
          </h1>

          <p className='mt-2 text-sm text-muted-foreground'>
            Explore the community events you have joined.
          </p>
        </div>

        <EventCardGrid events={sortedEvents} />
      </div>
    </section>
  )
}

export default JoinEventPage
