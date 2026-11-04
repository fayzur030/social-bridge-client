import Image from 'next/image'
import { Images } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    title: 'Community Volunteering',
    category: 'Volunteering',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    title: 'Planting a Greener Future',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b',
    className: '',
  },
  {
    id: 3,
    title: 'Helping Those in Need',
    category: 'Donation',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b',
    className: '',
  },
  {
    id: 4,
    title: 'Together for a Better Community',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18',
    className: '',
  },
  {
    id: 5,
    title: 'Making a Positive Impact',
    category: 'Social Impact',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8',
    className: '',
  },
]

const Gallery = () => {
  return (
    <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
      <section className='py-14 sm:py-16 lg:py-24'>
        {/* Section Heading */}
        <div className='mx-auto max-w-2xl text-center'>
          <span className='text-xs font-semibold tracking-[0.16em] text-primary uppercase'>
            Moments That Matter
          </span>

          <h2 className='mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl'>
            Together, We Create Change
          </h2>

          <p className='mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7'>
            Every small contribution creates a meaningful story. Explore moments
            of kindness, teamwork, and positive community impact.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className='mt-9 grid auto-rows-60 grid-cols-1 gap-4 sm:mt-12 sm:auto-rows-55 sm:grid-cols-2 md:auto-rows-60 md:grid-cols-3 lg:gap-5'>
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-muted ${item.className}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes='(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw'
                className='object-cover transition-transform duration-700 group-hover:scale-110'
              />

              {/* Image Overlay */}
              <div className='absolute inset-0 bg-linear-to-t from-deep2/80 via-deep2/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100' />

              {/* Content */}
              <div className='absolute inset-x-0 bottom-0 p-5 sm:p-6'>
                <span className='text-xs font-medium tracking-wide text-image-overlay-foreground/75'>
                  {item.category}
                </span>

                <h3 className='mt-1 font-heading text-lg font-semibold text-image-overlay-foreground sm:text-xl'>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className='mt-7 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground sm:mt-8 sm:text-sm'>
          <Images className='size-4 shrink-0 text-primary' />
          <span>Every picture tells a story of positive change.</span>
        </div>
      </section>
    </div>
  )
}

export default Gallery
