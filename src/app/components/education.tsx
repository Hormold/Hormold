import { faCalendar, faMapMarked, faSchool } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EducationItems = [
	{
		location: 'Russia, Kaliningrad',
		university: 'Immanuel Kant Baltic Federal University',
		degree: 'Bachelor of Computer Science',
		startedAt: 'September 2008',
		finishedAt: 'May 2015',
		imageName: 'education/ikbfu.jpg?2',
	}
]

export default function Education () {
	return (
		<div className="p-7 block-section dark:bg-slate-600 bg-white">
			<h2 className="block-title dark:text-white">Education</h2>
			{EducationItems.map((item, index) => (
				<div className="mb-5 item-section" key={index}>
					<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cover" style={{backgroundImage: `url(${item.imageName})`}}>
					</div>

					<div className="w-full space-y-5">
						<div className="item-header items-end">
							<div className="space-y-1.5">
								<div className="font-medium dark:text-white">{item.degree}</div>
								<div className="flex space-x-5">
									<div className="item-header-info">
										<FontAwesomeIcon icon={faSchool} className="h-4 w-4" />
										<span>{item.university}</span>
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
									<span>{item.startedAt} - {item.finishedAt}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>)
}