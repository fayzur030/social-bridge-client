import Banner from '@/components/home/Banner'
import Features from '@/components/home/Features'
// import Gallery from '@/components/home/Gallery'
import GallerySection from '@/components/home/GallerySection'
import Newsletter from '@/components/home/Newsletter'
import UpcomingEvents from '@/components/home/UpcomingEvents'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <UpcomingEvents />
      {/* <Gallery /> */}
      <GallerySection />
      <Newsletter />
    </div>
  )
}

export default Home
