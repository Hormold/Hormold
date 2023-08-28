"use client";
import { useState } from "react";
import {
	usePrefersReducedMotion,
	useRandomInterval,
	DEFAULT_COLOR,
	range,
	generateSparkle,
} from "@/utils/sparkle";

// Inspired by https://www.joshwcomeau.com/react/animated-sparkles-in-react/

const Sparkle = ({
	size,
	color,
	style,
}: {
	size: number;
	color: string;
	style: any;
}) => {
	const path =
		"M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z";
	return (
		<div className="svgWrapper" style={style}>
			<svg
				className="svgSpark"
				width={size}
				height={size}
				viewBox="0 0 68 68"
				fill="none"
			>
				<path d={path} fill={color} />
			</svg>
		</div>
	);
};

const Sparkles = ({
	color = DEFAULT_COLOR,
	children,
	...delegated
}: {
	color: string;
	children: React.ReactNode;
	[key: string]: any;
}) => {

	const [sparkles, setSparkles] = useState(() => {
		return range(5).map(() => generateSparkle(color));
	});

	const prefersReducedMotion = usePrefersReducedMotion();
	useRandomInterval(
		() => {
			const sparkle = generateSparkle(color);
			const now = Date.now();
			const nextSparkles = sparkles.filter((sp) => {
				const delta = now - sp.createdAt;
				return delta < 750;
			});
			nextSparkles.push(sparkle);
			setSparkles(nextSparkles);
		},
		prefersReducedMotion ? 0 : 50,
		prefersReducedMotion ? 0 : 450,
	);
	return (
		<div className="wrapper" {...delegated}>
			{sparkles.map((sparkle) => (
				<Sparkle
					key={sparkle.id}
					color={sparkle.color}
					size={sparkle.size}
					style={sparkle.style}
				/>
			))}
			<div className="childWrapper">{children}</div>
		</div>
	);
};

export default Sparkles;
