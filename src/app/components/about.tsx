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
						<strong>Founding Fullstack Software Engineer</strong> with <strong>13+ years experience</strong>. Green card holder authorized to work in the USA. Built AI voice platforms, FinTech solutions, and gambling platforms serving 10M+ users with $1M+ revenue impact.
					</li>
					<li className='my-2'>
						<span className="fa-li">
							<FontAwesomeIcon icon={faServer} className="mr-2" />
						</span>
						<div className='my-2'>
						<strong>Tech Stack:</strong> TypeScript, JavaScript, Python, React, Next.js, Node.js, NestJS, GraphQL. 
						</div>
						<div className='my-2'>
						<strong>AI & Voice:</strong> OpenAI GPT-4o, LiveKit, AI Agents, Vector Search. 
						</div>
						<div className='my-2'>
						<strong>Cloud:</strong> AWS, GCP, Kubernetes, Docker, PostgreSQL, MongoDB.
						</div>
					</li>
					<li>
						<span className="fa-li">
							<FontAwesomeIcon icon={faMapMarked} className="mr-2" />
						</span>
						
						Based in <strong>Orange County, California</strong>. Open to
						<div id={!prefersReducedMotion?"counter":""} className={!prefersReducedMotion?"animated px-1":"inline font-bold m-1"}>
							<ul className={!prefersReducedMotion?"digits digits-first luckie":"inline"}>
								<li className={prefersReducedMotion?"inline-block before::content-[' '] after:content-['/'] after:mr-1":""}> hybrid </li>
								<li className={prefersReducedMotion?"inline-block before::content-[' '] after:content-['/'] after:mr-1":""}> on-site </li>
								<li className={prefersReducedMotion?"inline-block ml-1":""}> remote </li>
							</ul>
						</div>
						opportunities as <strong>Staff/Founding Fullstack Engineer</strong>.
					</li>
					<li>
						<span className="fa-li">
							<FontAwesomeIcon icon={faDog} className="mr-2" />
						</span>
						Australian Shepherd dad. Surfing, hiking 100+ California trails, space tech enthusiast, Tesla/EV fan.
					</li>
				</ul>
				
			</div>
					

			<div className="border-t border-gray-200 my-5"></div>
			
			<ul className="flex space-x-8 font-medium dark:text-white">
				<li>
					<Link href="/" className={(currentRoute === '/'?'menu-link-active':'menu-link')+" menu-link-hover"}>Resume</Link>
				</li>
				<li>
					<Link href="/chat" className={(currentRoute === '/chat'?'menu-link-active':'menu-link')+" menu-link-hover"}>Let&apos;s Chat</Link>
				</li>
				<li>
					<Link href="/blog" className={(currentRoute === '/blog'?'menu-link-active':'menu-link')+" menu-link-hover"}>Blog</Link>
				</li>
			</ul>
		</div>
	)
}