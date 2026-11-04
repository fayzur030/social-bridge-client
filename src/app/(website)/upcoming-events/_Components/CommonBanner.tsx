interface BannerProps {
  title: string
  description: string
}

const CommonBanner = ({ title, description }: BannerProps) => {
  return (
    <div className='bg-[image:var(--hero-background)]'>
      <div className='mx-auto max-w-7xl px-4 py-10 text-left sm:px-6 md:py-15 lg:px-8'>
        <h1 className='text-3xl font-bold tracking-tight text-hero-copy sm:text-4xl'>
          {title}
        </h1>
        <p className='mt-2 max-w-xl text-sm leading-7 text-hero-muted sm:text-base'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default CommonBanner
