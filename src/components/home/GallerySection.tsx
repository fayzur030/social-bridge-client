import Image from 'next/image'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&q=85',
    alt: 'Volunteers helping people through charity work',
    tag: 'Charity',
    layout: 'col-span-2 row-span-2',
    sizes: '(max-width: 768px) 100vw, 50vw',
  },
  {
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=85',
    alt: 'People enjoying community activities together',
    tag: 'Community',
    layout: '',
    sizes: '(max-width: 768px) 50vw, 25vw',
  },
  {
    src: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=85',
    alt: 'Green plants and environmental conservation',
    tag: 'Environment',
    layout: 'md:row-span-2',
    sizes: '(max-width: 768px) 50vw, 25vw',
  },
  {
    src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=85',
    alt: 'Community volunteers working together',
    tag: 'Volunteering',
    layout: '',
    sizes: '(max-width: 768px) 50vw, 25vw',
  },
  {
    src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=85',
    alt: 'Volunteers supporting a community initiative',
    tag: 'Support',
    layout: 'md:row-span-2',
    sizes: '(max-width: 768px) 50vw, 25vw',
  },
  {
    src: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1000&q=85',
    alt: 'People participating in social activities',
    tag: 'Social',
    layout: 'md:col-span-2',
    sizes: '(max-width: 768px) 50vw, 50vw',
  },
  {
    src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&q=85',
    alt: 'Helping children and supporting education',
    tag: 'Education',
    layout: '',
    sizes: '(max-width: 768px) 50vw, 25vw',
  },
  {
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=85',
    alt: 'Charity work and helping children',
    tag: 'Children',
    layout: '',
    sizes: '(max-width: 768px) 50vw, 25vw',
  },
  {
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=85',
    alt: 'Community event and gathering',
    tag: 'Events',
    layout: '',
    sizes: '(max-width: 768px) 50vw, 25vw',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&q=85',
    alt: 'People collaborating on community projects',
    tag: 'Teamwork',
    layout: 'col-span-2 md:col-span-1',
    sizes: '(max-width: 768px) 100vw, 25vw',
  },
]

const GallerySection = () => {
  return (
    <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
      {/* Section Heading */}
      <div className='mx-auto max-w-2xl text-center py-5'>
        <span className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-primary uppercase sm:text-xs'>
          <span className='size-1.5 rounded-full bg-primary' />
          Moments That Matter
        </span>

        <h2 className='mt-4 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl'>
          Together, We Create Change
        </h2>

        <p className='mt-3 text-sm leading-6 text-muted-foreground sm:mt-4 sm:text-base sm:leading-7'>
          Every small contribution creates a meaningful story. Explore moments
          of kindness, teamwork, and positive community impact.
        </p>
      </div>

      {/* Bento Grid */}
      <section className='mx-auto mt-8 grid auto-rows-32.5 grid-cols-2 gap-2.5 sm:mt-12 sm:auto-rows-45 sm:gap-3 md:grid-cols-4 md:auto-rows-47.5 md:gap-4 lg:auto-rows-57.5'>
        {images.map((image, index) => (
          <figure
            key={image.src}
            className={`group relative overflow-hidden rounded-2xl bg-muted shadow-sm ring-1 ring-border/50 transition-all duration-500 sm:rounded-3xl md:hover:z-10 md:hover:shadow-2xl md:hover:shadow-primary/10 md:hover:ring-primary/30 ${image.layout}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes={image.sizes}
              className='object-cover transition-transform duration-700 ease-out md:group-hover:scale-110'
            />

            {/* Gradient overlay */}
            <div className='absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-70 transition-opacity duration-500 md:from-black/70 md:via-black/10 md:opacity-60 md:group-hover:opacity-100' />

            {/* Tag */}
            <span className='absolute top-2 left-2 rounded-full border border-white/20 bg-black/30 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-white backdrop-blur-md sm:top-3 sm:left-3 sm:px-3 sm:py-1 sm:text-[11px] md:top-4 md:left-4'>
              {image.tag}
            </span>

            {/* Caption (desktop hover only) */}
            <figcaption className='absolute inset-x-0 bottom-0 hidden translate-y-3 p-5 text-sm font-medium text-white opacity-0 transition-all duration-500 md:block md:group-hover:translate-y-0 md:group-hover:opacity-100'>
              {image.alt}
            </figcaption>
          </figure>
        ))}
      </section>
    </div>
  )
}

export default GallerySection
