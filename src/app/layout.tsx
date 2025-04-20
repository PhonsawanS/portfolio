import Navbar from '@/components/Navbar'
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'My Portfolio',
  description: 'A showcase of my passion, creativity, and skills in modern web development and design.',
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