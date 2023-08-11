"use client"
import './globals.css'
import 'node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import type { Metadata } from 'next'
import { config } from "@fortawesome/fontawesome-svg-core";
import Sidebar from './components/sidebar';
import About from './components/about';
import FunMode from './components/funmode'
import AppContext from './components/context';
import { useEffect, useState } from 'react';

// Can not export on top level because of "use client"
const metadata: Metadata = {
  title: 'Nikita Podelenko - CV of TS/JS Full Stack Developer',
  description: 'Hire a Nikita Podelenko - full stack TS/JS developer based in United States, California, Orange County area with 10+ years of experience. Fullstack Software Developer | 10+ years in JavaScript, TypeScript, Vue, Nuxt, Nest, DevOps | GPTask.io Founder | CA resident',
  keywords: 'Nikita Podelenko, Full Stack Developer, JavaScript, TypeScript, Vue, Nuxt, Nest, DevOps, GPTask.io, California, Software Engineer, Programming, Hire, CV',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://podelenko.pro',
    title: 'Nikita Podelenko - CV of TS/JS Full Stack Developer',
    description: 'You can hire me as a full stack developer. I have 10+ years of experience in JavaScript, TypeScript, Vue, Nuxt, Nest, DevOps. I am a founder of GPTask.io. I am a California resident, open for relocation.',
    images: [
      {
        url: 'https://podelenko.pro/me.jpg',
        width: 800,
        height: 600,
        alt: 'Nikita Podelenko',
      }
    ]
  }
}

config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [funMode, setFunMode] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (prefersDark) {
      setDarkMode(true)
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <AppContext.Provider value={{ funMode, setFunMode, darkMode, setDarkMode }}>
      <html lang="en" className="">
        <head>
          <title>Nikita Podelenko - CV of TS/JS Full Stack Developer</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={metadata.description?.toString()} />
          <meta name="keywords" content={metadata.keywords?.toString()} />
          <meta name="author" content="Nikita Podelenko" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@hormold" />
          <meta name="twitter:creator" content="@hormold" />
          <meta name="twitter:title" content={metadata.title?.toString()} />
          <meta name="twitter:description" content={metadata.description?.toString()} />
          <meta name="twitter:image" content="https://podelenko.pro/me.jpg" />

          <meta property="og:url" content="https://podelenko.pro" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={metadata?.openGraph?.title?.toString()} />
          <meta property="og:description" content={metadata?.openGraph?.description?.toString()} />
          <meta property="og:image" content="https://podelenko.pro/me.jpg" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Nikita Podelenko - CV of TS/JS Full Stack Developer" />


        </head>
        <body className="bg-gray-100 antialiased dark:bg-slate-800">
          <main className="main-container relative z-40">
            <div className="grid gap-4 lg:grid-cols-4">
              <div className="space-y-5 lg:col-span-1 sidebar">
                <Sidebar />
              </div>
              <div className="space-y-5 lg:col-span-3 main">
                <About />
                {children}
                {funMode?
              <div className="dummy-space h-[1200px]">&nbsp;</div>
              : '' }
              </div>
            </div>
          </main>
          <div className="hidden dark:block bottom-shadow z-50 sticky bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900 dark:from-gray-800"></div>
          <FunMode />
        </body>
      </html>
    </AppContext.Provider>
  )
}
