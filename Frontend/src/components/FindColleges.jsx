import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MultiSelect } from '@mantine/core';

const dummyColleges = [
  {
    name: "Greendale University",
    rating: 5,
    cover: "/colleges/college-1.png",
    location: "New York",
    NIRF_RANK: 180,
    Course: ["B.Tech", "M.Tech"],
    top_mentors: [
      {
        name: "Anamika Sharma",
        expertise: "JEE",
        branch: "Computer Science",
        institution: "IIT Delhi",
        profile_pic: "mentor1.png",
        rating: 5,
      },
      {
        name: "Anant Sharama",
        expertise: "BITSAT",
        branch: "Computer Science",
        institution: "Amity Delhi",
        profile_pic: "mentor3.png",
        rating: 5,
      },
    ],
  },
  {
    name: "Luheran Highschool",
    rating: 4,
    cover: "/colleges/college-2.png",
    location: "New York",
    NIRF_RANK: 180,
    Course: ["B.Tech", "M.Tech"],
    top_mentors: [
      {
        name: "Anamika Sharma",
        expertise: "JEE",
        branch: "Computer Science",
        institution: "IIT Delhi",
        profile_pic: "mentor1.png",
        rating: 5,
      },
      {
        name: "Anant Sharama",
        expertise: "BITSAT",
        branch: "Computer Science",
        institution: "Amity Delhi",
        profile_pic: "mentor3.png",
        rating: 5,
      },
    ],
  },
  {
    name: "Hindu College",
    rating: 5,
    cover: "/colleges/college-1.png",
    location: "New York",
    NIRF_RANK: 180,
    Course: ["B.Tech", "M.Tech"],
    top_mentors: [
      {
        name: "Anamika Sharma",
        expertise: "JEE",
        branch: "Computer Science",
        institution: "IIT Delhi",
        profile_pic: "mentor1.png",
        rating: 5,
      },
      {
        name: "Anant Sharama",
        expertise: "BITSAT",
        branch: "Computer Science",
        institution: "Amity Delhi",
        profile_pic: "mentor3.png",
        rating: 5,
      },
    ],
  },
  {
    name: "Greendale University",
    rating: 5,
    cover: "/colleges/college-2.png",
    location: "New York",
    NIRF_RANK: 180,
    Course: ["B.Tech", "M.Tech"],
    top_mentors: [
      {
        name: "Anamika Sharma",
        expertise: "JEE",
        branch: "Computer Science",
        institution: "IIT Delhi",
        profile_pic: "mentor1.png",
        rating: 5,
      },
      {
        name: "Anant Sharama",
        expertise: "BITSAT",
        branch: "Computer Science",
        institution: "Amity Delhi",
        profile_pic: "mentor3.png",
        rating: 5,
      },
    ],
  },
  {
    name: "Luheran Highschool",
    rating: 4,
    cover: "/colleges/college-1.png",
    location: "New York",
    NIRF_RANK: 180,
    Course: ["B.Tech", "M.Tech"],
    top_mentors: [
      {
        name: "Anamika Sharma",
        expertise: "JEE",
        branch: "Computer Science",
        institution: "IIT Delhi",
        profile_pic: "mentor1.png",
        rating: 5,
      },
      {
        name: "Anant Sharama",
        expertise: "BITSAT",
        branch: "Computer Science",
        institution: "Amity Delhi",
        profile_pic: "mentor3.png",
        rating: 5,
      },
    ],
  },
  {
    name: "Hindu College",
    rating: 5,
    cover: "/colleges/college-2.png",
    location: "New York",
    NIRF_RANK: 180,
    Course: ["B.Tech", "M.Tech"],
    top_mentors: [
      {
        name: "Anamika Sharma",
        expertise: "JEE",
        branch: "Computer Science",
        institution: "IIT Delhi",
        profile_pic: "mentor1.png",
        rating: 5,
      },
      {
        name: "Anant Sharama",
        expertise: "BITSAT",
        branch: "Computer Science",
        institution: "Amity Delhi",
        profile_pic: "mentor3.png",
        rating: 5,
      },
    ],
  },
];

