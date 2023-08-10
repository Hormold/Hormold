import './globals.css'
import 'node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nikita Podelenko - Full stack TS/JS developer',
  description: 'CV of Nikita Podelenko, a full stack TS/JS developer based in United States, California, Orange County area with 10+ years of experience.',
}

import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <body className="bg-gray-100 antialiased dark:bg-slate-800">
        {children}
      </body>
    </html>
  )
}
