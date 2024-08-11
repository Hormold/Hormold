import { faCalendar, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CodeExamplesItems = [
	{
		title: `Simple as possible fullstack chat application`,
		stack: ['React', 'Next', 'Vercel', 'Tailwind', 'TypeScript', 'OpenAI'],
		url: `https://github.com/Hormold/chatgpt-next-react-tailwind`,
		description: `An interview task to build a ChatGPT UI example with React, Next.js, Tailwind CSS and TypeScript with Vercel Edge Functions (Streaming, Serverless)`,
		workDuration: '3 hours',
		image: () => (
			<FontAwesomeIcon icon={faGithub} size="2xl" />
		)
	}, 
	{
		title: `This CV website`,
		stack: ['React', 'Next', 'Github Actions', 'Tailwind', 'TypeScript'],
		url: `https://github.com/Hormold/hormold`,
		description: `This website is built with React, Next.js, Tailwind CSS and TypeScript. It is deployed to Vercel with Github Actions, just for fun :)`,
		workDuration: '2 hours',
		image: () => (
			<FontAwesomeIcon icon={faGithub} size="2xl" />
		)
	},
]

const FunProjects = [
	{
		title: "Gmail to Telegram notifications: Built a service that sends Gmail notifications to Telegram using GPT-4 for smart notifications (works really cool!)",
		url: "https://github.com/Hormold/gmail-tg-notifications"
	},
	{
		title: "Voice to Calendar: A Telegram bot that allows you to add events to your Google Calendar by voice in any language from Telegram bot (I use it daily!)",
		url: "https://github.com/Hormold/voice2cal",
	},
	{
		title: `React Native UI for GPT: Knew as much about React Native as a goldfish knows about astrophysics when I started`,
		url: "https://github.com/Hormold/shitchat"
	},
	{
		title: "Python Text 2 SQL Generator: Built a SQL query generator that uses GPT-3 to generate SQL queries from natural language and schema knowledge.",
		url: "https://github.com/Hormold/gpt-sql-box"
	},
	{
		title: "Mobile App Data Storage Investigation: Ran a detective gig on how one app hides its secrets in custom file format. Spoiler: It was a wild goose chase!",
		url: "https://github.com/Hormold/callfilter-decoder"
	},
	{
		title: "No-Nonsense Telegram Bot: Built a friendly telegram bot who keeps a keen eye on USCIS case status.",
		url: "https://github.com/Hormold/ceac"
	},
	{
		title: "DNS and Redis Protocol in Node.js: Went raw and wild to reimagine DNS and Redis protocols in Node.js.",
		url: "https://github.com/Hormold/redns"
	},
	{
		url: "https://github.com/Hormold/grammy-telegram-bot-google-cloud-functions-template",
		title: "Telegram Bot Template: Built a template for Telegram bots that can be FAST deployed to Google Cloud Functions.",
	}
]

export default function CodeExamples () {
	return (
		<div className="p-7 block-section dark:bg-slate-600 bg-white">
			{/*<h2 className="block-title dark:text-white">Code Examples</h2>
			{CodeExamplesItems.map((item, index) => (
				<div className="mb-5 item-section" key={index}>
					<a href={item.url} target="_blank" rel="noreferrer" className="company-logo">
						{item.image()}
					</a>
					<div className="w-full space-y-5">
						<div className="item-header items-end">
							<div className="space-y-1.5">
								<div className="font-medium dark:text-white">{item.title}</div>
								<div className="flex space-x-5">
									<div className="item-header-info">
										<FontAwesomeIcon icon={faLayerGroup} className="h-4 w-4" />
										<span>
                                            {item.stack.map((stackItem, index) => (
												<span key={index}>{stackItem}{index !== item.stack.length - 1 ? ', ' : ''}</span>
											))}
                                        </span>
									</div>
								</div>
							</div>
							<div className="space-y-1.5 sm:text-right">
								<div className="item-header-info">
									<FontAwesomeIcon icon={faCalendar} className="h-4 w-4" />
									<span>Took: {item.workDuration}</span>
								</div>
							</div>
						</div>
						<p className="text-gray-600 dark:text-white">
							{item.description}
						</p>
						<div className="flex space-x-3">
							<a href={item.url} target="_blank" rel="noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:text-purple-200">
								<FontAwesomeIcon icon={faGithub} className="mr-2" />
								Visit repository
							</a>
						</div>
					</div>
					
				</div>
			))

			<hr className='my-5' />*/}

			<h2 className="block-title dark:text-white" id="fun">Fun Projects</h2>

			<p className="text-gray-600 dark:text-white ml-2">I have got a heap of coding projects I mess with over the weekends. They are not always in shipshape, and sometimes they are just suspiciously like alphabet soup than actual code. They exist though, much like my will to live on Mondays. I am a fearless kind of guy - I am not scared to share and scare with a touch of the wild, chaotic, «hold-my-beer» kind of code.</p>
			<ul className='list-disc fa-ul m-5 text-gray-600 dark:text-white space-y-2'>
			{FunProjects.map((item, index) => (
				<li key={index}>
					<a href={item.url} target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faGithub} size="sm" listItem className='text-cyan-500'/> {item.title}
					</a>
				</li>
			))}
			</ul>

		</div>)
}