import { ReactNode } from 'react'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import type { Metadata } from 'next'
import { Manrope, Philosopher } from 'next/font/google'
import '@/styles/global.css'

export const metadata: Metadata = {
  title: 'Mansap',
  description: 'Mansap is a personal room',
}

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-manrope',
})
const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-philosopher',
})
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${philosopher.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
