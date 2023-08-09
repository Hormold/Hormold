'use client'
import Sidebar from './components/sidebar'
import About from './components/about'
import Experience from './components/experience'
import Education from './components/education'
import Projects from './components/projects'

export default function Home() {
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
