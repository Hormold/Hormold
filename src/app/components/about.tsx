'use client'
import { faMapMarked, faServer, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './about.css'

export default function About () {
	return (
		<div className="p-7 pb-0 block-section dark:bg-slate-600 bg-white">
			<h2 className="block-title dark:text-white">About me</h2>
			<div className="text-gray-600 mb-5 dark:text-white">
				<ul className='fa-ul'>
					<li>
						<span className="fa-li">
							<FontAwesomeIcon icon={faUser} className="mr-2" size='sm' fixedWidth={true} />
						</span>
						As a Senior Software Engineer with 10+ years experience and authorized to work in the USA, I bring expertise in both backend and frontend software development within the gambling industry. My backend skills include TypeScript (Node.js) development, contributing to half a million dollars annual revenue growth.
					</li>
					<li className='my-2'>
						<span className="fa-li">
							<FontAwesomeIcon icon={faServer} className="mr-2" />
						</span>
						Efficient cloud application administration with Kubernetes, Docker, and Google Cloud has facilitated a 30% reduction in operational costs. On the frontend, I’m proficient with Vue3, Nuxt3, React.
					</li>
					<li>
						<span className="fa-li">
							<FontAwesomeIcon icon={faMapMarked} className="mr-2" />
						</span>
						
						Moved to the USA in 2023, I am looking for a
						<div id="counter" className="animated px-1">
							<ul className="digits digits-first luckie"> <li> hybrid </li> <li> on-site </li> <li> remote </li> </ul>
						</div>
						job as a Fullstack Software Engineer.
					</li>
			
				</ul>
				
			</div>
					

			<div className="border-t border-gray-200 my-5"></div>
			
			<ul className="flex space-x-8 font-medium dark:text-white">
				<li>
					<a href="/cv.pdf" className="menu-link-active menu-link-hover">Resume</a>
				</li>
				<li>
					<a href="https://hormold.ru" className="menu-link menu-link-hover" target="_blank">Blog</a>
				</li>
			</ul>
		</div>
	)
}