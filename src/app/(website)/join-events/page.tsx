import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import EventCardGrid from '../upcoming-events/_Components/EventCardGrid'
import { JoinEventType } from '@/types/joinEvent.type'

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
    const res = await fetch(
      `http://localhost:5000/joined-events/${encodeURIComponent(user.email)}`
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
  const events = joinUserData.map((item) => ({
    ...item,
    _id: item._id,
  }))

  return (
    <section className='px-4 py-10 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-8'>
          <h1 className='text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl'>
            Joined Events
          </h1>

          <p className='mt-2 text-sm text-slate-500 dark:text-slate-400'>
            Explore the community events you have joined.
          </p>
        </div>

        <EventCardGrid events={events} />
      </div>
    </section>
  )
}

export default JoinEventPage
