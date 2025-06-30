import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faUser, faPhone, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

type Project = {
	title: string;
	description: string;
	keyPoints: string[];
	stack: string[];
	website: string;
	status: string;
	imageName: IconDefinition | string;
	role: string;
}

const projectsData: Project[] = [
	{
		title: 'CMD-C',
		description: 'A native macOS app designed for real-time text correction in any application with a triple-copy shortcut, utilizing AI-powered feedback.',
		keyPoints: [
			`Built with a focus on seamless user experience for macOS`,
			`Supports automatic text correction by sending highlighted text to OpenAI, Anthropic, or a personal server with license access`,
			`Provides users with detailed feedback, showcasing both original and corrected text along with explanations`,
			`Designed to work universally across apps without any specific app dependencies`,
			`Targets quick text edits (300-400 characters) with a robust interface that doesn't disrupt workflow`,
			`Offers weekly improvement reports to track user progress over time`,
		],
		stack: ['Swift', 'SwiftUI', 'Nest.js', 'OpenAI API', 'Anthropic API', 'React'],
		website: 'https://cmd-c.app',
		status: 'Production',
		imageName: 'projects/cmdc.png',
		role: 'Solo Founder'
	},
	{
		title: 'Gmail to Telegram Notifications',
		description: 'A Telegram bot that forwards Gmail emails to any chat, channel, or private group, utilizing GPT-4 for content filtering.',
		keyPoints: [
			'Developed in TypeScript and hosted on Google Cloud Platform (GCP)',
			'Integrates with the Gmail API to monitor and retrieve emails in real-time',
			'Utilizes GPT-4o to filter and prioritize emails based on content relevance',
			'Supports forwarding emails to various Telegram destinations, including individual chats, channels, and private groups',
			'Ensures user privacy and data security by adhering to best practices in handling email content',
			'Offers customizable filtering options to tailor notifications to user preferences',
		],
		stack: ['TypeScript', 'Node.js', 'Google Cloud Platform', 'Telegram API', 'Gmail API', 'GPT-4'],
		website: 'https://github.com/Hormold/gmail-tg-notifications',
		status: 'Production',
		imageName: faGithub,
		role: 'Developer'
	},
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
	//{
	//	title: 'Voice2Calendar',
	//	description: 'Again, a Telegram bot that allows you to add events to your Google Calendar by voice',
	//	keyPoints: [
	//		`Developed in TypeScript and hosted on Google Cloud Functions`,
	//		`This chatbot allows users to add events to their Google Calendar by voice.`,
	//		`Chatbot can use Whisper to recognize voice messages in any languages`,
	//		`Chatbot using langchain to extract event information from messages, use search engine to find event location and add event to Google Calendar`,
	//		`Has a paid subscription model with free option`,
	//		`Used Redis as a storage (Yep, I know, it is not a database, but it is fast and cheap to store small amount of data)`,
	//	],
	//	stack: ['TypeScript', 'Cloud Functions', 'grammY', 'Google Calendar API', 'Whisper', 'Langchain'],
	//	website: 'https://t.me/voice2calbot',
	//	status: 'Production',
	//	imageName: 'projects/calendar.png',
	//	role: 'Founder, Developer'
	//},
	{
		title: 'SkipCalls (B2B)',
		description: 'AI-powered 24/7 phone agent that answers and makes calls for small & medium businesses, booking appointments, answering FAQs and syncing with CRMs.',
		keyPoints: [
			'Built voice server, agent constructor, web dashboard and backend single-handedly',
			'Evolved from custom voice orchestration to LiveKit-based engine (Python) with GPT-4o function calling and vector search for dynamic FAQ handling',
			'Implemented calendar integrations (Google / Outlook) for real-time appointment booking',
			'Deployed backend services on AWS with custom voice infrastructure and infra as code',
			'Pipeline handles thousands of parallel calls with <150 ms latency; all transcripts stored in Postgres + S3',
			'Product live at skipcalls.com with self-service onboarding & free trial plan',
		],
		stack: ['TypeScript', 'Python', 'Nest.js', 'React', 'Next.js', 'React Query', 'PostgreSQL', 'Redis', 'OpenAI GPT-4o', 'AWS', 'LiveKit', 'Custom Voice Infrastructure'],
		website: 'https://skipcalls.com',
		status: 'Production',
		imageName: 'company/skipcalls.avif',
		role: 'Founder'
	},
	{
		title: 'SkipCalls – AI Calls & Voicemail (B2C)',
		description: 'React-Native mobile app (iOS & Android) that serves as a client interface for users to deploy AI agents for making and receiving calls on their behalf.',
		keyPoints: [
			'React-Native Expo app that allows users to send AI agents to make calls and receive calls through AI agents',
			'Client interface for the SkipCalls platform with simple UI for deploying voice agents',
			'Designed and implemented subscription system with in-app purchases (App Store / Play Billing)',
			'Released to public – ranked in top 100 productivity apps during launch week',
		],
		stack: ['React Native', 'Expo', 'TypeScript', 'Python', 'LiveKit', 'GPT-4o', 'App Store Connect', 'Google Play'],
		website: 'https://skipcalls.app',
		status: 'Production',
		imageName: 'company/skipcalls.avif',
		role: 'Founder'
	}
];

export default function Projects () {
	return (
		<div className="p-7 block-section dark:bg-slate-600 bg-white">
			<h2 className="block-title dark:text-white">Side Projects</h2>
			{projectsData.map((item, index) => (
				<div className="mb-5 item-section" key={index}>
					<a href={item.website} target="_blank" rel="noreferrer" className="company-logo">
						{typeof item.imageName === 'string' ? (
							<Image src={`/${item.imageName}`} alt={item.title} width={50} height={50} className="p-1 rounded-lg" />
						) : (
							<FontAwesomeIcon icon={item.imageName} className="h-8 w-8" />
						)}
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