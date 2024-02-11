"use client";
import { useEffect, useState } from "react";
import { stagger, useAnimate, motion } from "framer-motion";
import { IoGlassesOutline } from "react-icons/io5";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { menuItems } from "../../lib/MenuItems";
import { usePathname } from "next/navigation";

function NewMenu() {
	const [scope, animate] = useAnimate();
	const [selectedId, setSelectedId] = useState(1);
	const param = usePathname() as "aboutme" | "contactme" | "projects";
	const pathname = usePathname();

	useEffect(() => {
		const animateMenu = async () => {
			await animate(scope.current, {
				y: [-200, 0, 0],
				// top: [-200, 0, 0],
				// justifyContent: ["center", "space-around"],
			});

			await animate(scope.current, {
				width: ["32px", "500px"],
				padding: ["2px 2px", "2px 68px"],
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
		animateMenu();
	}, []);

	useEffect(() => {
		switch (param) {
			case "aboutme":
				setSelectedId(2);
		}
	}, [param]);

	return (
		<div
			// className="relative flex items-center justify-around w-8 min-h-[32px] p-[2px] rounded-full bg-accent"
			className="fixed self-center flex justify-around w-[500px] my-10 min-h-[32px] z-[999]"
			key="something"
		>
			<div
				ref={scope}
				className="relative flex translate-y-[-200px] items-center justify-around w-8 whitespace-nowrap bg-accent rounded-full"
			>
				<IoGlassesOutline
					id="icon"
					className="absolute z-10 w-8 h-8 text-black-1"
				/>
				{/* <Link href={"/aboutme"}></Link> */}

				{menuItems.map((item) => {
					return (
						<div
							id="menuItems"
							key={item.id}
							className="relative items-end hidden h-full"
						>
							{selectedId === item.id ? (
								<motion.div
									layoutId="selectedItem"
									className={
										"absolute w-full border-b-[2px] bottom-0 border-secondary"
									}
								></motion.div>
							) : null}
							<motion.div
								onClick={() => setSelectedId(item.id)}
								id="menuItem"
								className={cn(
									selectedId === item.id ? "bg-black-1/20" : "bg-accent",
									"h-[95%] px-4 opacity-0 flex items-center  rounded-t-2xl text-light "
								)}
							>
								<Link href={item.path} key={item.id}>
									{item.title}
								</Link>
							</motion.div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default NewMenu;
