import { faCalendar, faMapMarked, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ReviewItems = [
	{
		name: 'Spartak Kagramanyan',
		url: 'https://www.linkedin.com/in/spartak-k',
		position: 'Team Lead @ Storyteq | Senior Full-Stack TS/JS Developer',
		relationship: 'worked with Nikita in the same group',
		date: 'July 2023',
		location: 'Netherlands, Amsterdam',
		text: 'It was a great pleasure to work with and learn from Nikita. I was completely junior in NodeJS at the time and thanks to his guidance and high-quality code base, we could build the #1 product for years!',
		imageName: 'https://media.licdn.com/dms/image/v2/D4E03AQEKrGQYUB1kqw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695659934544?e=1729123200&v=beta&t=Pj136hkEzVzMY0qRqTr36NhDHI0F6fqxZtFUbuznLug',
	},
	{
		name: 'Christina K.',
		url: `https://www.linkedin.com/in/kkdesigner`,
		position: 'Senior Product Designer @ Arro',
		location: 'Los Angeles',
		date: 'July 2024',
		text: `Nikita is a talented and passionate developer who truly loves what he does. I greatly appreciate his ability to explain complex concepts in simple terms.

I’m continually impressed by the speed of his work and his dedication to constantly improving the products he works on. I had the opportunity to collaborate with Nikita on the AI feature in the Arro app. During this project, Nikita proved himself to be a true professional in AI and ML, and it was a pleasure to work with him. His infrastructure solutions were instrumental in launching this feature quickly and ensuring it had excellent performance and speed.

In summary, Nikita’s expertise, enthusiasm, and commitment to excellence make him an outstanding developer and a valuable team member.`,
imageName: `https://media.licdn.com/dms/image/v2/D5603AQHgIuwc7x63eg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1689617892186?e=1729123200&v=beta&t=HzUEsj-kFtum7fE4q_2te22e7t-Y7TOBoukqxD_oWAo`
	},
	{
		name: 'Daniel Williams',
		position: 'Senior Frontend Developer and Open Source Maintainer @ Arro',
		url: 'https://www.linkedin.com/in/danielhwilliams/',
		location: 'Remote',
		date: 'August 2024',
		text: `I had the pleasure of working closely with Nikita, and I was consistently impressed by his ability to create value in a short time frame. Nikita is a great problem solver who often takes it upon himself to find ways to fix whatever is blocking the team or slowing them down. His work ethic is second to none, and he's the most efficient developer I've seen, mastering his tools and using them to deliver results quickly. He is always on top of the latest technology and truly takes an interest in his craft. Nikita has also proven his ability across the stack and was quick to grasp the nuances of our system, getting involved wherever he could provide the most value. I highly recommend Nikita for any team, and I'm grateful to have worked with and learned from him.`,
		imageName: `https://media.licdn.com/dms/image/v2/C4D03AQHU_X-lcuG6xg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1662745249033?e=1730937600&v=beta&t=Bk-MVOUZrAbsMGZCZNtC_Al8EDGipdZ9fLie9N9k8XE`,
	}
]

export default function Reviews () {
	return (
		<div className="p-7 block-section dark:bg-slate-600 bg-white">
			<h2 className="block-title dark:text-white">Recommendations</h2>
			{ReviewItems.map((item, index) => (
				<div className="mb-5 item-section" key={index}>
					<a href={item.url} target="_blank">
						<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
							<FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" />
						</div>
					</a>

					<div className="w-full space-y-5">
						<div className="item-header items-end">
							<div className="space-y-1.5">
								<a href={item.url} target="_blank">
									<div className="font-medium dark:text-white">{item.name}</div>
								</a>
								<div className="flex space-x-5">
									<div className="item-header-info">
										<FontAwesomeIcon icon={faSuitcase} className="h-4 w-4" />
										<span>{item.position}</span>
									</div>
									<div className="item-header-info">
										<FontAwesomeIcon icon={faMapMarked} className="h-4 w-4" />
										<span>{item.location}</span>
									</div>
								</div>
							</div>
							<div className="space-y-1.5 sm:text-right">
								<div className="item-header-info">
									<FontAwesomeIcon icon={faCalendar} className="h-4 w-4" />
									<span>{item.date}</span>
								</div>
							</div>
						</div>
						<p className="text-gray-600 dark:text-white whitespace-pre-line">
							{item.text}
						</p>
					</div>
					
				</div>
			))}
		</div>)
}