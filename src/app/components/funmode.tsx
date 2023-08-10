'use client'
import AppContext from '../components/context';
import Image from 'next/image'
import { useContext, useEffect, useRef } from 'react'

const map = (value: number, x1: number, y1: number, x2: number, y2: number): number => (value - x1) * (y2 - x2) / (y1 - x1) + x2;


export default function FunMode () {

	const context = useContext(AppContext)
	const funModeRef = useRef(context.funMode)

	useEffect(() => {
		funModeRef.current = context.funMode 
		const main = document.querySelector('.main') as HTMLElement
		const sidebar = document.querySelector('.sidebar') as HTMLElement
		const hidden = document.querySelector('.hidden-el') as HTMLElement
		const hiddenText = document.querySelector('.hidden-text') as HTMLElement
		const dogImage = document.querySelector('.dog-image') as HTMLElement
		const shadow = document.querySelector('.bottom-shadow') as HTMLElement
		const handleScroll = () => {
			if(!funModeRef.current) return
			if(!main || !sidebar || !shadow || !hidden || !main) return
			const scroll = window.scrollY
			const scrollPercentage = scroll / main.offsetHeight

			const perspective = map(scrollPercentage, 0, 1, 1000, 0)
			const rotate = map(scrollPercentage, 0, 1, 0, 140 )

			sidebar.style.transform = `perspective(${perspective}px) rotateY(${rotate}deg)`
			sidebar.style.transformOrigin = 'left'

			main.style.transform = `perspective(${perspective}px) rotateY(-${rotate*0.97}deg)`
			main.style.transformOrigin = 'right'

			hidden.style.opacity = map(scrollPercentage, 0, 1, 0, 1).toString()
			hiddenText.style.transform = `scale(${map(scrollPercentage, 0, 1, 1, 20)})`
			dogImage.style.transform = `rotate(${map(scrollPercentage, 0, 1, 1, 20)}deg) scale(${map(scrollPercentage, 0, 1, 1, 10)})`
			main.style.opacity = map(scrollPercentage, 0, .7, 1, 0).toString()
			shadow.style.opacity = map(scrollPercentage, 0, 1, 0, 1).toString()
		}

		if(context.funMode) {
			if(window.scrollY > 0)
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			setTimeout( () => window.addEventListener('scroll', handleScroll), window.scrollY > 0 ? 600 : 0);
		} else {
			window.removeEventListener('scroll', handleScroll)
			sidebar.style.transform = ``;
			main.style.transform = ``;
			if(!hiddenText || !hidden || !main) return
			hidden.style.opacity = "0";
			hiddenText.style.transform = `scale(1)`
			main.style.opacity = "1"
		}
	}, [context]);


	return (
		<>
		{context.funMode?
			<div className="hidden-el opacity-0 fixed z-0 left-2/4 top-1/4">
				<Image src='/dog.png' width={130} height={400} alt='Dog' className='rounded-full dog-image' />
				<h5 className='text-center text-white text-lg hidden-text m-5'>
					Thanks for<br />visiting my website!
				</h5>
			</div>
        : '' }
		</>
	)
}