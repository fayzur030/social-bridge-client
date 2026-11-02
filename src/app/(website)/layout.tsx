import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/home/Footer'

interface WebsiteLayoutProps {
  children: React.ReactNode
}

const WebsiteLayout = ({ children }: WebsiteLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </>
  )
}

export default WebsiteLayout
