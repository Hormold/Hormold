'use client'
import { faMapMarked, faServer, faUser, faDog } from '@fortawesome/free-solid-svg-icons'
import { usePrefersReducedMotion } from '@/utils/sparkle'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import './about.css'

export default function About () {

	const currentRoute = usePathname()
	const prefersReducedMotion = false; // Temporary, need use - usePrefersReducedMotion();

	return (
		<div className="p-7 pb-0 block-section dark:bg-slate-600 bg-white">
			<h2 className="block-title dark:text-white">About me</h2>
			<div className="text-gray-600 mb-5 dark:text-white">
				<ul className='fa-ul'>
					<li>
						<span className="fa-li">
							<FontAwesomeIcon icon={faUser} className="mr-2" size='sm' fixedWidth={true} />
						</span>
						As a Staff Fullstack Software Engineer with 11+ years experience and authorized to work in the USA, I bring expertise in both backend and frontend software development (within the FinTech, EdTech & Gambling industry mostly before).
						My backend skills include TypeScript (JavaScript, Node.js) development, contributing to half a million dollars annual revenue growth in my last position. I also work with Python, Go, PHP and Java.
					</li>
					<li className='my-2'>
						<span className="fa-li">
							<FontAwesomeIcon icon={faServer} className="mr-2" />
						</span>
						Experienced in cloud application deployment and management using Kubernetes and Docker on Google Cloud Platform, AWS, Azure. Proficient in frontend development with React and Next.js, as well as Vue.js and Nuxt.js frameworks.
					</li>
					<li>
						<span className="fa-li">
							<FontAwesomeIcon icon={faMapMarked} className="mr-2" />
						</span>
						
						Moved to the USA in 2023, I am looking for a 
						<div id={!prefersReducedMotion?"counter":""} className={!prefersReducedMotion?"animated px-1":"inline font-bold m-1"}>
							<ul className={!prefersReducedMotion?"digits digits-first luckie":"inline"}>
								<li className={prefersReducedMotion?"inline-block before::content-[' '] after:content-['/'] after:mr-1":""}> hybrid </li>
								<li className={prefersReducedMotion?"inline-block before::content-[' '] after:content-['/'] after:mr-1":""}> on-site </li>
								<li className={prefersReducedMotion?"inline-block ml-1":""}> remote </li>
							</ul>
						</div>
						job as a Fullstack Software Engineer.
					</li>
					<li>
						<span className="fa-li">
							<FontAwesomeIcon icon={faDog} className="mr-2" />
						</span>
							Proud father of a good-australian-shepherd-boy (check out Fun Mode!). I am a big fan of the surfing, hiking, camping, and fire pit on ocean beach.
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