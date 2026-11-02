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
    accent: 'bg-brand-green/10 text-brand-green',
  },
  {
    icon: UsersRound,
    title: 'Community building',
    description:
      'Connect with volunteers, organizers, and changemakers who are creating real local impact.',
    accent: 'bg-brand-blue/10 text-brand-blue',
  },
  {
    icon: MapPin,
    title: 'Local engagement',
    description:
      'Find opportunities near you and support grassroots initiatives that strengthen your neighborhood.',
    accent: 'bg-brand-green/10 text-brand-green',
  },
  {
    icon: ShieldCheck,
    title: 'Verified impact',
    description:
      'Track trusted causes and participation so your community efforts stay transparent and credible.',
    accent: 'bg-brand-blue/10 text-brand-blue',
  },
]

const FeatureSection = () => {
  return (
    <section className=' py-20 sm:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 max-w-2xl text-center'>
          <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-brand-green/15 px-3 py-1.5 text-xs font-semibold tracking-[0.2em] text-brand-green uppercase shadow-sm'>
            <Sparkles className='size-3.5' />
            Features
          </div>

          <h2 className='font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
            Explore by Cause
          </h2>

          <p className='mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg'>
            Find opportunities that align with your passion and social
            development goals.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
          {features.map(({ icon: Icon, title, description, accent }) => (
            <Card
              key={title}
              className='group relative overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-lg hover:shadow-brand-green/10'
            >
              <div className='absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-green to-brand-blue' />

              <CardHeader className='relative pb-4'>
                <div
                  className={`flex size-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${accent}`}
                >
                  <Icon className='size-5' />
                </div>
              </CardHeader>

              <CardContent className='relative pt-0'>
                <CardTitle className='text-xl font-semibold text-card-foreground'>
                  {title}
                </CardTitle>

                <CardDescription className='mt-3 text-sm leading-6 text-muted-foreground'>
                  {description}
                </CardDescription>

                <Button
                  variant='link'
                  className='mt-5 h-auto p-0 font-semibold text-brand-green hover:text-brand-blue'
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
