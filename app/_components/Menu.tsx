"use client";
import { motion, stagger, useAnimate } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { IoGlassesOutline } from "react-icons/io5";
import useMenu from "../../hooks/useMenu";
import { cn } from "../../lib/utils";
function Menu() {
	// const [scope, animate] = useAnimate();
	const menu = useMenu();
	const handleMenuClick = (idx: number) => {
		console.log(idx);
		// scrollToComponent(idx);
		// menu.setMenuItemIndex(idx);
	};
	const [scope, animate] = useAnimate();

	// useEffect(() => {
	// 	animate("div", {
	// 		opacity: 1,
	// 		transition: {
	// 			duration: 0.5,
	// 			ease: "easeInOut",
	// 			delay: 3,
	// 		},
	// 	});
	// });
	// const scrollToComponent = (idx: number) => {
	// 	console.log(refs[idx].current, idx);
	// 	refs[idx].current?.scrollIntoView({
	// 		behavior: "smooth",
	// 		block: "start",
	// 	});
	// };

	useEffect(() => {
		const animation = async () => {
			// animate(
			// 	"#icon",
			// 	{ opacity: [0, 1], x: [50, 0] },
			// 	{
			// 		duration: 1,
			// 		delay: stagger(0.1, { ease: [0.24, 0.31, 0.6, 0.9] }),
			// 	}
			// );
			animate(
				"#menuItemBG",
				{
					width: ["0%", "18%", "18%", "100%", "18%"],
					height: ["0%", "0%", "100%", "100%", "100%"],
				},
				{
					duration: 2,
					ease: [0.87, 0, 0.13, 1],
					delay: stagger(0.1, { ease: [0.24, 0.31, 0.6, 0.9] }),
				}
			);
			animate(
				"#menuItem",
				{ opacity: [0, 0, 0, 1] },
				{ duration: 1, delay: 1 }
			);
		};
		animation();
	}, []);

	return (
		<div ref={scope} className="flex flex-col items-center w-fit">
			Menu
		</div>
	);
}

export default Menu;
