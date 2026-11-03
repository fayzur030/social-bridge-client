'use client'
import { ArrowLeft, ImageIcon, Mail, MapPin, Sparkles, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getTokenFromClient } from '@/lib/getTokenFromClient'
import { ICategory } from '@/types/category.type'
import { IData, validateEvent } from '@/lib/validations/event.validation'

//interface category
interface CategoryProps {
  category: ICategory[]
}

// type formData

type TformData = {
  title: string
  description: string
  eventType: string
  eventDate: string
  thumbnail: string
  location: string
}

// todo: date validation
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)

const minDate = `${tomorrow.getFullYear()}-${String(
  tomorrow.getMonth() + 1
).padStart(2, '0')}-${String(tomorrow.getDate()).padStart(2, '0')}`

const CreateEventForms = ({ category }: CategoryProps) => {
  const router = useRouter()
  const { data: session } = authClient.useSession()
  const user = session?.user

  // todo: create event
  const handleCreateEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    //todo: form validate function start
    const eventData = {
      title: formData.get('title'),
      description: formData.get('description'),
      eventType: formData.get('eventType'),
      eventDate: formData.get('eventDate'),
      thumbnail: formData.get('thumbnail'),
      location: formData.get('location'),
    } as TformData

    const error = validateEvent(eventData)
    if (error) {
      return toast.error(error)
    }
    //todo: form validate function end

    const payload = {
      ...Object.fromEntries(formData.entries()),
      email: user?.email,
      name: user?.name,
      image: user?.image,
    }

    try {
      // todo : Get JWT token from Better Auth
      const jwtToken = await getTokenFromClient()

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/create-events`,
        {
          cache: 'no-store',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwtToken}`,
          },
          body: JSON.stringify(payload),
        }
      )

      if (!res.ok) {
        throw new Error('Failed to create event')
      }

      form.reset()
      toast.success('Event created successfully!')
      router.push('/upcoming-events')
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong!')
    }
  }

  return (
    <div className='min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-3xl'>
        {/* Back Button */}
        <Link href={'/upcoming-events'}>
          <button
            type='button'
            className='mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm font-medium text-muted-foreground shadow-sm transition hover:border-primary/40 hover:bg-accent hover:text-primary'
          >
            <ArrowLeft className='size-4' />
            Back to Upcoming Events
          </button>
        </Link>

        {/* Form Card */}
        <form
          noValidate
          onSubmit={handleCreateEvent}
          className='rounded-[28px] border border-border bg-card p-5 shadow-xl shadow-foreground/5 sm:p-8'
        >
          {/* Header */}
          <div className='mb-8 flex items-start gap-4'>
            <div className='flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
              <Sparkles className='size-5' />
            </div>

            <div>
              <h1 className='mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl'>
                Create Event
              </h1>
            </div>
          </div>

          <div className='space-y-6'>
            {/* Event Title */}
            <div className='space-y-2'>
              <label className='text-sm font-semibold text-foreground'>
                Event Title <span className='text-destructive'>*</span>
              </label>

              <Input
                name='title'
                type='text'
                required
                placeholder='Enter your event title'
                className='h-12 rounded-xl border-input bg-background px-4 text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/20'
              />
            </div>

            {/* Event Type & Date */}
            <div className='grid gap-5 sm:grid-cols-2'>
              <div className='space-y-2'>
                <label className='text-sm font-semibold text-foreground'>
                  Event Type <span className='text-destructive'>*</span>
                </label>

                <div className='relative'>
                  <select
                    aria-label='Event type'
                    defaultValue=''
                    required
                    name='eventType'
                    className='h-12 w-full appearance-none rounded-xl border border-input bg-background px-4 pr-10 text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10'
                  >
                    <option value='' disabled>
                      Select Event Type
                    </option>

                    {category.map((item) => (
                      <option key={item.slug} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>

                  <div className='pointer-events-none absolute inset-y-0 right-4 flex items-center text-muted-foreground'>
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
                <label className='text-sm font-semibold text-foreground'>
                  Event Date <span className='text-destructive'>*</span>
                </label>

                <Input
                  name='eventDate'
                  type='date'
                  required
                  min={minDate}
                  className='h-12 rounded-xl border-input bg-background px-4 text-sm text-foreground shadow-sm focus-visible:border-primary focus-visible:ring-primary/20'
                />
              </div>
            </div>

            {/* Location & Thumbnail */}
            <div className='grid gap-5 sm:grid-cols-2'>
              <div className='space-y-2'>
                <label className='text-sm font-semibold text-foreground'>
                  Location / Venue <span className='text-destructive'>*</span>
                </label>

                <div className='relative'>
                  <Input
                    type='text'
                    name='location'
                    required
                    placeholder='Mohammadpur Town Hall, Dhaka'
                    className='h-12 rounded-xl border-input bg-background pl-10 text-sm text-foreground shadow-sm placeholder:text-muted-foreground'
                  />

                  <MapPin className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary' />
                </div>
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-semibold text-foreground'>
                  Thumbnail Image URL{' '}
                  <span className='text-destructive'>*</span>
                </label>

                <div className='relative'>
                  <Input
                    type='url'
                    name='thumbnail'
                    required
                    placeholder='https://example.com/image.jpg'
                    className='h-12 rounded-xl border-input bg-background pl-10 text-sm text-foreground shadow-sm placeholder:text-muted-foreground'
                  />

                  <ImageIcon className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary' />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className='space-y-2'>
              <label className='text-sm font-semibold text-foreground'>
                Event Description <span className='text-destructive'>*</span>
              </label>

              <Textarea
                name='description'
                required
                placeholder='Describe the purpose of your event, volunteer requirements, activities, and other important details...'
                className='min-h-36 resize-y rounded-xl border-input bg-background px-4 py-3 text-sm leading-6 text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/20'
              />
            </div>

            {/* Organizer Email & Tags */}
            <div className='grid gap-5 sm:grid-cols-2'>
              <div className='space-y-2'>
                <label className='text-sm font-semibold text-foreground'>
                  Organizer Email
                </label>

                <div className='relative'>
                  <Input
                    type='email'
                    name='email'
                    defaultValue={user?.email}
                    readOnly
                    disabled
                    placeholder='organizer@example.com'
                    className='h-12 rounded-xl border-input bg-muted/50 pl-10 text-sm text-muted-foreground shadow-sm'
                  />

                  <Mail className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary' />
                </div>
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-semibold text-foreground'>
                  Event Tags <span className='text-destructive'>*</span>
                </label>

                <div className='relative'>
                  <Input
                    type='text'
                    name='tags'
                    placeholder='Community, Relief, Donation'
                    className='h-12 rounded-xl border-input bg-background pl-10 text-sm text-foreground shadow-sm placeholder:text-muted-foreground'
                  />

                  <Tag className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary' />
                </div>
              </div>
            </div>
          </div>

          {/* Publish Button */}
          <div className='mt-8'>
            <Button
              type='submit'
              className='h-12 w-full rounded-xl bg-primary text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-primary/30'
            >
              <Sparkles className='mr-2 size-4' />
              Create Event
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateEventForms
