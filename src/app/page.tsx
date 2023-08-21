
import Experience from './components/experience'
import Education from './components/education'
import Projects from './components/projects'
import Reviews from './components/reviews'
import CodeExamples from './components/examples'


export default function Main() {
	return (
		<div className='space-y-5'>
            <Experience />
            <CodeExamples />
            <Projects />
            <Education />
            <Reviews />
        </div>
	)
}