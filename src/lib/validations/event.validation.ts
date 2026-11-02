export interface IData {
  title: string
  description: string
  eventType: string
  thumbnail: string
  location: string
  eventDate: string
}

export const validateEvent = (data: IData) => {
  if (!data.title.trim()) {
    return 'Title is required'
  }
  if (data.title.trim().length < 5) {
    return 'Title must be at least 5 characters'
  }
  if (!data.description.trim()) {
    return 'Description is required'
  }
  if (data.description.trim().length < 20) {
    return 'Description must be at least 20 characters'
  }
  if (!data.eventType) {
    return 'Please select an event type'
  }
  if (!data.thumbnail.trim()) {
    return 'Thumbnail is required'
  }
  if (!data.location.trim()) {
    return 'Location is required'
  }
  if (!data.eventDate) {
    return 'Event date is required'
  }

  if (new Date(data.eventDate) <= new Date()) {
    return 'Please select a future date'
  }
  return null
}
