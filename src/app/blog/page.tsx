"use client"
import './blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faTags } from '@fortawesome/free-solid-svg-icons'
import Posts from '../posts/index'

export default function Blog() {
	return (
		<>
			<div className="p-7 block-section dark:bg-slate-600 bg-white">
				<h2 className="block-title dark:text-white">Short Notes</h2>
				<span className="block-subtitle dark:text-gray-300">
					Here are some short notes on various topics that I have written over the years.
				</span>
				<div className="bg-purple-100 border-l-4 border-purple-500 text-dark-700 p-4 my-3 dark:text-black" role="alert">
					<span>This page is still under construction. Please check back later.</span>
				</div>
			</div>
			{Posts.map((article, index) => (
				<div className='p-7 block-section bg-white dark:bg-slate-600' key={index}>
					<h1 className='dark:text-white text-2xl'>{article.title}</h1>
					<div className="item-header items-end mt-2">
						<div className="space-y-1.5">
							<div className="flex space-x-2">
								<div className="item-header-info" id="date">
									<FontAwesomeIcon icon={faCalendar} className="h-4 w-4" />
									<span>{article.date}</span>
								</div>
								<div className="item-header-info" id="tags">
									<FontAwesomeIcon icon={faTags} className="h-4 w-4" />
									{article.tags.map((tag, index) => (
										<span key={index}>{tag}</span>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className='dark:text-white mt-2'>{article.Post}</div>
				</div>
			))}
		</>
	)
}