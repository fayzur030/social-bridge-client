import Navbar from '@/components/layout/Navbar'

interface WebsiteLayoutProps {
  children: React.ReactNode
}

const WebsiteLayout = ({ children }: WebsiteLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen'>{children}</main>
    </>
  )
}

export default WebsiteLayout
