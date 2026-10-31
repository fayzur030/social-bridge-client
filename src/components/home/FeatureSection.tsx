import {
  ArrowRight,
  CalendarCheck2,
  MapPin,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const features = [
  {
    icon: CalendarCheck2,
    title: 'Event discovery',
    description:
      'Browse meaningful events, workshops, and communities aligned with your interests and values.',
    accent: 'bg-[#23AD56]/10 text-[#23AD56]',
  },
  {
    icon: UsersRound,
    title: 'Community building',
    description:
      'Connect with volunteers, organizers, and changemakers who are creating real local impact.',
    accent: 'bg-[#1C87ED]/10 text-[#1C87ED]',
  },
  {
    icon: MapPin,
    title: 'Local engagement',
    description:
      'Find opportunities near you and support grassroots initiatives that strengthen your neighborhood.',
    accent: 'bg-[#23AD56]/10 text-[#23AD56]',
  },
  {
    icon: ShieldCheck,
    title: 'Verified impact',
    description:
      'Track trusted causes and participation so your community efforts stay transparent and credible.',
    accent: 'bg-[#1C87ED]/10 text-[#1C87ED]',
  },
]

const FeatureSection = () => {
  return (
    <section className=' py-20 sm:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 max-w-2xl text-center'>
          <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-[#23AD56]/15  px-3 py-1.5 text-xs font-semibold tracking-[0.2em] text-[#23AD56] uppercase shadow-sm'>
            <Sparkles className='size-3.5' />
            Features
          </div>

          <h2 className='font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
            Explore by Cause
          </h2>

          <p className='mt-4 text-base leading-relaxed text-slate-600 sm:text-lg'>
            Find opportunities that align with your passion and social
            development goals.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
          {features.map(({ icon: Icon, title, description, accent }) => (
            <Card
              key={title}
              className='group relative overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:border-[#23AD56]/30 hover:shadow-[0_18px_42px_rgba(35,173,86,0.12)]'
            >
              <div className='absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#23AD56] to-[#1C87ED]' />

              <CardHeader className='relative pb-4'>
                <div
                  className={`flex size-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${accent}`}
                >
                  <Icon className='size-5' />
                </div>
              </CardHeader>

              <CardContent className='relative pt-0'>
                <CardTitle className='text-xl font-semibold text-slate-900'>
                  {title}
                </CardTitle>

                <CardDescription className='mt-3 text-sm leading-6 text-slate-600'>
                  {description}
                </CardDescription>

                <Button
                  variant='link'
                  className='mt-5 h-auto p-0 font-semibold text-[#23AD56] hover:text-[#1C87ED]'
                >
                  Learn more
                  <ArrowRight className='ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1' />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
