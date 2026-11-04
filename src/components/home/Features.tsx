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
    <section className='relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:py-24'>
      <div className='mx-auto max-w-7xl'>
        {/* Section Heading */}
        <div className='mx-auto max-w-2xl text-center'>
          {/* <span className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold tracking-wider text-primary uppercase'>
            <span className='size-1.5 rounded-full bg-primary' />
            Why SocialBridge
          </span> */}

          <h2 className='mt-5 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl'>
            Why SocialBridge?
          </h2>

          {/* <p className='mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base'>
            Discover opportunities, connect with passionate people, and work
            together to create a better community.
          </p> */}
        </div>

        {/* Feature Cards */}
        <div className='mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4'>
          {features.map(({ icon: Icon, number, title, description }) => (
            <article
              key={number}
              className='group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5'
            >
              {/* Hover Background */}
              <div className='pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/15' />

              {/* Card Top */}
              <div className='relative flex items-center justify-between'>
                <div className='flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20'>
                  <Icon
                    aria-hidden='true'
                    className='size-6'
                    strokeWidth={1.8}
                  />
                </div>

                <span className='font-mono text-sm font-semibold text-muted-foreground/50'>
                  {number}
                </span>
              </div>

              {/* Card Content */}
              <div className='relative mt-8'>
                <h3 className='font-heading text-lg font-bold text-card-foreground transition-colors duration-300 group-hover:text-primary'>
                  {title}
                </h3>

                <p className='mt-3 text-sm leading-7 text-muted-foreground'>
                  {description}
                </p>
              </div>

              {/* Bottom Decoration */}
              <div className='mt-7 flex items-center justify-between border-t border-border pt-4'>
                <span className='text-xs font-medium text-muted-foreground'>
                  SocialBridge
                </span>

                <ArrowUpRight className='size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary' />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
