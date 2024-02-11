"use client";
import { useContext, useEffect } from "react";
import {
	stagger,
	useAnimate,
	motion,
	AnimatePresence,
	usePresence,
} from "framer-motion";
import { IoGlassesOutline } from "react-icons/io5";
import { GlobalContext, InitialContext } from "../../context/GlobalContext";
import useNav from "../../hooks/useNav";
import { cn } from "../../lib/utils";

export function Navbar() {
	const [scope, animate] = useAnimate();
	const { refs, inViewComponentId, setInViewComponentId } = useContext(
		GlobalContext
	) as InitialContext;
	const { routes, navbarVisable, handleRouteClick } = useNav();
	const [isPresent, safeToRemove] = usePresence();

	useEffect(() => {
		const animateEnterMenu = async () => {
			await animate(scope.current, {
				y: [-200, 0, 0],
			});

			await animate(scope.current, {
				width: ["32px", "500px"],
				padding: ["0px 0px", "0px 68px"],
			});

			await animate("#icon", {
				x: ["0%", "-650%"],
			});

			await animate("#menuItems", {
				display: ["none", "none", "flex"],
				flexDirection: ["column", "column"],
			});

			animate(
				"#menuItem",
				{
					opacity: [0, 1, 1],
				},
				{ delay: stagger(0.05, { ease: [0.24, 0.31, 0.6, 0.9] }) }
			);
		};

		const animateExitManu = async () => {
			animate(
				scope.current,
				{
					y: [0, -200],
				},
				{ delay: stagger(0.05, { ease: [0.24, 0.31, 0.6, 0.9] }) }
			);
		};

		if (isPresent) {
			animateEnterMenu();
		} else {
			animateExitManu();
		}
	}, []);

	return (
		<>
			<AnimatePresence mode="wait">
				<motion.div
					initial={{ y: -100 }}
					animate={{ y: navbarVisable ? 0 : -100 }}
					exit={{ y: -100 }}
					transition={{ duration: 0.5, ease: [0.24, 0.31, 0.6, 0.9] }}
					className=" self-center flex justify-around fixed items-center w-full my-10 min-h-[32px] z-[999]"
					key="something"
				>
					<div
						ref={scope}
						className="relative flex items-center justify-around w-8 min-h-[32px] whitespace-nowrap rounded-full bg-black-1"
					>
						<IoGlassesOutline
							id="icon"
							className="absolute z-10 w-8 h-8 text-light"
						/>

						{routes.map((route) => {
							return (
								<div
									id="menuItems"
									key={route.id}
									className="relative hidden h-full"
								>
									{inViewComponentId === route.id ? (
										<motion.div
											layoutId="selectedItem"
											className={
												"absolute w-full border-b-[2px] bottom-0 border-accent"
											}
										></motion.div>
									) : null}
									<motion.div
										id="menuItem"
										className="relative items-center w-full text-light"
									>
										<button
											key={route.id}
											className={cn(
												inViewComponentId === route.id
													? "text-accent"
													: "text-light",
												"w-full h-full z-10 transition-colors"
											)}
											onClick={() => handleRouteClick(route.id)}
										>
											{route.title}
										</button>
									</motion.div>
								</div>
							);
						})}
					</div>
				</motion.div>
			</AnimatePresence>
		</>
	);
}
