import { faCalendar, faMapMarked, faSuitcase } from '@fortawesome/free-solid-svg-icons'
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
		imageName: 'https://media.licdn.com/dms/image/C4E03AQE-D-iC_Y4Wmw/profile-displayphoto-shrink_100_100/0/1662705994140?e=1697068800&v=beta&t=oD1zi6awHhQCn8tN1--J8R9v1zdz057cGWbDgK9IJc4',
	}
]

export default function Reviews () {
	return (
		<div className="p-7 block-section dark:bg-slate-600 bg-white">
			<h2 className="block-title dark:text-white">Recommendations</h2>
			{ReviewItems.map((item, index) => (
				<div className="mb-5 item-section" key={index}>
					<a href={item.url} target="_blank">
						<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cover" style={{backgroundImage: `url(${item.imageName})`}}>
						</div>
					</a>

					<div className="w-full space-y-5">
						<div className="item-header items-end">
							<div className="space-y-1.5">
								<div className="font-medium dark:text-white">{item.name}</div>
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
						<p className="text-gray-600 dark:text-white">
						{item.text}
					</p>
					</div>
					
				</div>
			))}
		</div>)
}