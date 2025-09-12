'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faSpinner, faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTelegram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

interface EmailFormProps {
  onClose: () => void
}

export default function EmailForm({ onClose }: EmailFormProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  // Sticky scroll to main content
  useEffect(() => {
    let isScrolling = false
    
    const handleWheel = (e: WheelEvent) => {
      // Allow small scroll within EmailForm (up to ~50% of screen height)
      const maxEmailFormScroll = window.innerHeight * 0.5
      
      // Only trigger sticky scroll if we're near the bottom of EmailForm and scrolling down aggressively
      if (isScrolling || window.scrollY < maxEmailFormScroll || e.deltaY <= 0 || e.deltaY < 3) return
      
      isScrolling = true
      e.preventDefault()
      
      // Smooth scroll to main content (after EmailForm)
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
      
      // Reset flag after scroll completes
      setTimeout(() => {
        isScrolling = false
      }, 1000)
    }

    const handleTouch = (e: TouchEvent) => {
      // Allow scroll within EmailForm area
      const maxEmailFormScroll = window.innerHeight * 0.5
      
      if (isScrolling || window.scrollY < maxEmailFormScroll) return
      
      const touch = e.touches[0]
      const startY = touch.clientY
      
      const handleTouchMove = (moveEvent: TouchEvent) => {
        const moveTouch = moveEvent.touches[0]
        const deltaY = startY - moveTouch.clientY
        
        // Require a more significant swipe and check we're near middle of EmailForm
        if (deltaY > 80 && !isScrolling && window.scrollY >= maxEmailFormScroll) {
          isScrolling = true
          moveEvent.preventDefault()
          
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          })
          
          setTimeout(() => {
            isScrolling = false
          }, 1000)
          
          document.removeEventListener('touchmove', handleTouchMove)
        }
      }
      
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      
      setTimeout(() => {
        document.removeEventListener('touchmove', handleTouchMove)
      }, 500)
    }

    document.addEventListener('wheel', handleWheel, { passive: false })
    document.addEventListener('touchstart', handleTouch, { passive: true })

    return () => {
      document.removeEventListener('wheel', handleWheel)
      document.removeEventListener('touchstart', handleTouch)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      // TBD
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setIsSubmitted(true)
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        onClose()
      }, 3000)
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="w-full h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900 dark:to-emerald-900 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <FontAwesomeIcon icon={faCheck} className="text-white text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
            Perfect!
          </h2>
          <p className="text-green-700 dark:text-green-300">
            Resume sent to {email}
          </p>
        </div>
		{/* Gradient fade to main site */}
      	<div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100 dark:from-slate-800 to-transparent pointer-events-none"></div>

      </div>
    )
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-indigo-950 flex flex-col items-center justify-center p-4 relative">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
          <div className="mb-6">
            <Image 
              src="/me.jpg" 
              width={120} 
              height={120} 
              alt="Nikita Podelenko" 
              className="mx-auto rounded-full shadow-lg border-4 border-white dark:border-gray-600"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Nikita Podelenko
          </h1>
          <div className="space-y-3 text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
              👨‍💻 13+ YoE Senior Fullstack Engineer
            </p>
            <p className="text-sm">
              Built AI voice platform <strong>SkipCalls</strong> from zero to production - handling 24/7 phone agents for businesses
            </p>
            <p className="text-sm">
              Scaled projects to <strong>1M+ users</strong> • Led migrations at fintech <strong>Arro</strong> • Founded engineering teams
            </p>
            <p className="text-sm">
              <strong>Tech:</strong> TypeScript, React, Node.js, Python, AI/LLM, AWS, PostgreSQL
            </p>
            
            {/* Contact Links */}
            <div className="flex justify-center space-x-4 pt-4">
              <a href="https://linkedin.com/in/nikita39" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
              </a>
              <a href="https://x.com/hormold" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
              </a>
              <a href="https://t.me/define" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faTelegram} className="w-6 h-6" />
              </a>
              <a href="https://github.com/hormold" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
              </a>
              <a href="mailto:n.podelenko@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
              </a>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-600 pt-3 mt-4">
              <p className="text-sm font-medium">
                Get full resume with detailed project breakdowns ↓
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:text-white text-lg"
              disabled={isSubmitting}
              autoFocus
            />
            {error && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !email}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
          >
            {isSubmitting ? (
              <>
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faEnvelope} />
                Send Resume
              </>
            )}
          </button>
        </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Resume will be sent within a few minutes
            </p>
          </div>
        </div>
        
      {/* Gradient fade to main site */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100 dark:from-slate-800 to-transparent pointer-events-none"></div>
      
      {/* Scroll hint arrow */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center animate-bounce z-10">
        <div className="flex flex-col items-center text-gray-400 dark:text-gray-500">
          <span className="text-sm mb-2">Scroll down</span>
          <FontAwesomeIcon icon={faChevronDown} className="text-xl" />
        </div>
      </div>
    </div>
  )
}
