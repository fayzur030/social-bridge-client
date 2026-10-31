import { ArrowLeft, ImageIcon, Mail, MapPin, Sparkles, Tag } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

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

const CreateEventForms = () => {
  return (
    <div className='min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-4xl'>
        {/* Back Button */}
        <button
          type='button'
          className='mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm font-medium text-muted-foreground shadow-sm transition hover:border-primary/40 hover:bg-accent hover:text-primary'
        >
          <ArrowLeft className='size-4' />
          Back to Upcoming Events
        </button>

        {/* Form Card */}
        <div className='rounded-[28px] border border-border bg-card p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] sm:p-8'>
          {/* Header */}
          <div className='mb-8 flex items-start gap-4'>
            <div className='flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
              <Sparkles className='size-5' />
            </div>

            <div>
              <p className='text-sm font-medium text-primary'>
                Social Service Drive
              </p>

              <h1 className='mt-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
                Create a Community Event
              </h1>

              <p className='mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base'>
                Organize a local relief effort, environmental cleanup, or
                community support drive.
              </p>
            </div>
          </div>

          <div className='space-y-5'>
            {/* Event Title */}
            <div className='space-y-2'>
              <label className='text-sm font-medium text-foreground'>
                Event Title
              </label>

              <Input
                type='text'
                placeholder='Clean Water Distribution - Mirpur 10, Dhaka'
                className='h-12 rounded-xl border-input bg-background px-3 text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/20'
              />
            </div>

            {/* Event Type & Date */}
            <div className='grid gap-5 md:grid-cols-2'>
              <div className='space-y-2'>
                <label className='text-sm font-medium text-foreground'>
                  Event Type
                </label>

                <div className='relative'>
                  <select
                    aria-label='Event type'
                    defaultValue='Donation'
                    className='h-12 w-full appearance-none rounded-xl border border-input bg-background px-3 pr-10 text-base text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10'
                  >
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
                <label className='text-sm font-medium text-foreground'>
                  Event Date
                </label>

                <Input
                  type='date'
                  min={new Date().toISOString().split('T')[0]}
                  className='h-12 rounded-xl border-input bg-background px-3 pr-10 text-foreground shadow-sm focus-visible:border-primary focus-visible:ring-primary/20'
                />
              </div>
            </div>

            {/* Location */}
            <div className='space-y-2'>
              <label className='text-sm font-medium text-foreground'>
                Location / Venue
              </label>

              <div className='relative'>
                <Input
                  type='text'
                  placeholder='Mohammadpur Town Hall, Dhaka'
                  className='h-12 rounded-xl border-input bg-background px-3 pl-10 text-foreground shadow-sm placeholder:text-muted-foreground'
                />

                <MapPin className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary' />
              </div>
            </div>

            {/* Thumbnail Image */}
            <div className='space-y-2'>
              <label className='text-sm font-medium text-foreground'>
                Thumbnail Image URL
              </label>

              <div className='relative'>
                <Input
                  type='url'
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

            {/* Description */}
            <div className='space-y-2'>
              <label className='text-sm font-medium text-foreground'>
                Event Description
              </label>

              <Textarea
                placeholder='Explain the purpose of the drive, volunteers required, items being distributed or tasks to complete.'
                className='min-h-[120px] rounded-xl border-input bg-background px-3 py-3 text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/20'
              />
            </div>

            {/* Organizer Email & Tags */}
            <div className='grid gap-5 md:grid-cols-2'>
              <div className='space-y-2'>
                <label className='text-sm font-medium text-foreground'>
                  Organizer Email
                </label>

                <div className='relative'>
                  <Input
                    type='email'
                    placeholder='organizer@example.com'
                    className='h-12 rounded-xl border-input bg-background px-3 pl-10 text-foreground shadow-sm placeholder:text-muted-foreground'
                  />

                  <Mail className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary' />
                </div>
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium text-foreground'>
                  Event Tags
                </label>

                <div className='relative'>
                  <Input
                    type='text'
                    placeholder='Community, Relief, Donation'
                    className='h-12 rounded-xl border-input bg-background px-3 pl-10 text-foreground shadow-sm placeholder:text-muted-foreground'
                  />

                  <Tag className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary' />
                </div>
              </div>
            </div>
          </div>

          {/* Publish Button */}
          <Button
            type='button'
            className='mt-7 h-12 w-full rounded-xl bg-primary text-base font-semibold text-primary-foreground shadow-[0_10px_24px_rgba(22,163,74,0.2)] transition-colors hover:bg-primary/90'
          >
            Publish Event
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CreateEventForms
