import { faCode, faCoffee, faLightbulb, faMicrophone, faRocket, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ChatPage() {
	return (
		<div className='space-y-5'>
			<div className="p-7 block-section dark:bg-slate-600 bg-white">
				<h1 className="text-3xl font-bold mb-6 dark:text-white">Come and say hi 👋</h1>
				
				<div className="space-y-4 text-gray-600 dark:text-white">
					<p>
						Are you working on something new, exciting or weird?
					</p>
					
					<p>
						Are you learning about a new piece of tech or just looking for someone to bounce off an idea that has been haunting you for some time?
					</p>
					
					<p className="text-lg font-medium text-purple-600 dark:text-purple-400">
						Brilliant!
					</p>
					
					<p>
						I&apos;m available throughout the week for a coffee and a chat about ideas big and small. There&apos;s no specific format to this—ask me any question and I&apos;ll see if I can help, free of charge.
					</p>
					
					<p>
						I also have a bi-weekly 2h slot which I use for pair programming and mentoring sessions with friends, old and new.
					</p>
					
					<p>
						Should none of this suit you, feel free to call me for a delicious 3 minute rant. It&apos;s simple: you rant, I listen.
					</p>
					
					<p className="italic">
						We spend the remaining 7 minutes staring into the void, contemplating the pointlessness of our endeavors and the strange pleasure of hyperventilation.
					</p>
					
					<p>
						A few days later I might text you back with a solution to your problem.
					</p>
					
					<p className="font-medium">
						Honestly though, I&apos;m just curious to see who you are and what you&apos;ve been up to.
					</p>
					
					<div className="text-center py-8">
						<div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
							Come and say hi
						</div>
						<div className="flex justify-center space-x-4">
							<button
								className="text-sm text-white cursor-pointer bg-blue-500 hover:bg-blue-600 transition-colors py-3 px-6 rounded-lg shadow-md"
								data-cal-namespace="quick-chat"
								data-cal-link="nikita-podelenko/quick-chat"
								data-cal-config='{"layout":"month_view"}'
							>
								<FontAwesomeIcon icon={faCoffee} className="mr-2" />
								Schedule a Chat
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="p-7 block-section dark:bg-slate-600 bg-white">
				<h2 className="text-2xl font-bold mb-6 dark:text-white">Example topics</h2>
				<p className="text-sm text-gray-500 dark:text-gray-400 mb-6">(In no specific order)</p>
				
				<div className="grid md:grid-cols-2 gap-6">
					<div className="space-y-4">
						<div className="flex items-start space-x-3">
							<FontAwesomeIcon icon={faRocket} className="h-5 w-5 text-purple-500 mt-1" />
							<div>
								<h3 className="font-medium dark:text-white">Startup & Product Development</h3>
								<p className="text-sm text-gray-600 dark:text-gray-300">From MVP to enterprise scale, prototyping workflows, product-market fit, fundraising</p>
							</div>
						</div>
						
						<div className="flex items-start space-x-3">
							<FontAwesomeIcon icon={faCode} className="h-5 w-5 text-blue-500 mt-1" />
							<div>
								<h3 className="font-medium dark:text-white">Software Engineering</h3>
								<p className="text-sm text-gray-600 dark:text-gray-300">Full-stack development, AI/ML integration, voice technologies, scalable architectures</p>
							</div>
						</div>
						
						<div className="flex items-start space-x-3">
							<FontAwesomeIcon icon={faMicrophone} className="h-5 w-5 text-green-500 mt-1" />
							<div>
								<h3 className="font-medium dark:text-white">Voice & AI Technologies</h3>
								<p className="text-sm text-gray-600 dark:text-gray-300">Voice agents, LLM integration, LiveKit, custom voice platforms, conversational AI</p>
							</div>
						</div>
						
						<div className="flex items-start space-x-3">
							<FontAwesomeIcon icon={faUsers} className="h-5 w-5 text-orange-500 mt-1" />
							<div>
								<h3 className="font-medium dark:text-white">Leadership & Team Building</h3>
								<p className="text-sm text-gray-600 dark:text-gray-300">Being a founding engineer, CTO, remote team management, hiring technical talent</p>
							</div>
						</div>
					</div>
					
					<div className="space-y-4">
						<div className="flex items-start space-x-3">
							<FontAwesomeIcon icon={faLightbulb} className="h-5 w-5 text-yellow-500 mt-1" />
							<div>
								<h3 className="font-medium dark:text-white">Tech Stack & Architecture</h3>
								<p className="text-sm text-gray-600 dark:text-gray-300">TypeScript/Python ecosystems, React Native, Next.js, cloud infrastructure (AWS/GCP)</p>
							</div>
						</div>
						
						<div className="space-y-2">
							<h3 className="font-medium dark:text-white">Industry Experience</h3>
							<div className="flex flex-wrap gap-2">
								{['FinTech', 'EdTech', 'B2B SaaS', 'Voice AI', 'Gaming', 'E-Commerce', 'Mobile Apps'].map((industry, index) => (
									<span key={index} className="inline-block text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">
										{industry}
									</span>
								))}
							</div>
						</div>
						
						<div className="space-y-2">
							<h3 className="font-medium dark:text-white">Personal Interests</h3>
							<p className="text-sm text-gray-600 dark:text-gray-300">
								Surfing, hiking, camping, beach fire pits, Tesla & EVs, space technologies, 
								Australian Shepherds, California lifestyle
							</p>
						</div>
						
						<div className="space-y-2">
							<h3 className="font-medium dark:text-white">Random Topics</h3>
							<p className="text-sm text-gray-600 dark:text-gray-300">
								Immigration to the US, remote work culture, Eastern European work ethics etc.
							</p>
						</div>
					</div>
				</div>
				
				<div className="mt-8 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
					<p className="text-sm text-gray-600 dark:text-gray-300 text-center">
						<strong>Pro tip:</strong> I respond well to direct, no-bullshit communication. 
						Skip the pleasantries, get straight to the point. I appreciate when people challenge my ideas.
					</p>
				</div>
			</div>
		</div>
	)
} 