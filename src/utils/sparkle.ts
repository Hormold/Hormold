// Inspired by https://www.joshwcomeau.com/react/animated-sparkles-in-react/
import { useState, useRef, useCallback, useEffect } from "react";

export const random = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min)) + min;
export const range = (elements: number) =>
	Array.from({ length: elements }, (_, i) => i);
export const DEFAULT_COLOR = "#FFC700";


const QUERY = "(prefers-reduced-motion: no-preference)";
const isRenderingOnServer = typeof window === "undefined";
export function usePrefersReducedMotion() {
	const [prefersReducedMotion, setPrefersReducedMotion] =
		useState(() => {return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches});
	useEffect(() => {
		const mediaQueryList = window.matchMedia(QUERY);
		const listener = (event: any) => {
			setPrefersReducedMotion(!event.matches);
		};
		if (mediaQueryList.addEventListener) {
			mediaQueryList.addEventListener("change", listener);
		} else {
			mediaQueryList.addListener(listener);
		}
		return () => {
			if (mediaQueryList.removeEventListener) {
				mediaQueryList.removeEventListener("change", listener);
			} else {
				mediaQueryList.removeListener(listener);
			}
		};
	}, []);
	return prefersReducedMotion;
}

export const useRandomInterval = (
	callback: any,
	minDelay: number,
	maxDelay: number,
) => {
	const timeoutId = useRef<number | null>(null);
	const savedCallback = useRef(callback);
	useEffect(() => {
		savedCallback.current = callback;
	});
	useEffect(() => {
		let isEnabled =
			typeof minDelay === "number" && typeof maxDelay === "number";
		if (isEnabled) {
			const handleTick = () => {
				const nextTickAt = random(minDelay, maxDelay);
				timeoutId.current = window.setTimeout(() => {
					savedCallback.current();
					handleTick();
				}, nextTickAt);
			};
			handleTick();
		}
		return () => window.clearTimeout(timeoutId.current!);
	}, [minDelay, maxDelay]);
	const cancel = useCallback(function () {
		window.clearTimeout(timeoutId.current!);
	}, []);
	return cancel;
};

export const generateSparkle = (color: string) => {
	const sparkle = {
		id: String(random(10000, 99999)),
		createdAt: Date.now(),
		color,
		size: random(10, 20),
		style: {
			top: random(-20, 20) + "px",
			left: random(0, 100) + "%",
		},
	};
	return sparkle;
};