'use client'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { useContext, useState } from 'react'
import AppContext from "./context"

const allSkills = [
	'JavaScript',
	'Node.js',
	'Vue / Nuxt',
	'React / Next',
	'TypeScript',
	'Backend Development',
	'PostgreSQL',
	'Nest', 'DevOps', 'Google Cloud',
	'AWS', 'Docker', 'Kubernetes',
	'CI/CD', 'Microservices', 'REST',
	'Hasura', 'GraphQL', 'Redis'
]

const topSkills = [ ...allSkills.slice(0, 5) ]

export default function Sidebar() {
	const context = useContext(AppContext)
	const [isShowAllSkills, setIsShowAllSkills] = useState(false)
	return (
		<div>
			<div className="shadow rounded-xl overflow-hidden">
				<div className="h-32 bg-cover" style={{"backgroundImage": "url('/cover2.jpg')"}}></div>
				<div className="pt-14 p-7 bg-white relative dark:bg-slate-600">
				
					<span className="status-badge bg-green-400">
						Open to work
					</span>
					<a href="/"><Image src="/me.jpg" width='100' height='100' alt="Avatar" className="user-photo" /></a>
					<div className="text-lg font-semibold mb-1.5 dark:text-white">Nikita Podelenko</div>
					<div className="text-sm text-gray-400 mb-7">Senior Fullstack Developer</div>
					<a href='/cv.pdf' target='_blank' className="flex group">
						<button className="download-btn">Download CV</button>
						<button className="download-btn-icon" title="Download CV">
							<FontAwesomeIcon icon={faDownload} />
						</button>
					</a>
				</div>
			</div>

			<div className="p-7 block-section my-2 dark:bg-slate-600 bg-white">
				<h2 className="block-title dark:text-white">Information</h2>
				<div className="space-y-4">
					<div className="flex justify-between">
						<div className="text-gray-400">Location</div>
						<div className="font-medium text-right text-gray-600 dark:text-white">
							<a href='https://en.wikipedia.org/wiki/Orange_County,_California' target='_blank' className="text-orange-500 cursor-pointer" title='California'>Orange County</a>, USA</div>
					</div>
					<div className="flex justify-between">
						<div className="text-gray-400">Experience</div>
						<div className="font-medium text-right text-gray-600 dark:text-white">10+ years</div>
					</div>
					<div className="flex justify-between">
						<div className="text-gray-400">Availability</div>
						<div className="font-medium text-right text-gray-600 dark:text-white">~ 1 week</div>
					</div>
					<div className="flex justify-between">
						<div className="text-gray-400">Relocation</div>
						<div className="font-medium text-right text-gray-600 dark:text-white">within USA</div>
					</div>
				</div>
			</div>

			<div className="p-7 block-section flow-root my-2 dark:bg-slate-600 bg-white">
				<h2 className="block-title dark:text-white">Top Skills</h2>
				<div className="-m-2 flex flex-wrap transition-all duration-300">
					{(isShowAllSkills?allSkills:topSkills).map((skill, index) => (
						<span className="skill-tag transition dark:text-white dark:bg-violet-500" key={index}>{skill}</span>
					))}
					{isShowAllSkills?'':<span className="skill-tag cursor-pointer dark:bg-violet-500 dark:text-white" title="Show more" onClick={() => setIsShowAllSkills(!isShowAllSkills)}>+{allSkills.length - topSkills.length}</span>}
				</div>
			</div>

			<div className="p-7 block-section my-2 dark:bg-slate-600 bg-white">
				<h2 className="block-title dark:text-white">Contacts</h2>
				<div className="space-y-4">
					<div className="flex justify-between">
						<div className="text-gray-400">
							<FontAwesomeIcon icon={faEnvelope} className="mr-2" />
							Email
						</div>
						<div className="font-medium text-right text-gray-600 dark:text-white">
							<a href="mailto:hormold@gmail.com">
								hormold@gmail.com
							</a>
						</div>
					</div>

					<div className="flex justify-between">
						<div className="text-gray-400">
							<FontAwesomeIcon icon={faTelegram} className="mr-2" />
							Telegram
						</div>
						<div className="font-medium text-right text-gray-600 dark:text-white">
							<a href="https://t.me/define" target="_blank">
								@define
							</a>
						</div>
					</div>

					<div className="flex justify-between">
						<div className="text-gray-400">
							<FontAwesomeIcon icon={faLinkedin} className="mr-2" />
							LinkedIn
						</div>
						<div className="font-medium text-right text-gray-600 dark:text-white">
							<a href="https://linkedin.com/in/nikita39" target="_blank">
								@nikita39
							</a>
						</div>
					</div>

					<div className="flex justify-between">
						<div className="text-gray-400">
							<FontAwesomeIcon icon={faGithub} className="mr-2" />
							GitHub
						</div>
						<div className="font-medium text-right text-gray-600 dark:text-white">
							<a href="https://github.com/hormold" target="_blank">
								@hormold
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="p-1 block-section dark:bg-slate-600 bg-white">

				<div className='text-center m-3 dark:text-white'>
					<label className="relative inline-flex items-center cursor-pointer" >
						<input type="checkbox" defaultChecked={context.funMode} className="sr-only peer" onClick={(event) => context.setFunMode( !context.funMode )} />
						<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
						<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 gradient__text">Fun Mode</span>
					</label>
				</div>

				<div className='text-center m-3 dark:text-white'>
					<label className="relative inline-flex items-center cursor-pointer" >
						<input type="checkbox" defaultChecked={context.darkMode} className="sr-only peer" onClick={(event) => context.setDarkMode( !context.darkMode )} />
						<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
						<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
					</label>
				</div>

				
			</div>

		</div>
	)
}