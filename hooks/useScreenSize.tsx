"use client";

import { useEffect, useState } from "react";

function useScreenSize() {
	const [width, setWidth] = useState<number | null>(null);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return {
		width,
	};
}

export default useScreenSize;
