interface BannerProps {
  title: string
  description: string
}

const CommonBanner = ({ title, description }: BannerProps) => {
  return (
    <div className='bg-[#1E3A8A] dark:bg-gradient-to-r dark:from-[#1E3A8A] dark:via-[#172554] dark:to-[#312E81]'>
      <div className='mx-auto max-w-7xl px-4 py-10 text-left sm:px-6 md:py-15 lg:px-8'>
        <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
          {title}
        </h1>
        <p className='mt-2 max-w-xl text-sm leading-7 text-white/80 sm:text-base'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default CommonBanner
