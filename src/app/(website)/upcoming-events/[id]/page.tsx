import EventsDetails from '../_Components/EventsDetails'

const getEventById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:5000/events/${id}`)
    if (!res.ok) {
      throw new Error('Failed to fetch event')
    }
    const data = await res.json()
    return data.data
  } catch (error) {
    console.error('Error fetching destination by ID:', error)
    throw error
  }
}

interface DetailsProps {
  params: Promise<{
    id: string
  }>
}

const EventDetailsPage = async ({ params }: DetailsProps) => {
  const { id } = await params
  const eventDetails = await getEventById(id)
  console.log(id)

  return (
    <>
      <EventsDetails eventDetails={eventDetails} />
    </>
  )
}

export default EventDetailsPage
