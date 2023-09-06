'use client'
import AppContext from './components/context';
import Sidebar from './components/sidebar'
import About from './components/about'
import Experience from './components/experience'
import Education from './components/education'
import Projects from './components/projects'
import Reviews from './components/reviews'
import FunMode from './components/funmode'
import { useEffect, useState } from 'react'

export default function Home() {
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
      <main className="main-container relative z-40">
        <div className="grid gap-4 lg:grid-cols-4">
          <div className="space-y-5 lg:col-span-1 sidebar">
            <Sidebar />
          </div>
          <div className="space-y-5 lg:col-span-3 main">
            <About />
            <Experience />
            <Projects />
            <Education />
            <Reviews />
            {funMode?
              <div className="dummy-space h-[1200px]">&nbsp;</div>
              : '' }
          </div>
        </div>
      </main>

      <FunMode />
    </AppContext.Provider>
  )
}
