import { IEvents } from './event.types'
export interface Participant {
  email: string
  name: string
  image: string
}

export interface JoinEventType extends IEvents {
  participant: Participant
}
