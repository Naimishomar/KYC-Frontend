import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const socials = [
	{
		platform: "Instagram",
		image: "/insta.png",
		link: "https://instagram.com/knowyourcolleges_kyc",
		iconClass: "ri-instagram-line",
	},
	{
		platform: "LinkedIn",
		image: "/linkedin.png",
		link: "https://linkedin.com/company/knowyourcolleges",
		iconClass: "ri-linkedin-fill",
	},
	{
		platform: "Twitter",
		image: "/twitter.png",
		link: "https://twitter.com/knowyourcolleges",
		iconClass: "ri-twitter-x-line",
	},
];

export default function OurSocials() {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Auto-switch every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % socials.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const handleDotClick = (index) => {
		setCurrentIndex(index);
	};

	return (
		<div className="flex flex-col overflow-hidden md:flex-row aspect-[1/2] md:aspect-video items-center justify-center gap-12 p-10 pb-0 px-6 md:py-5 md:pl-10 bg-[#B9F8CF]">
			{/* Left side - Dots and Labels */}
			<div className="flex md:flex-col gap-4 md:ml-20 md:gap-0 items-start text-left">
				<h1 className="text-5xl md:text-8xl z-10  font-semibold">
					OU
					<br />
					R~
					<br />
					SOC
					<br />
					IALS
				</h1>
				<div className="flex flex-col items-start relative gap-4 ml-20">
					<div className="w-[2px] h-full absolute ml-[7px] mb-2 bg-black "></div>
					{socials.map((social, index) => (
						<div
							key={index}
							className="flex z-10 items-center gap-3 cursor-pointer"
							onClick={() => handleDotClick(index)}
						>
							<div
								className={`w-4 h-4 rounded-full transition-all duration-300 ${
									currentIndex === index
										? "bg-black scale-125"
										: "bg-black"
								}`}
							/>
							<span
								className={`text-lg md:text-3xl flex items-center gap-2 font-medium ${
									currentIndex === index
										? "text-black"
										: "text-gray-600"
								}`}
							>
								<i className={`${social.iconClass} `}></i>
								{social.platform}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Right side - Image Animation */}
			<div className="relative h-full md:translate-x-[30px]">
				<AnimatePresence mode="wait">
					<motion.a
						key={currentIndex}
						href={socials[currentIndex].link}
						target="_blank"
						rel="noopener noreferrer"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 40 }}
						exit={{ opacity: 0, y: -50 }}
						transition={{ duration: 0.8 }}
						className="block"
					>
						<img
							src={socials[currentIndex].image}
							alt={socials[currentIndex].platform}
							className="rounded-xl w-full"
						/>
					</motion.a>
				</AnimatePresence>
			</div>
		</div>
	);
}
