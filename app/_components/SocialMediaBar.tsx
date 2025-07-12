import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoGlassesOutline, IoLogoWhatsapp } from "react-icons/io5";

function SocialMediaBar() {
	return (
		<div className="relative flex items-center self-center justify-around w-1/2 gap-4 py-1 my-10 rounded-full bg-dark ">
			<IoGlassesOutline
				id="icon"
				className="absolute z-10 w-8 h-8 text-light"
			/>
			<Link
				href="https://api.whatsapp.com/send/?phone=972545649413&text&type=phone_number&app_absent=0"
				target="_blank"
			>
				<IoLogoWhatsapp fill="#25D366" opacity={0.7} className="w-7 h-7" />
			</Link>
			<Link href="https://www.linkedin.com/in/idocohendev/" target="_blank">
				<FaLinkedin fill="#0072AD" opacity={0.7} className="w-7 h-7" />
			</Link>
		</div>
	);
}

export default SocialMediaBar;
