import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

const font = Oswald({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'View products of the store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
