import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mfon Paulinus – Fullstack Developer',
  description:
    'Fullstack developer crafting exceptional digital experiences from pixel-perfect frontends to scalable backend architectures.',
  keywords: ['Fullstack Developer', 'React', 'Next.js', 'Node.js', 'Mfon Paulinus'],
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
