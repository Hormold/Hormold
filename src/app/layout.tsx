import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nikita Podelenko - Full stack TS/JS developer',
  description: 'CV of Nikita Podelenko, a full stack TS/JS developer based in United States, California, Orange County area with 10+ years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 antialiased">{children}</body>
    </html>
  )
}
