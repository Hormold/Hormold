'use client'
import { faMapMarked, faServer, faUser, faDog } from '@fortawesome/free-solid-svg-icons'
import {usePathname} from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import './about.css'

export default function About () {

	const currentRoute = usePathname()

	return (
		<div className="p-7 pb-0 block-section dark:bg-slate-600 bg-white">
			<h2 className="block-title dark:text-white">About me</h2>
			<div className="text-gray-600 mb-5 dark:text-white">
				<ul className='fa-ul'>
					<li>
						<span className="fa-li">
							<FontAwesomeIcon icon={faUser} className="mr-2" size='sm' fixedWidth={true} />
						</span>
						As a Senior Software Engineer with 10+ years experience and authorized to work in the USA, I bring expertise in both backend and frontend software development (within the gambling industry mostly before).
						My backend skills include TypeScript / JavaScript (Node.js) development, contributing to half a million dollars annual revenue growth in my last position. I also work with Python, PHP, Java and Go.
					</li>
					<li className='my-2'>
						<span className="fa-li">
							<FontAwesomeIcon icon={faServer} className="mr-2" />
						</span>
						Efficient cloud application administration with Kubernetes, Docker, and Google Cloud has facilitated a 30% reduction in operational costs. On the frontend, I am proficient with Vue/Nuxt, React/Next.
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
					<li>
						<span className="fa-li">
							<FontAwesomeIcon icon={faDog} className="mr-2" />
						</span>
							Proud father of a good Australian shepherd boy (check out Fun Mode!). I am a big fan of the hiking, camping, and fire pit on ocean beach.
							I also EV enthusiast and a big fan of Tesla.
						</li>
				</ul>
				
			</div>
					

			<div className="border-t border-gray-200 my-5"></div>
			
			<ul className="flex space-x-8 font-medium dark:text-white">
				<li>
					<Link href="/" className={(currentRoute === '/'?'menu-link-active':'menu-link')+" menu-link-hover"}>Resume</Link>
				</li>
				<li>
					<Link href="/blog" className={(currentRoute === '/blog'?'menu-link-active':'menu-link')+" menu-link-hover"}>Blog</Link>
				</li>
			</ul>
		</div>
	)
}