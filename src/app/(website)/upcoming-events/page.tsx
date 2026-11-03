import { IEvents } from '@/types/event.types'
import UpcomingEventList from './_Components/UpcomingEventList'
import { getCategories } from '@/services/getCategory'
import CommonBanner from './_Components/CommonBanner'

const getUpcomingEvents = async (): Promise<IEvents[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
      cache: 'no-cache',
    })

    if (!res.ok) {
      throw new Error('Fetch to failed upcoming events')
    }

    const event = await res.json()
    return event.data
  } catch (error) {
    console.log(error)
  }

  return []
}

const UpcomingEvents = async () => {
  const events = await getUpcomingEvents()
  const category = await getCategories()
  return (
    <>
      {/* <Banner /> */}
      <CommonBanner
        title='  Upcoming Events'
        description='  Find a cause near you and join the next event. Make a difference by
          connecting with your community.'
      />
      {/* Upcoming Events */}
      <UpcomingEventList events={events} category={category} />
    </>
  )
}

export default UpcomingEvents
