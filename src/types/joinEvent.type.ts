import { IEvents } from './event.types'
export interface Participant {
  name: string
  email: string
  emailVerified: boolean
  image: string
  createdAt: string
  updatedAt: string
  id: string
}

export interface JoinEventType extends IEvents {
  eventId: string
  participant: Participant
}
