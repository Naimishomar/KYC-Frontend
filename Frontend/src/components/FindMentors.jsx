import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MultiSelect } from '@mantine/core';

const dummyMentors = [
	{
		id: "mentor1",
		name: "Anamika Sharma",
		expertise: "JEE",
		branch: "Computer Science",
		institution: "IIT Delhi",
		profile_pic: "mentor1.png",
		rating: 5,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		id: "mentor2",
		name: "Anant Sharama",
		expertise: "BITSAT",
		branch: "Computer Science",
		institution: "Amity Delhi",
		profile_pic: "mentor3.png",
		rating: 5,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		id: "mentor3",
		name: "Karan Deb",
		expertise: "JEE",
		branch: "Computer Science",
		institution: "IIT Delhi",
		profile_pic: "mentor2.png",
		rating: 5,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		id: "mentor4",
		name: "Anamika Sharma",
		expertise: "JEE",
		branch: "Computer Science",
		institution: "IIT Delhi",
		profile_pic: "mentor1.png",
		rating: 5,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		id: "mentor5",
		name: "Anant Sharama",
		expertise: "BITSAT",
		branch: "Computer Science",
		institution: "Amity Delhi",
		profile_pic: "mentor3.png",
		rating: 5,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		id: "mentor6",
		name: "Anamika Sharma",
		expertise: "JEE",
		branch: "Computer Science",
		institution: "IIT Delhi",
		profile_pic: "mentor1.png",
		rating: 5,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

const FindMentors = () => {
	const [selectedMentor, setSelectedMentor] = useState(dummyMentors[2]);
	const [hovered, setHovered] = useState(null);
	const mentorScrollRef = useRef(null);
	const [showFilters, setShowFilters] = useState(false);
	const [showSelect, setShowSelect] = useState(false);
	const [institution, setInstitution] = useState(false)

	useEffect(() => {
		const scrollContainer = mentorScrollRef.current;
		if (!scrollContainer) return;

		const handleScroll = () => {
			const containerRect = scrollContainer.getBoundingClientRect();
			const containerCenter = containerRect.left + containerRect.width / 2;

			let closestElement = null;
			let closestDistance = Infinity;

			document.querySelectorAll(".mentor").forEach((el) => {
				const elRect = el.getBoundingClientRect();
				const elCenter = elRect.left + elRect.width / 2;
				const distance = Math.abs(containerCenter - elCenter);

				if (distance < closestDistance) {
					closestDistance = distance;
					closestElement = el;
				}
			});

			if (closestElement) {
				const selected = dummyMentors.find(
					(mentor) => mentor.id === closestElement?.id
				);
				setSelectedMentor(selected || null);
			}
		};

		scrollContainer.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			scrollContainer.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
		<div className='w-full bg-[#f3f3f3f7] text-black'>

			{/* Header Row */}
			<div className='w-full flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 pb-3 px-23 gap-4'>
			<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold whitespace-nowrap'>Find Mentors-</h1>
			<button className='text-lg sm:text-xl flex gap-2 sm:gap-3 items-center px-4 py-2 rounded-full bg-[#5BE38D] cursor-pointer hover:bg-green-400 md:px-12 justify-center'><span className="font-bold text-md">VIEW ALL</span>
				<i className="ri-graduation-cap-line text-2xl sm:text-3xl"></i>
			</button>
			</div>

			{/* Filter Bar */}
			<div className='w-full bg-[#70B2FF] px-4 sm:px-23 py-3'>

			{/* Toggle Button for Mobile (below lg / 1024px) */}
			<div className='lg:hidden flex justify-between items-center'>
				<p className='text-xl font-bold flex items-center gap-2'>
				Filters <i className="ri-filter-3-fill font-medium"></i>
				</p>
				<button
				onClick={() => setShowFilters(!showFilters)}
				className='text-base bg-white px-4 py-2 rounded-full flex items-center gap-2'
				>
				{showFilters ? 'Hide' : 'Show'} Options
				<i className="ri-arrow-drop-down-line text-2xl"></i>
				</button>
			</div>

			{/* Filters Container */}
			<div className={`mt-4 lg:mt-0 ${showFilters ? 'block' : 'hidden'} lg:flex lg:justify-between lg:items-center lg:flex-row flex-col gap-4`}>

				{/* Left Filters */}
				<div className='flex flex-col sm:flex-row flex-wrap gap-3 items-start sm:items-center'>
				<div className='flex items-center gap-2 text-lg sm:text-xl font-bold '>
					<span className=''>Filters</span>
					<i className="ri-filter-3-fill font-medium text-2xl"></i>
				</div>
				<hr className="rotate-90 w-12 rounded-full border-3 border-black"/>
				<div className="relative w-fit flex">
					<button onClick={()=>setShowSelect(prev=>!prev)} className={`text-base sm:text-lg flex items-center rounded-full gap-2 font-semibold border border-black px-4 py-0 cursor-pointer overflow-hidden transition-all duration-200 ${showSelect && "w-fit"}`}>                <span className="font-semibold text-sm">Courses</span>
						<i className="ri-book-shelf-line text-2xl font-medium"></i>
						{showSelect && (
						<MultiSelect
						data={['Medical', 'Engineering', 'Commerce', 'Humanities']}
						defaultValue={['Medical', 'Engineering', 'Commerce']}
						clearable
						styles={{
						input: {
							backgroundColor: 'transparent',
							border: 'none',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}
						}}
					/>                
					)}
						<i className="ri-arrow-drop-right-line text-3xl text-white font-medium"></i>
					</button>
				</div>

				<button onClick={()=>setInstitution(prev=>!prev)} className={`text-base sm:text-lg flex items-center rounded-full gap-2 font-semibold border border-black px-4 py-0 cursor-pointer overflow-hidden transition-all duration-200 ${institution && "w-fit"}`}>
					<span className="font-semibold text-sm">Institution Types</span>
					<i className="ri-bank-line text-2xl font-medium"></i>
					{institution && (
						<MultiSelect
						data={['Goverment', 'Gov. Aided', 'Private']}
						defaultValue={['Goverment', 'Gov. Aided', 'Private']}
						clearable
						styles={{
						input: {
							backgroundColor: 'transparent',
							border: 'none',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}
						}}
					/>                
					)}
					<i className="ri-arrow-drop-right-line text-3xl text-white font-medium"></i>
				</button>
				</div>

				{/* Advanced Filters */}
				<div className='w-full sm:w-auto mt-2 lg:mt-0'>
				<button className='text-base sm:text-lg bg-white flex items-center rounded-full gap-2 font-semibold border-1 px-4 py-1 w-full sm:w-auto whitespace-nowrap border-black'>
					<span className="font-semibold text-sm">Advanced Filters</span>
					<i className="ri-equalizer-line text-xl font-light"></i>
				</button>
				</div>
			</div>
			</div>
		</div>
		{/* Filter Section Ends */}

		<div className="py-3 bg-[#f3f3f3]">
			<div className="w-full">
				<img src="/arrow.png" alt="" className="mx-auto w-1/4" />
			</div>
			<div className="flex flex-col gap-2">
				<div
					ref={mentorScrollRef}
					className="scrollbar-hide relative w-full h-[450px] overflow-auto flex items-center snap-x snap-mandatory gap-[30px] px-[calc((50vw-10px))]"
				>
					{dummyMentors.length > 0 &&
						dummyMentors.map((mentor, index) => {
							const selectedIndex = dummyMentors.findIndex(
								(m) => m.id === selectedMentor?.id
							);
							const isActive = index === selectedIndex && hovered === index;

							return (
								<button
									onMouseEnter={() => setHovered(index)}
									onMouseLeave={() => setHovered(null)}
									key={index}
									id={mentor.id}
									className={`mentor rounded-lg overflow-hidden transition-all relative w-[150px] h-[300px] my-1 text-3xl snap-center font-semibold min-w-[100px] leading-normal flex items-center justify-center shrink-0 ripple p-1
										${
											index === selectedIndex + 1 ||
											index === selectedIndex - 1
												? "h-[300px] w-[250px]"
												: index === selectedIndex
												? "h-[400px] w-[250px]"
												: "w-[200px] h-[300px]"
										}
									`}
									onClick={() => {
										setSelectedMentor(mentor);
									}}
								>
									{!isActive && (
										<div className="w-full absolute bottom-0 z-20">
											<div className="mx-2 flex bg-white text-start flex-col p-4 px-3 gap-1 transtion-all cursor-pointer">
												<h3 className="text-xl whitespace-nowrap font-bold flex items-center">
													{mentor.name}
													<i className="fas fa-badge-check text-xs pl-1 pb-4 text-accent" />
												</h3>
												<div className="flex text-xs items-center gap-2 font-light">
													<p>{mentor.branch} .</p>
													<p>{mentor.institution}</p>
												</div>
												<p className="text-xs font-light flex items-center gap-2">
													<span className="font-semibold">Expertise:</span>
													{mentor.expertise}
												</p>
											</div>
										</div>
									)}
									<motion.div
										className="absolute bottom-0 z-20 w-full"
										initial={false}
										animate={
											isActive
												? { opacity: 1, y: 0 }
												: { opacity: 1, y: 150 }
										}
										transition={{
											duration: 0.35,
											ease: "easeOut",
										}}
									>
										<div className="flex bg-white text-start flex-col p-4 px-6 gap-1 transtion-all cursor-pointer">
											<div
												className={`${
													isActive ? "flex" : "hidden"
												} items-center gap-2`}
											>
												<span className="text-sm font-semibold flex items-center">
													Rating:
												</span>
												<div className="flex items-center gap-0">
													{Array(mentor.rating)
														.fill(0)
														.map((_, i) => (
															<i
																key={i}
																className="ri-star-s-fill text-xs"
															></i>
														))}
												</div>
											</div>
											<h3 className="text-2xl font-bold flex items-center">
												{mentor.name}
												<i className="fas fa-badge-check text-xs pl-1 pb-4 text-accent" />
											</h3>
											<div className="flex text-xs items-center gap-2 font-light">
												<p>{mentor.branch}.</p>
												<p>{mentor.institution}</p>
											</div>
											<p className="text-sm font-light flex items-center gap-2">
												<span className="font-semibold">Expertise:</span>
												{mentor.expertise}
											</p>
											<div
												className={`${
													isActive
														? "flex flex-col gap-4"
														: "hidden"
												} transition-all`}
											>
												<p className="text-xs font-light text-start">
													{mentor.description}
												</p>
												<button className="py-1 w-full font-regular text-center hover:bg-[#80e8b0] transition-all bg-accent-active rounded-md bg-[#5BE38D] cursor-pointer">
													<span className="font-bold text-xl">View</span>
												</button>
											</div>
										</div>
									</motion.div>
									<img
										src={`/mentors/${mentor.profile_pic}`}
										alt={`${mentor.name}'s profile`}
										className="absolute top-0 w-full h-full object-cover"
									/>
								</button>
							);
						})}
				</div>
			</div>
		</div>
		</>
	);
};

export default FindMentors;
