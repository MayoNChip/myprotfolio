"use client";

import React, { useEffect } from "react";
import { motion, useAnimate, useAnimation, Variants } from "framer-motion";
import CheckIcon from "./CheckIcon";
import { ErrorResponse } from "resend";
import { PiSmileyBlankLight, PiSmileyNervous } from "react-icons/pi";
import SocialMediaBar from "./SocialMediaBar";

function EmailSent({ error }: { error?: ErrorResponse }) {
	const circleControls = useAnimation();
	const circleBackgroundControls = useAnimation();
	const [scope, animate] = useAnimate();

	const circlePathVariation: Variants = {
		hidden: {
			pathLength: 0,
		},
		visible: {
			pathLength: 1.01,
			transition: {
				duration: 1,
			},
		},
	};

	const circleBackgroundVariation: Variants = {
		hidden: {
			scale: 0,
		},
		visible: {
			scale: 1,
		},
	};

	useEffect(() => {
		const enterAnimation = async () => {
			animate(
				"circle",
				{
					pathLength: [0, 1.01],
				},
				{
					duration: 0.6,

					ease: [0.34, 1.56, 0.64, 1],
				}
			);
			animate(
				"#circleBG",
				{
					opacity: [0, 1],
					scale: [0, 1],
				},
				{
					duration: 0.6,
					delay: 0.1,
					ease: [0.34, 1.56, 0.64, 1],
				}
			);
			await animate(
				"#circleBG",
				{
					boxShadow: ["none", "-1px -1px 40px -4px rgba(22,163,74)", "none"],
				},

				{
					duration: 0.8,
					delay: 0.9,
					ease: [0.34, 1.56, 0.64, 1],
				}
			);
		};

		if (!error) {
			enterAnimation();
		}
	}, [animate]);

	return (
		<div
			ref={scope}
			className="flex flex-col items-center justify-center h-screen "
		>
			{error ? (
				<div className="flex flex-col items-center space-y-12">
					<div className="flex items-center space-x-4">
						<h1 className="text-6xl text-red-600">oops</h1>
						<PiSmileyNervous className="w-12 h-12 fill-red-600" />
					</div>
					<div className="flex flex-col ">
						<div className="text-3xl text-dark">
							seems like something went wrong...
						</div>
						<div className="text-xl text-dark">
							you can try and dm me on LinkedIn or send me a message on
							whatsapp!
						</div>
					</div>
					<SocialMediaBar />
				</div>
			) : (
				<>
					<div className="relative z-10 flex justify-center">
						<svg width={250} height={250} viewBox="0 0 250 250">
							<motion.circle
								id="progress"
								variants={circlePathVariation}
								pathLength={0}
								cx={125}
								cy={125}
								r={90}
								initial="hidden"
								animate={circleControls}
								className="origin-center -rotate-90 stroke-[10px] stroke-green-600 fill-transparent "
							/>
						</svg>

						<motion.div
							initial={{ y: 0 }}
							id="circleBG"
							className="absolute flex items-center self-center justify-center p-4 scale-0 bg-green-500 rounded-full shadow-lg opacity-0 w-44 h-44 shadow-green-600/40"
						>
							<CheckIcon />
						</motion.div>
					</div>
					<motion.h1
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1 }}
						className="text-8xl text-accent z-[5]"
					>
						Thank you!
					</motion.h1>
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 1.5 }}
						className="text-5xl text-accent z-[4]"
					>
						We&apos;ll be in touch
					</motion.h1>
				</>
			)}
		</div>
	);
}

export default EmailSent;
