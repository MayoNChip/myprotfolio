import React from "react";
import checklogo from "../../public/check.svg";
import { motion } from "framer-motion";

function CheckIcon() {
	return (
		<div className="relative">
			<motion.div
				initial={{ width: "0px" }}
				animate={{ width: "48px" }}
				transition={{ delay: 0.5, ease: "circInOut" }}
				className="absolute bg-light origin-left h-[16px] rotate-45 -translate-x-[48px]  -translate-y-[9px]"
			></motion.div>
			<motion.div
				initial={{ width: "0px" }}
				animate={{ width: "108px" }}
				transition={{ delay: 0.8, ease: "circInOut" }}
				className="absolute bg-light origin-left w-[108px] h-[16px] -rotate-45 -translate-x-[23px] translate-y-[22px]"
			></motion.div>
		</div>
	);
}

export default CheckIcon;
