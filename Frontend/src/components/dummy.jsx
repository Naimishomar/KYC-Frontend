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
  const [selectedMentor, setSelectedMentor] = useState(dummyMentors[0]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const scrollRef = useRef(null);
  const rafId = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [institution, setInstitution] = useState(false)

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);

      rafId.current = requestAnimationFrame(() => {
        const center = container.scrollLeft + container.offsetWidth / 2;
        let closest = null;
        let minDistance = Infinity;

        Array.from(container.children).forEach((el) => {
          const rect = el.getBoundingClientRect();
          const elCenter = rect.left + rect.width / 2;
          const distance = Math.abs(elCenter - window.innerWidth / 2);
          if (distance < minDistance) {
            minDistance = distance;
            closest = el;
          }
        });

        const id = closest?.getAttribute("id");
        const found = dummyMentors.find((m) => m.id === id);
        if (found) setSelectedMentor(found);
      });
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scroll = () => {
      if (!isHovering) {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 1, behavior: "smooth" });
        }
      }
    };

    const interval = setInterval(scroll, 2000);
    return () => clearInterval(interval);
  }, []);

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
    <div
      className="py-3 bg-[#f3f3f3] flex flex-col-reverse lg:flex-col"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div ref={scrollRef} className="scrollbar-hide w-full h-[450px] overflow-x-auto flex items-center snap-x snap-mandatory gap-[30px] px-[calc((50vw-10px))]">
        {dummyMentors.map((mentor, index) => {
          const isSelected = selectedMentor?.id === mentor.id;
          const isHovered = hoveredIndex === index;

          const sizeClass = isSelected
            ? "w-[250px] h-[400px]"
            : "w-[200px] h-[300px]";

          return (
            <div
              id={mentor.id}
              key={mentor.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`mentor relative shrink-0 snap-center ${sizeClass} rounded-xl overflow-hidden transition-all duration-500`}
            >
              <img
                src={`/mentors/${mentor.profile_pic}`}
                className="w-full h-full object-cover absolute top-0 left-0"
                alt={mentor.name}
              />
              <motion.div
                initial={false}
                animate={isHovered || isSelected ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                className="absolute bottom-0 bg-white bg-opacity-90 w-full p-4 text-left z-10"
              >
                <h3 className="text-xl font-bold">{mentor.name}</h3>
                <p className="text-sm">{mentor.branch} • {mentor.institution}</p>
                <p className="text-sm font-light"><b>Expertise:</b> {mentor.expertise}</p>
                {(isHovered || isSelected) && (
                  <p className="text-xs mt-2">{mentor.description}</p>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default FindMentors;
