import {
  CalendarCheck2,
  HandHeart,
  HeartHandshake,
  UsersRound,
} from 'lucide-react'

const features = [
  {
    icon: CalendarCheck2,
    title: 'Discover Community Events',
    description:
      'Find local initiatives, social campaigns, and opportunities to contribute to meaningful causes.',
  },
  {
    icon: UsersRound,
    title: 'Bring People Together',
    description:
      'Connect with like-minded individuals who want to make a difference in their communities.',
  },
  {
    icon: HeartHandshake,
    title: 'Create Meaningful Impact',
    description:
      'Organize initiatives that address real community needs and inspire collective action.',
  },
  {
    icon: HandHeart,
    title: 'Make Volunteering Easy',
    description:
      'Discover opportunities to share your time, skills, and energy with causes that matter.',
  },
]

const Features = () => {
  return (
    <section className='py-16 sm:py-20 lg:py-24'>
      <div className='mx-auto max-w-7xl px-6 sm:px-8 lg:px-10'>
        {/* Section Heading */}
        <div className='mx-auto max-w-2xl text-center'>
          <span className='text-xs font-semibold tracking-[0.16em] text-primary uppercase'>
            Why SocialBridge
          </span>

          <h2 className='mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
            Everything You Need to Make a Difference
          </h2>

          <p className='mt-4 text-base leading-7 text-muted-foreground'>
            From discovering meaningful initiatives to bringing people together,
            find new ways to create positive change.
          </p>
        </div>

        {/* Feature Cards */}
        <div className='mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4'>
          {features.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className='group rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-foreground/5 motion-reduce:transition-none motion-reduce:hover:translate-y-0'
            >
              <span className='flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground'>
                <Icon aria-hidden='true' className='size-5' strokeWidth={1.8} />
              </span>

              <p className='mt-7 text-xs font-medium tracking-wide text-muted-foreground'>
                0{index + 1}
              </p>

              <h3 className='mt-2 font-heading text-lg font-semibold text-card-foreground'>
                {title}
              </h3>

              <p className='mt-2 text-sm leading-6 text-muted-foreground'>
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
