
import Experience from './components/experience'
import Education from './components/education'
import Projects from './components/projects'
import Reviews from './components/reviews'


export default function Main() {
	return (
		<div className='space-y-5'>
            <Experience />
            <Projects />
            <Education />
            <Reviews />
        </div>
	)
}