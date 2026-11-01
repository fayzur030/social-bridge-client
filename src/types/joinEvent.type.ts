export interface IEventDetails {
  _id: string
  title: string
  eventType: string
  eventDate: string
  location: string
  thumbnail: string
  description: string
  email: string
  tags: string
  name: string
  image: string
}

export interface IParticipant {
  email: string
  name: string
  image: string
}

export interface IJoinEvent {
  _id: string
  eventId: string
  eventDetails: IEventDetails
  participant: IParticipant
}
