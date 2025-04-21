import Navbar from '@/components/Navbar'
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Portfolio',
  description: 'My portfolio website',
  openGraph: {
    title: 'Portfolio',
    description: 'My portfolio website',
    images: [
      {
        url: '/Profile.png',
        width: 1200,
        height: 630,
        alt: 'My Portfolio Profile',
      }
    ],
    type: 'website',
  },
}

interface RootLayoutProps {
  children: ReactNode
}

const layout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
export default layout