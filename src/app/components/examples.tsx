import { faCalendar, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GitHubCalendar from 'react-github-calendar';
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
		title: "cognition-wheel: A Model Context Protocol (MCP) server that implements a 'wisdom of crowds' approach to AI reasoning by consulting multiple state-of-the-art language models in parallel and synthesizing their responses",
		url: "https://github.com/Hormold/cognition-wheel",
		stars: 178
	},
	{
		title: "gpt-sql-box: Text to SQL generator using GPT-3 (Python + Vue) and AI chart generator!",
		url: "https://github.com/Hormold/gpt-sql-box",
		stars: 50
	},
	{
		title: "text-behind: Add text overlays to segmented objects in your images using AI. Powered by Meta's SAM2 for segmentation, running entirely in your browser",
		url: "https://github.com/Hormold/text-behind",
		stars: 12
	},
	{
		title: "tiktok-warmup: TypeScript-driven Android automation that warms up TikTok accounts (likes, comments, views) via ADB & vLLM",
		url: "https://github.com/Hormold/tiktok-warmup",
		stars: 13
	},
	{
		title: "voice2cal: Telegram Bot that converts voice messages to Google Calendar events using GPT-4",
		url: "https://github.com/Hormold/voice2cal",
		stars: 2
	},
	{
		title: "gmail-tg-notifications: Simple telegram bot to forward emails from Gmail to any chat using GPT-4 filtration",
		url: "https://github.com/Hormold/gmail-tg-notifications",
		stars: 1
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
						{item.stars && <span className="ml-2 text-sm text-gray-500">⭐ {item.stars}</span>}
					</a>
				</li>
			))}
			</ul>
			<GitHubCalendar username="Hormold" />
		</div>)
}