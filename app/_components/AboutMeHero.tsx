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
import useScreenSize from "../../hooks/useScreenSize";

function AboutMeImage() {
	const [scope, animate] = useAnimate();
	const isInView = useInView(scope, { once: true, margin: "-100px" });
	const { width } = useScreenSize();

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
			boxShadow: "-1px -1px 29px -4px rgba(205,83,52,0.50)",
		},
		hidden: {
			boxShadow: "-1px -1px 29px -4px rgba(205,83,52,0.85)",
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
		<motion.div className="relative flex flex-col w-full my-24 md:my-0 h-fit md:min-h-screen">
			<motion.div className="flex items-center w-full pt-24 md:pt-0 md:min-h-screen md:relative md:flex-col">
				<motion.div
					initial="rest"
					whileHover="hover"
					animate="rest"
					className=" flex flex-col md:absolute relative group mx-auto md:mx-none md:top-[200px] md:right-[200px]"
				>
					<h1 className="self-center font-extralight text-light/30">
						{width && width > 768 ? " Hover me!" : "Click me!"}
					</h1>

					<motion.div
						variants={pulseVariants}
						initial="visable"
						animate="hidden"
						className="rounded-full"
						transition={{
							duration: 0.8,
							repeat: Infinity,
							repeatType: "reverse",
						}}
					>
						<motion.div
							// variants={firstImageVariants}
							className="md:w-[500px] md:h-[500px] w-[300px] h-[300px] overflow-hidden border-2 border-accent group-hover:border-accent/40  rounded-full self-end  transition-all"
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
							className="absolute origin-bottom bottom-0 rounded-full overflow-hidden  border-b-2 border-accent  md:w-[500px] md:h-[600px]"
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
				className="md:absolute flex flex-col p-4 pl-14 md: opacity-0 md:text-6xl md:bottom-14 md:left-48 md:w-fit w-full text-light top-[0px]"
			>
				<motion.div className="flex gap-2 font-extralight">
					<h1>&quot;Programming isn&apos;t about what you</h1>
					<h1 className="font-black text-accent whitespace-nowrap">know</h1>
					<h1>.</h1>
				</motion.div>
				<motion.div className="flex items-center pl-16 space-x-2 md:pl-12 font-extralight">
					<h1>it&apos;s about what you can </h1>
					<h1 className="font-black text-accent whitespace-nowrap">
						figure out
					</h1>
					<h1>.&quot;</h1>
				</motion.div>
				<h1 className="self-start pl-48 font-light md:text-2xl text-md md:pl-24 text-accent/30">
					Chris Pine
				</h1>
			</motion.div>
		</motion.div>
	);
}

export default AboutMeImage;
