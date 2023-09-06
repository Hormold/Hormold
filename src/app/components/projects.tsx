import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faUser } from '@fortawesome/free-solid-svg-icons';

const projectsData = [
	{
		title: 'GPTaskBot',
		description: 'A revolutionary chatbot powered by cutting-edge technology that can answer any question and perform any task inside Telegram with 60k+ users',
		keyPoints: [
			`Developed in TypeScript and hosted on Google Cloud Platform (GCP)`,
			`This chatbot incorporates advanced features like voice message recognition, group chat compatibility, and image generation based on descriptions.`,
			`With a seamless integration into Telegram, users can enjoy accurate and comprehensive responses to any queries.`,
			`Leveraging the capabilities of GPT-4, our chatbot possesses unlimited knowledge and can adapt its creative responses based on user preferences.`,
			`Additionally, this project promotes privacy and convenience, allowing secure payments via card without the need for phone number verification`,
			`Initially, this project was built as a proof of concept on Python and was later migrated to TypeScript for scalability and maintainability.`,
		],
		stack: ['TypeScript', 'Node.js', 'Google Cloud Platform', 'Telegram API', 'GPT-4'],
		website: 'https://gptask.io/',
		status: 'Production',
		imageName: 'projects/gptask.jpg',
		role: 'Co-Founder, Developer'
	}, 
	{
		title: 'TON.cash',
		description: 'Peer-to-peer exchange platform for cash and cryptocurrency',
		keyPoints: [
			`Developed in TypeScript and hosted on DigialOcean App Platform`,
			`This platform allows users to exchange cash and cryptocurrency with each other, without the need for a middleman.`,
			`Platform helps users to find the best exchange rate and the most convenient location for the exchange.`,
		],
		stack: ['TypeScript', 'Node.js', 'DigitalOcean App Platform', 'Nuxt3', 'Vue3', 'Python'],
		website: 'https://ton.cash/',
		status: 'WIP',
		imageName: 'projects/toncash.svg',
		role: 'Founder, Developer'
	},
	{
		title: 'Voice2Calendar',
		description: 'Again, a Telegram bot that allows you to add events to your Google Calendar by voice',
		keyPoints: [
			`Developed in TypeScript and hosted on Google Cloud Functions`,
			`This chatbot allows users to add events to their Google Calendar by voice.`,
			`Chatbot can use Whisper to recognize voice messages in any languages`,
			`Chatbot using langchain to extract event information from messages, use search engine to find event location and add event to Google Calendar`,
			`Has a paid subscription model with free option`,
			`Used Redis as a storage (Yep, I know, it is not a database, but it is fast and cheap to store small amount of data)`,
		],
		stack: ['TypeScript', 'Node.js', 'Google Cloud Platform', 'Telegram API', 'Google Calendar API', 'Redis', 'Whisper', 'Langchain'],
		website: 'https://t.me/voice2calbot',
		status: 'Production',
		imageName: 'projects/calendar.png',
		role: 'Founder, Developer'
	}
];

export default function Projects () {
	return (
		<div className="p-7 block-section dark:bg-slate-600 bg-white">
			<h2 className="block-title dark:text-white">Side Projects</h2>
			{projectsData.map((item, index) => (
				<div className="mb-5 item-section" key={index}>
					<a href={item.website} target="_blank" rel="noreferrer" className="company-logo">
						<Image src={`/${item.imageName}`} alt={item.title} width={50} height={50} className="p-1 rounded-lg" />
					</a>

					<div className="w-full space-y-5">
						<div className="item-header">
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
							
							<div className="space-y-2 sm:text-right">
								<div className="job-item-badge">{item.status}</div>
								<div className="item-header-info">
									<FontAwesomeIcon icon={faUser} className="h-4 w-4" />
									<span>{item.role}</span>
								</div>
							</div>
						</div>
						<p className="text-gray-600 dark:text-white">
							{item.description}
						</p>
						<ul role="list" className="list-disc space-y-3 text-gray-600 marker:text-purple-400 dark:text-white">
							{item.keyPoints.map((keyPoint, index) => (
								<li key={index}>{keyPoint}</li>
							))}
						</ul>
						<div className="flex space-x-3">
							<a href={item.website} target="_blank" rel="noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:text-purple-200">
								Visit website - {item.title}
							</a>
						</div>
						<div className="border-b border-gray-200"></div>
					</div>
				</div>
			))}
		</div>
	)
}