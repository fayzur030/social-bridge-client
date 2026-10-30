import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ImpactHub',
  description: 'Building stronger communities together.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${plusJakarta.variable} ${inter.className} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        <Toaster />
        {children}
      </body>
    </html>
  )
}
