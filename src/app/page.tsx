'use client'
import Sidebar from './components/sidebar'
import About from './components/about'
import Experience from './components/experience'
import Education from './components/education'
import Projects from './components/projects'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (prefersDark) {
        document.documentElement.classList.add('dark')
    }
  }, []);

  return (
    <main className="main-container">
      <div className="grid gap-4 lg:grid-cols-4">
        <div className="space-y-5 lg:col-span-1">
          <Sidebar />
        </div>
        <div className="space-y-5 lg:col-span-3">
          <About />
          <Experience />
          <Projects />
          <Education />
        </div>
        
      </div>
      
    </main>
  )
}
