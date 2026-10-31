import {
  ArrowLeft,
  CalendarDays,
  ImageIcon,
  Mail,
  MapPin,
  Sparkles,
  Tag,
} from 'lucide-react'
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
    <div className='min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-4xl'>
        <button
          type='button'
          className='mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900'
        >
          <ArrowLeft className='size-4' />
          Back to Upcoming Events{' '}
        </button>
        <div className='rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] sm:p-8'>
          <div className='mb-8 flex items-start gap-4'>
            <div className='flex size-11 items-center justify-center rounded-2xl bg-[#7C3AED]/10 text-[#7C3AED]'>
              <Sparkles className='size-5' />
            </div>
            <div>
              <p className='text-sm font-medium text-[#0F172A]'>
                Social Service Drive
              </p>
              <h1 className='mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
                Create a Community Event
              </h1>
              <p className='mt-2 max-w-2xl text-sm text-slate-600 sm:text-base'>
                Organize a local relief effort, environmental cleanup, or
                community support drive.
              </p>
            </div>
          </div>

          <div className='space-y-5'>
            <div className='space-y-2'>
              <label className='text-sm font-medium text-slate-700'>
                Event Title
              </label>
              <div className='relative'>
                <Input
                  type='text'
                  placeholder='Clean Water Distribution - Mirpur 10, Dhaka'
                  className='h-12 rounded-xl border-slate-200 bg-slate-50 px-3 text-slate-700 shadow-sm focus-visible:border-[#7C3AED] focus-visible:ring-[#7C3AED]/20'
                />
              </div>
            </div>

            <div className='grid gap-5 md:grid-cols-2'>
              <div className='space-y-2'>
                <label className='text-sm font-medium text-slate-700'>
                  Event Type
                </label>
                <div className='relative'>
                  <select
                    aria-label='Event type'
                    defaultValue='Donation'
                    className='h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3 pr-10 text-base text-slate-700 shadow-sm outline-none transition focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10'
                  >
                    {eventCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <div className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500'>
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
                <label className='text-sm font-medium text-slate-700'>
                  Event Date
                </label>
                <div className='relative'>
                  <Input
                    type='date'
                    min={new Date().toISOString().split('T')[0]}
                    className='h-12 rounded-xl border-slate-200 bg-slate-50 px-3 pr-10 text-slate-700 shadow-sm focus-visible:border-[#7C3AED] focus-visible:ring-[#7C3AED]/20'
                  />
                  {/* <CalendarDays className='pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-500' /> */}
                </div>
              </div>
            </div>

            <div className='space-y-2'>
              <label className='text-sm font-medium text-slate-700'>
                Location / Venue
              </label>
              <div className='relative'>
                <Input
                  type='text'
                  placeholder='Mohammadpur Town Hall, Dhaka'
                  className='h-12 rounded-xl border-slate-200 bg-slate-50 px-3 pl-10 text-slate-700 shadow-sm'
                />
                <MapPin className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#06B6D4]' />
              </div>
            </div>

            <div className='space-y-2'>
              <label className='text-sm font-medium text-slate-700'>
                Thumbnail Image URL
              </label>
              <div className='relative'>
                <Input
                  type='url'
                  placeholder='https://images.unsplash.com/photo-...'
                  className='h-12 rounded-xl border-slate-200 bg-slate-50 px-3 pl-10 text-slate-700 shadow-sm'
                />
                <ImageIcon className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#06B6D4]' />
              </div>
              <p className='text-xs text-slate-500'>
                Quick photo preset: Winter Clothes • Banana Relief • Cleanup •
                Tree Plantation
              </p>
            </div>

            <div className='space-y-2'>
              <label className='text-sm font-medium text-slate-700'>
                Event Description
              </label>
              <Textarea
                placeholder='Explain the purpose of the drive, volunteers required, items being distributed or tasks to complete.'
                className='min-h-[120px] rounded-xl border-slate-200 bg-slate-50 px-3 py-3 text-slate-700 shadow-sm focus-visible:border-[#7C3AED] focus-visible:ring-[#7C3AED]/20'
              />
            </div>

            <div className='grid gap-5 md:grid-cols-2'>
              <div className='space-y-2'>
                <label className='text-sm font-medium text-slate-700'>
                  Organizer Email
                </label>
                <div className='relative'>
                  <Input
                    type='email'
                    placeholder='organizer@example.com'
                    className='h-12 rounded-xl border-slate-200 bg-slate-50 px-3 pl-10 text-slate-700 shadow-sm'
                  />
                  <Mail className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#06B6D4]' />
                </div>
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-medium text-slate-700'>
                  Event Tags
                </label>
                <div className='relative'>
                  <Input
                    type='text'
                    placeholder='Community, Relief, Donation'
                    className='h-12 rounded-xl border-slate-200 bg-slate-50 px-3 pl-10 text-slate-700 shadow-sm'
                  />
                  <Tag className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#06B6D4]' />
                </div>
              </div>
            </div>
          </div>

          <Button
            type='button'
            className='mt-7 h-12 w-full rounded-xl bg-[#7C3AED] text-base font-semibold text-white shadow-[0_10px_24px_rgba(124,58,237,0.32)] hover:bg-[#6D28D9]'
          >
            Publish Event
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CreateEventForms
