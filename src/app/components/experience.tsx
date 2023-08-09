import { faCalendar, faMapMarked, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image"

const ExperienceData = [
    {
        position: 'Senior Fullstack Engineer',
        type: 'Full time',
        company: 'ONMoon LLC',
        location: 'Remote',
        startedAt: 'September 2015',
        endedAt: 'Present',
        skills: [
            'Node.js',
            'Nest',
            'Microservices',
            'Nuxt',
            'Vue',
            'Docker',
            'Kubernetes',
            'Terraform',
            'Fastify',
            'PostgreSQL',
            'Redis',
            'AWS',
            'Google Cloud Platform (GCP)',
            'Cloudflare Workers',
            'PHP',
            'Chrome Extensions',
            'E-Commerce',
        ],
        description: `As a collaborative team member in a flat structured organization, I played influential roles in various facets of project development. Engaging in product designing, code development, testing, and project management, I showcased multifaceted skills while directly contributing to each project's success in the absence of traditional management.`,
        imageName: 'company/onmoon.svg',
        backgroundColor: 'black',
        keyPoints: [
            'Engineered high-loaded gambling projects, notably market.csgo.com (in 2018), transforming it into a faster, multi-site engine leading to a significant increase in user engagement (60%). I also developed Skinpay.com, the first platform offering immediate payments for in-game skins, contributing to a revenue increase of 40%.',
            'As a senior backend developer and team leader, I maintained the infrastructure of a full-stack gambling ecosystem for a large, legacy gambling website. Collaborated significantly on the Steam Inventory Helper project, serving 1M users, through creating authorization services and developing APIs.',
            'Pioneered MMBets.net, allowing real-money bets on games, was built with a team of two and necessitated extensive use of Steam\'s low-level API. Transferred other legacy projects to contemporary frameworks like Nest and adopted modern communication methods like Google PubSub. Built a robust payment system that processed over 1 million transactions and moved the entire project from dedicated servers to Google Cloud.'
        ]
    },
    {
        position: 'Full Stack Engineer, Architect',
        type: 'Part time',
        company: 'iGambling Development',
        location: 'Remote',
        startedAt: 'June 2021',
        endedAt: 'June 2022',
        skills: ['Node.js', 'Nest', 'Microservices', 'Nuxt', 'Vue', 'Docker', 'Kubernetes', 'Terraform', 'Fastify', 'PostgreSQL', 'Redis'],
        keyPoints: [
            `Build an MVP and run a big experiment for the company, I spent a year working on an online casino project from architecture to front-end development for the affiliate program.`,
            `I completely created the architecture of the project, database, microservices. The backend was developed in TypeScript, Google Cloud Pubsub was chosen as the channel for communicating microservices, and the main database of the project was PostgreSQL`,
            `Build a complete frontend for project, using Nuxt.js (Vue2)`,
            `Created 10 original games (written by me) for the project, 6000 games were connected with the help of partners (Slotegrator) through the API integration of our platform and the platform of partners.`,
            `Connected more than 10 payment systems, 2 blockchains were fully integrated into the platform (web3 deposits, metamask).`,
            `Interviewed potential candidates and selected personnel for the initial team of the project after production launch was part of my key responsibilities`,
            `Developed an affiliate network platform, using the same technical stack - more 100+ partners joined in first few months`,
            `The project was made on a turnkey basis and handed over to the company for further experiments and launch as a separate product.`
        ],
        descrption: `Hired as a solo architect/developer for an MVP iGambling project.`,
        imageName: 'company/igambling.png?1',
        backgroundColor: '#173267',
    },
    {
        position: 'Web Developer',
        type: 'Full time',
        company: 'MDK',
        companyLink: `https://en.wikipedia.org/wiki/MDK_(community)`,
        location: 'Moscow, Russia',
        startedAt: 'October 2014',
        endedAt: 'September 2015',
        skills: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Bootstrap', 'Git'],
        description: `LAMP stack, One and alone of a small russian media company. We making gaming projects, internal services like spam cleaning tool for comments in VK social networks (SaaS).`,
        keyPoints: [`Primary project - first-ever skins (in-game items, like CS:GO) jackpot website using Steam “API” in 2015. I made a backend for an early version of the website. It was hard because nobody before us do not use in-game skins for gambling. This is my first experience with virtual goods and gambling.`],
        imageName: 'company/mdk.jpg',
    },
    {
        position: 'Web Developer',
        type: 'Part time',
        company: 'VideSeed / Twite',
        companyLink: `https://adv.videoseed.ru/`,
        location: 'Saint Petersburg, Russia',
        startedAt: 'December 2012',
        endedAt: 'September 2014',
        skills: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Bootstrap', 'Git'],
        description: 'LAMP Stack',
        keyPoints: [
            `Service offered to users to earn money on personal accounts in social networks. My objective was creating admin panel with statistics, caching. This is my first experience on working with big datasets.`
        ],
        imageName: 'company/videoseed.jpg',

    }
]

export default function Experience () {
	return (
		<div className="p-7 block-section">
            <h2 className="block-title">Experience</h2>
            {ExperienceData.map((item, index) => (
                <div className="mb-5 item-section" key={index}>
                    {item.companyLink ? (
                        <a href={item.companyLink} target="_blank" rel="noreferrer" className="company-logo" style={{backgroundColor: item.backgroundColor}}>
                            <div className="company-logo" style={{backgroundColor: item.backgroundColor}}>
                                <Image src={`/${item.imageName}`} alt={item.company} width={50} height={50} className="p-1" />
                            </div>
                        </a>
                    ) : (
                        <div className="company-logo" style={{backgroundColor: item.backgroundColor}}>
                            <Image src={`/${item.imageName}`} alt={item.company} width={50} height={50} className="p-1" />
                        </div>
                    )}

                    <div className="w-full space-y-5">
                        <div className="item-header">
                            <div className="space-y-1.5">
                                <div className="font-medium">{item.position}</div>
                                <div className="flex space-x-5">
                                    <div className="item-header-info">
                                        <FontAwesomeIcon icon={faSuitcase} className="h-4 w-4" />
                                        <span>{item.company}</span>
                                    </div>
                                    <div className="item-header-info">
                                        <FontAwesomeIcon icon={faMapMarked} className="h-4 w-4" />
                                        <span>
                                            {item.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2 sm:text-right">
                                <div className="job-item-badge">{item.type}</div>
                                <div className="item-header-info">
                                    <FontAwesomeIcon icon={faCalendar} className="h-4 w-4" />
                                    <span>{item.startedAt} – {item.endedAt}</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600">
                            {item.description}
                        </p>
                        <ul role="list" className="list-disc space-y-3 text-gray-600 marker:text-purple-400">
                            {item.keyPoints.map((keyPoint, index) => (
                                <li key={index}>{keyPoint}</li>
                            ))}
                        </ul>
                        <p>
                            <span className="font-medium">Skills:</span> {item.skills.join(', ')}
                        </p>
                        <div className="border-b border-gray-200"></div>
                    </div>
                </div>
            ))}
            

            </div>
	)
}