const FindColleges = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(null);
  const scrollContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [institution, setInstitution] = useState(false)


  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (prevIndex) => (prevIndex + 1) % dummyColleges.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const node = cardRefs.current[activeIndex];
    const container = scrollContainerRef.current;
    if (node && container) {
      const nodeLeft = node.offsetLeft;
      const nodeRight = nodeLeft + node.offsetWidth;
      const containerLeft = container.scrollLeft;
      const containerRight = containerLeft + container.offsetWidth;

      if (nodeLeft < containerLeft || nodeRight > containerRight) {
        container.scrollTo({
          left: nodeLeft - 15, // offset for gap
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  return (
    <>
      {/* Filters */}
      <div className='w-full bg-[#f3f3f3f7] text-black'>

        {/* Header Row */}
			<div className='w-full flex justify-between pt-6 pb-3 px-5 lg:px-23 gap-4'>
			<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold whitespace-nowrap'>Find Colleges-</h1>
			<button className='hidden text-sm lg:text-xl lg:flex gap-2 sm:gap-3 items-center px-4 py-1 lg:py-2 rounded-full bg-[#5BE38D] cursor-pointer hover:bg-green-400 md:px-12 justify-center'><span className="font-bold text-md">VIEW ALL</span>
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

      {/* Colleges Scroll Section */}
      <div className="bg-[#F3F3F3] flex flex-col-reverse lg:flex-col">
        <div className="w-full py-4">
          <img src="/arrow.png" alt="" className="mx-auto w-1/2 lg:w-1/4" />
          <div className="mx-10 mt-3 flex lg:hidden">
            <button className="w-full py-2 rounded-full bg-[#5BE38D] flex justify-center items-center"><span className="font-semibold">VIEW ALL<i className="ri-graduation-cap-line text-2xl sm:text-3xl ml-2"></i></span></button>
          </div>
        </div>
        <div
          className="relative py-12 px-4 overflow-auto flex items-center gap-4 scroll-smooth"
          ref={scrollContainerRef}
        >
          {dummyColleges.map((college, index) => {
            const isActive = index === activeIndex;
            const width = isActive ? 708 : 354;

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="shrink-0 transition-all duration-500 ease-in-out relative rounded-lg overflow-hidden"
                style={{
                  width,
                  height: "354px",
                  backgroundImage: `url(${college.cover})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute  flex flex-col gap-4 p-4 w-[70%] left-[15%] bottom-0 text-xl bg-white rounded-t-md">
                  <div className="flex items-center justify-between">
                    <p>{college.name}</p>
                    {isActive && (
                      <div className="flex items-center gap-2">
                        <p>
                          Rating:{" "}
                          <strong>
                            {college.rating}
                          </strong>
                        </p>
                        <i className="fas fa-star text-yellow-300" />
                      </div>
                    )}
                  </div>
                  {index === activeIndex &&
                    hovered === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{
                          duration: 0.35,
                          ease: "easeOut",
                        }}
                      >
                        <div className="transition-all items-center justify-between flex">
                          <p className="flex items-center gap-2 text-sm font-light">
                            <i className="far fa-location-dot" />
                            {college.location}
                          </p>
                          <div className="flex items-center gap-2 text-sm font-light">
                            NIRF RANK :{" "}
                            <span className="font-semibold">
                              {college.NIRF_RANK}
                            </span>
                          </div>
                        </div>
                        <div className="transition-all flex flex-col gap-2">
                          <h2>Top Mentors</h2>
                          <div className="flex items-center gap-2">
                            {college.top_mentors.map(
                              (mentor, index) => {
                                return (
                                  <div
                                    key={
                                      index
                                    }
                                    className="cursor-pointer flex flex-col flex-1 justify-center items-center gap-2 p-4 bg-accent-active/50 rounded-md transition-all overflow-hidden"
                                  >
                                    <img
                                      src={`/mentors/${mentor.profile_pic}`}
                                      alt={
                                        mentor.name
                                      }
                                      className="w-14 h-14 rounded-full object-cover bg-cover"
                                    />
                                    <div className="flex flex-col items-center justify-center w-full gap-1">
                                      <p className="text-xl font-semibold">
                                        {
                                          mentor.name
                                        }
                                      </p>
                                      <p className="text-sm font-light">
                                        {
                                          mentor?.branch
                                        }
                                      </p>
                                      <p className="text-sm font-light flex items-center gap-2">
                                        <span className="font-medium">
                                          Expertise:
                                        </span>
                                        {
                                          mentor.expertise
                                        }
                                      </p>
                                      <button className="hover:bg-accent transition-all py-1 mt-1 rounded-full w-full flex items-center justify-center bg-white font-semibold text-md">
                                        View
                                      </button>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FindColleges;