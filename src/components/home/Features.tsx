import {
  CalendarCheck2,
  HandHeart,
  HeartHandshake,
  UsersRound,
  ArrowUpRight,
} from 'lucide-react'

const features = [
  {
    icon: CalendarCheck2,
    number: '01',
    title: 'Discover Community Events',
    description:
      'Explore local initiatives, social campaigns, and meaningful opportunities to make a positive difference.',
  },
  {
    icon: UsersRound,
    number: '02',
    title: 'Connect with People',
    description:
      'Meet like-minded individuals who share your passion for helping others and building stronger communities.',
  },
  {
    icon: HeartHandshake,
    number: '03',
    title: 'Create Real Impact',
    description:
      'Turn your ideas into action by organizing initiatives that bring meaningful changes to society.',
  },
  {
    icon: HandHeart,
    number: '04',
    title: 'Make Volunteering Easy',
    description:
      'Find opportunities to contribute your time, skills, and energy to causes that truly matter.',
  },
]

const Features = () => {
  return (
    <div className='mx-auto max-w-7xl'>
      <section className='relative overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
        <div>
          {/* Section Heading */}
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl'>
              Why SocialBridge?
            </h2>
          </div>

          {/* Feature Cards */}
          <div className='mt-9 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-4 lg:gap-5'>
            {features.map(({ icon: Icon, number, title, description }) => (
              <article
                key={number}
                className='group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 sm:p-6 lg:p-5 xl:p-6'
              >
                {/* Hover Background */}
                <div className='pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/15' />

                {/* Card Top */}
                <div className='relative flex items-center justify-between'>
                  <div className='flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20 sm:size-12'>
                    <Icon
                      aria-hidden='true'
                      className='size-5 sm:size-6'
                      strokeWidth={1.8}
                    />
                  </div>

                  <span className='font-mono text-xs font-semibold text-muted-foreground/50 sm:text-sm'>
                    {number}
                  </span>
                </div>

                {/* Card Content */}
                <div className='relative mt-6 flex-1 sm:mt-8'>
                  <h3 className='font-heading text-base font-bold leading-snug text-card-foreground transition-colors duration-300 group-hover:text-primary sm:text-lg'>
                    {title}
                  </h3>

                  <p className='mt-3 text-[13px] leading-6 text-muted-foreground sm:text-sm sm:leading-7'>
                    {description}
                  </p>
                </div>

                {/* Bottom Decoration */}
                {/* <div className='relative mt-6 flex items-center justify-between border-t border-border pt-4 sm:mt-7'>
                  <span className='text-xs font-medium text-muted-foreground'>
                    SocialBridge
                  </span>

                  <ArrowUpRight className='size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary' />
                </div> */}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
