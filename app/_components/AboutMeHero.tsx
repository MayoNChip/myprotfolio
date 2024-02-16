"use client";

import React, { useEffect } from "react";
import {
	motion,
	stagger,
	useAnimate,
	useInView,
	Variants,
} from "framer-motion";
import Image from "next/image";
import aboutMeImage from "../../public/about.jpg";
import aboutMeImageHover from "../../public/melooking.png";

function AboutMeImage() {
	const [scope, animate] = useAnimate();
	const isInView = useInView(scope, { once: true, margin: "-100px" });

	useEffect(() => {
		if (isInView) {
			animate(
				scope.current,
				{
					opacity: [0, 1],
					y: [100, 0],
				},
				{
					type: "spring",
					delay: stagger(0.2, { ease: [0.24, 0.31, 0.6, 0.9] }),
				}
			);
		}
	}, [isInView]);

	const pulseVariants = {
		visable: {
			boxShadow: "-1px -1px 29px -4px rgba(205,83,52,0.09)",
		},
		hidden: {
			boxShadow: "-1px -1px 29px -4px rgba(205,83,52,0.75)",
		},
	};
	// const qouteVariants: Variants = {
	// 	show: {
	// 		opacity: 1,
	// 		transition: {
	// 			duration: 0.4,
	// 			type: "spring",
	// 			ease: "easeIn",
	// 		},
	// 	},
	// 	hide: {
	// 		opacity: 0,
	// 		transition: {
	// 			duration: 0.4,
	// 			type: "spring",
	// 			ease: "easeIn",
	// 		},
	// 	},
	// };

	// const qouteItemVariants = {
	// 	hidden: { opacity: 0 },
	// 	show: { opacity: 1 },
	// };

	return (
		<motion.div className="relative flex flex-col w-full min-h-screen">
			<motion.div className="relative flex flex-col items-center w-full h-full min-h-screen">
				<motion.div
					initial="rest"
					whileHover="hover"
					animate="rest"
					className=" flex flex-col absolute group top-[200px] right-[200px]"
				>
					<h1 className="self-center font-extralight text-light/30">
						Hover me!
					</h1>

					<motion.div
						variants={pulseVariants}
						initial="visable"
						animate="hidden"
						className="rounded-full"
						transition={{ duration: 2, repeat: Infinity }}
					>
						<motion.div
							// variants={firstImageVariants}
							className="w-[500px] h-[500px] overflow-hidden border-2 border-accent group-hover:border-accent/40  rounded-full self-end  transition-all"
						>
							<Image
								src={aboutMeImage}
								alt="Me"
								style={{ objectFit: "contain" }}
								className="translate-y-[-80px] group-hover:translate-y-[0px] group-hover:opacity-10 transition-transform group-hover:-z-10 "
							/>
						</motion.div>
						<motion.div
							// variants={secondImageVariants}
							className="absolute origin-bottom bottom-0 rounded-full overflow-hidden  border-b-2 border-accent  w-[500px] h-[600px]"
						>
							<Image
								src={aboutMeImageHover}
								alt="Me"
								className="translate-y-[100px] ease-in-out group-hover:translate-y-[0px] opacity-0 group-hover:opacity-100 transition-all duration-[250ms]"
							/>
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.div>

			<motion.div
				ref={scope}
				className="absolute flex flex-col self-center text-6xl opacity-0 bottom-40 w-fit text-light"
			>
				<motion.div className="flex gap-2 font-extralight">
					<h1>&quot;Programming isn&apos;t about what you</h1>
					<h1 className="font-black text-accent whitespace-nowrap">know</h1>
					<h1>.</h1>
				</motion.div>
				<motion.div className="flex items-center pl-12 space-x-2 font-extralight">
					<h1>it&apos;s about what you can </h1>
					<h1 className="font-black text-accent whitespace-nowrap">
						figure out
					</h1>
					<h1>.&quot;</h1>
					<h1 className="self-end text-2xl text-light/40">- Chris Pine</h1>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

export default AboutMeImage;
