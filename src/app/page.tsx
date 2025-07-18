import Experience from './components/experience'
import Education from './components/education'
import Projects from './components/projects'
import Reviews from './components/reviews'
import CodeExamples from './components/examples'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Main() {
	return (
		<div className='space-y-5'>
            <div className="p-4 bg-blue-50 dark:bg-slate-700 rounded-lg">
                <a href="https://skipcalls.com" className="text-blue-600 dark:text-blue-300 hover:underline flex items-center gap-2 underline-offset-4">
                    <FontAwesomeIcon icon={faFire} className="h-4 w-4 animate-pulse text-orange-500 drop-shadow-[0_0_3px_rgba(249,115,22,0.5)]" />
                    Check out SkipCalls: AI Voice Platform for 24/7 phone agents and personal call assistance →
                </a>
            </div>
            <Experience />
            <Projects />
            <CodeExamples />
            
            <Education />
            <Reviews />
        </div>
	)
}