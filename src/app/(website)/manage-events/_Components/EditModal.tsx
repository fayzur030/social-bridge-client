'use client'

import { FormEvent, useState } from 'react'
import {
  ArrowLeft,
  ImageIcon,
  Mail,
  MapPin,
  Pencil,
  Sparkles,
  Tag,
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { IEvents } from '@/types/event.types'
import { getTokenFromClient } from '@/lib/getTokenFromClient'

const eventCategories = [
  'Donation',
  'Plantation',
  'Volunteer',
  'Workshop',
  'Cleanup',
  'Blood Donation',
  'Food Distribution',
  'Education',
  'Healthcare',
  'Fundraising',
  'Disaster Relief',
  'Community Meetup',
  'Animal Welfare',
  'Awareness Campaign',
  'Skill Development',
  'Clothing Distribution',
  'Environmental Protection',
  'Charity',
]

interface IEventProps {
  event: IEvents
}

export function EditModal({ event }: IEventProps) {
  const [open, setOpen] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const router = useRouter()

  const handleUpdateEvent = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSaving(true)

    const formData = new FormData(e.currentTarget)
    const editData = {
      ...Object.fromEntries(formData.entries()),
      email: event.email,
      name: event.name,
      image: event.image,
    }

    try {
      const jwtToken = await getTokenFromClient()
      const res = await fetch(
        `http://localhost:5000/update-manage-events/${event._id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwtToken}`,
          },
          body: JSON.stringify(editData),
        }
      )

      if (!res.ok) {
        throw new Error('Failed to update event')
      }

      toast.success('Event updated successfully!')
      setOpen(false)
      router.refresh()
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong!')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button variant='outline' size='sm' className='w-full mt-0.5'>
            <Pencil aria-hidden='true' />
            Edit
          </Button>
        }
      />
      <DialogContent className='max-h-[90vh] overflow-y-auto p-0 sm:max-w-4xl'>
        <form
          onSubmit={handleUpdateEvent}
          className=' border border-border bg-card p-5 text-foreground sm:p-8' //rounded-[28px]
        >
          <DialogHeader className='mb-8 flex-row items-start gap-4 space-y-0'>
            <div className='flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
              <Sparkles aria-hidden='true' className='size-5' />
            </div>
            <div>
              <p className='text-sm font-medium text-primary'>
                Social Service Drive
              </p>
              <DialogTitle className='mt-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
                Edit Community Event
              </DialogTitle>
              <DialogDescription className='mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base'>
                Update your event details and save your changes.
              </DialogDescription>
            </div>
          </DialogHeader>

          <div className='space-y-5'>
            <div className='space-y-2'>
              <label
                htmlFor={`title-${event._id}`}
                className='text-sm font-medium text-foreground'
              >
                Event Title
              </label>
              <Input
                id={`title-${event._id}`}
                name='title'
                type='text'
                defaultValue={event.title}
                placeholder='Enter event title'
                className='h-12 rounded-xl border-input bg-background px-3 text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/20'
              />
            </div>

            <div className='grid gap-5 md:grid-cols-2'>
              <div className='space-y-2'>
                <label
                  htmlFor={`eventType-${event._id}`}
                  className='text-sm font-medium text-foreground'
                >
                  Event Type
                </label>
                <div className='relative'>
                  <select
                    id={`eventType-${event._id}`}
                    aria-label='Event type'
                    defaultValue={event.eventType || 'Donation'}
                    name='eventType'
                    className='h-12 w-full appearance-none rounded-xl border border-input bg-background px-3 pr-10 text-base text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10'
                  >
                    {event.eventType &&
                      !eventCategories.includes(event.eventType) && (
                        <option value={event.eventType}>
                          {event.eventType}
                        </option>
                      )}
                    {eventCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <div className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted-foreground'>
                    <svg
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='size-4'
                    >
                      <path d='M5.25 7.5 10 12.25 14.75 7.5H5.25Z' />
                    </svg>
                  </div>
                </div>
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor={`eventDate-${event._id}`}
                  className='text-sm font-medium text-foreground'
                >
                  Event Date
                </label>
                <Input
                  id={`eventDate-${event._id}`}
                  name='eventDate'
                  type='date'
                  defaultValue={event.eventDate}
                  className='h-12 rounded-xl border-input bg-background px-3 pr-10 text-foreground shadow-sm focus-visible:border-primary focus-visible:ring-primary/20'
                />
              </div>
            </div>

            <div className='space-y-2'>
              <label
                htmlFor={`location-${event._id}`}
                className='text-sm font-medium text-foreground'
              >
                Location / Venue
              </label>
              <div className='relative'>
                <Input
                  id={`location-${event._id}`}
                  type='text'
                  name='location'
                  defaultValue={event.location}
                  placeholder='Mohammadpur Town Hall, Dhaka'
                  className='h-12 rounded-xl border-input bg-background px-3 pl-10 text-foreground shadow-sm placeholder:text-muted-foreground'
                />
                <MapPin className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary' />
              </div>
            </div>

            <div className='space-y-2'>
              <label
                htmlFor={`thumbnail-${event._id}`}
                className='text-sm font-medium text-foreground'
              >
                Thumbnail Image URL
              </label>
              <div className='relative'>
                <Input
                  id={`thumbnail-${event._id}`}
                  type='url'
                  name='thumbnail'
                  defaultValue={event.thumbnail}
                  placeholder='https://images.unsplash.com/photo-...'
                  className='h-12 rounded-xl border-input bg-background px-3 pl-10 text-foreground shadow-sm placeholder:text-muted-foreground'
                />
                <ImageIcon className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary' />
              </div>
              <p className='text-xs text-muted-foreground'>
                Quick photo preset: Winter Clothes • Banana Relief • Cleanup •
                Tree Plantation
              </p>
            </div>

            <div className='space-y-2'>
              <label
                htmlFor={`description-${event._id}`}
                className='text-sm font-medium text-foreground'
              >
                Event Description
              </label>
              <Textarea
                id={`description-${event._id}`}
                name='description'
                defaultValue={event.description}
                placeholder='Explain the purpose of the drive, volunteers required, items being distributed or tasks to complete.'
                className='min-h-[120px] rounded-xl border-input bg-background px-3 py-3 text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/20'
              />
            </div>

            <div className='grid gap-5 md:grid-cols-2'>
              <div className='space-y-2'>
                <label
                  htmlFor={`email-${event._id}`}
                  className='text-sm font-medium text-foreground'
                >
                  Organizer Email
                </label>
                <div className='relative'>
                  <Input
                    id={`email-${event._id}`}
                    type='email'
                    name='email'
                    defaultValue={event.email}
                    readOnly
                    placeholder='organizer@example.com'
                    className='h-12 rounded-xl border-input bg-background px-3 pl-10 text-foreground shadow-sm placeholder:text-muted-foreground'
                  />
                  <Mail className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary' />
                </div>
              </div>

              <div className='space-y-2'>
                <label
                  htmlFor={`tags-${event._id}`}
                  className='text-sm font-medium text-foreground'
                >
                  Event Tags
                </label>
                <div className='relative'>
                  <Input
                    id={`tags-${event._id}`}
                    type='text'
                    name='tags'
                    defaultValue={event.tags}
                    placeholder='Community, Relief, Donation'
                    className='h-12 rounded-xl border-input bg-background px-3 pl-10 text-foreground shadow-sm placeholder:text-muted-foreground'
                  />
                  <Tag className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary' />
                </div>
              </div>
            </div>
          </div>

          <div className='mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end'>
            <Button
              type='button'
              variant='outline'
              onClick={() => setOpen(false)}
              disabled={isSaving}
              className={`py-6`}
            >
              <ArrowLeft aria-hidden='true' />
              Cancel
            </Button>
            <Button
              type='submit'
              disabled={isSaving}
              className='h-12 rounded-xl px-6 text-base font-semibold'
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
