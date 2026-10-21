import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mfon Paulinus – Fullstack Developer',
  description:
    'Fullstack developer (React, Next.js, Node.js, TypeScript) building fintech, ecommerce and education products. Available for remote roles.',
  keywords: ['Fullstack Developer', 'Remote', 'React', 'Next.js', 'Node.js', 'NestJS', 'TypeScript', 'Fintech', 'Mfon Paulinus'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#080808] text-white overflow-x-hidden">
        <Navbar />
        <main className="overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
