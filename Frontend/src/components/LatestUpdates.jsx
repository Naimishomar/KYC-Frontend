import { useState } from "react";
import { motion } from "framer-motion";
import React from 'react';
import { CalendarDays, CheckCircle, School, ClipboardList, KeyRound, GraduationCap, ArrowUpRight } from 'lucide-react';

const details = [
  { icon: <ClipboardList className="w-5 h-5" />, label: 'College Forms' },
  { icon: <CheckCircle className="w-5 h-5" />, label: 'Check Eligibility' },
  { icon: <School className="w-5 h-5" />, label: 'Scholarships' },
  { icon: <KeyRound className="w-5 h-5" />, label: 'Answer Keys' },
  { icon: <GraduationCap className="w-5 h-5" />, label: 'Colleges For You' },
  { icon: <CalendarDays className="w-5 h-5" />, label: 'Examination Dates' },
];

const LatestUpdates = () => {
	const dummyData = {
		blogs: [
			{
				id: 1,
				title: "Career choice that best suits you.",
				description:
					"B Tech via JEE (Mains), MBA, MCA, MCA Lateral via CUET PG. Sem penatibus et quam diam ante proin ullamcorpe",
				duration: "20min",
				date: "January 20, 2025",
				image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
			},
			{
				id: 2,
				title: "Career choice that best suits you.",
				description:
					"B Tech via JEE (Mains), MBA, MCA, MCA Lateral via CUET PG. Sem penatibus et quam diam ante proin ullamcorpe",
				duration: "20min",
				date: "January 20, 2025",
				image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
			},
			{
				id: 3,
				title: "Career choice that best suits you.",
				description:
					"B Tech via JEE (Mains), MBA, MCA, MCA Lateral via CUET PG. Sem penatibus et quam diam ante proin ullamcorpe",
				duration: "20min",
				date: "January 20, 2025",
				image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
			},
		],
		podcasts: [
			{
				id: 1,
				title: "Reality Of Startup Culture In DTU | Founder Lensroom - Ritik Tripathi",
				description:
					"Explore various career paths in technology from students and professionals.",
				duration: "15min",
				date: "February 15, 2025",
				image: "https://i.ytimg.com/vi/_KM0xiTTH24/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDwBFmsgNk0RgkvA9NXDy0sj_VQsw",
			},
			{
				id: 1,
				title: "Reality Of Startup Culture In DTU | Founder Lensroom - Ritik Tripathi",
				description:
					"Explore various career paths in technology from students and professionals.",
				duration: "15min",
				date: "February 15, 2025",
				image: "https://i.ytimg.com/vi/_KM0xiTTH24/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDwBFmsgNk0RgkvA9NXDy0sj_VQsw",
			},
		],
	};

	const [activeTab, setActiveTab] = useState("blogs");

	const data = dummyData[activeTab];

	return (
		<>
		<div className="py-10 md:py-8 px-6 md:px-27 bg-[#77B6FF]">
			<h1 className="uppercase text-[3.4rem] font-bold tracking-wide">Latest Updates</h1>
			<br />
			<div>
				{/* Tabs */}
				<div className="flex items-center space-x-6 border-b-4 border-gray-500 mb-6">
					<button
						onClick={() => setActiveTab("blogs")}
						className={`translate-y-1 py-1 cursor-pointer ${
							activeTab === "blogs"
								? "text-black border-b-4 border-black"
								: "text-gray-700"
						}`}
					>
						<span className="text-2xl font-semibold">BLOGS</span>
					</button>
					<button
						onClick={() => setActiveTab("podcasts")}
						className={`text-2xl py-1 translate-y-1 cursor-pointer ${
							activeTab === "podcasts"
								? "text-black border-b-4 border-black font-semibold"
                : "text-gray-700"
						}`}
					>
						<span className="text-2xl font-semibold">PODCASTS</span>
					</button>
				</div>

				{/* Cards */}
				<div className="flex flex-col items-center md:items-start md:flex-row gap-7">
					{data.map((item) => (
						<div
							key={item.id}
							className="bg-white rounded-2xl overflow-hidden shadow-md w-full md:w-130 h-100"
						>
							<div className="mx-4 mt-4 mb-2 rounded-xl overflow-hidden bg-red-500">
								<img
									src={item.image}
									alt="cover"
									className="w-full h-60 object-cover"
								/>
							</div>
							<div className="px-4 pb-4">
								<h3 className="font-bold text-md">{item.title}</h3>
								<p className="text-gray-600 text-sm mt-1">
									{item.description}
								</p>
								<div className="flex space-x-4 mt-3 text-sm text-gray-700">
									<span className="bg-gray-200 rounded-full px-2 text-[13px]">
										{item.duration}
									</span>
									<span className="bg-gray-200 rounded-full px-2 text-[13px]">
										{item.date}
									</span>
								</div>
							</div>
						</div>
					))}
					<a
						href="/more-content"
						className="bg-white px-9 py-2.5 m-auto rounded-2xl flex items-center justify-center shadow-md hover:bg-gray-100 transition"
					>
						<i class="ri-arrow-right-fill text-4xl"></i>
					</a>
				</div>

			</div>
		</div>

		<div className="py-10 md:pb-10 md:pt-5 px-6 md:px-27 bg-[#77B6FF]">
		<h2 className="text-2xl font-semibold border-b-4 inline-block border-black px-5">IMPORTANT DETAILS</h2>

		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
			{details.map((item, index) => (
			<div
				key={index}
				className="flex items-center justify-between bg-[#FFCB5A] px-4 py-5 rounded-2xl font-semibold text-black shadow-sm cursor-pointer hover:scale-105 transition-all"
			>
				<div className="flex items-center gap-2 ml-3">
				{item.icon}
				<span className='font-bold text-xl tracking-wide'>{item.label.toUpperCase()}</span>
				</div>
				<ArrowUpRight className="w-8 h-8" />
			</div>
			))}
		</div>
		</div>
		</>
	);
};

export default LatestUpdates;
