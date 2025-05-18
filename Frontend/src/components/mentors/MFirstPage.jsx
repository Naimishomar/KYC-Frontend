import React, { useEffect, useRef, useState } from "react";
import { MultiSelect } from '@mantine/core';
import { Dialog } from "../ui/dialog";
import { useNavigate, Link } from "react-router-dom";
import MDialog from "./MDialog";
import MentorCarousel from "./MentorCarousel";

const MFirstPage = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [open, setOpen] = useState(false);
  const intervalRef = useRef(null);
  const [examExpertise, setExamExpertise] = useState({
    NEET: true,
    'JEE Mains': false,
    'JEE Advanced': false,
    BITSAT: false,
    CUET: false,
  });
  const [courses, setCourses] = useState({
    'B. Tech': true,
    'M.B.B.S': false,
    'B.E.': false,
  });
  const [button, setButton] = useState(
    <span className="font-bold text-lg sm:text-xl md:text-2xl">
      Get Personalized Mentor <i className="ri-arrow-right-line ml-2 font-bold"></i>
    </span>
  );

  const toggleExam = (key) => {
    setExamExpertise((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleCourse = (key) => {
    setCourses((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      const container = containerRef.current;
      if (!container) return;
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000);
  };

  return (
    <div className="w-full bg-white/90 py-5 relative h-screen sm:h-fit">
      {/* Header */}
      <div className="px-5 sm:px-10 py-2 flex justify-between sm:items-center gap-4">
        <h1 className="font-bold text-2xl sm:text-2xl md:text-4xl leading-tight whitespace-nowrap">
          Connect with our <br/>Top Senior Mentors
        </h1>
        <div
          className="font-bold space-x-3 text-lg sm:text-xl flex items-center"
          onClick={() => setOpen((prev) => !prev)}
        >
          <button className="cursor-pointer hidden sm:block">Apply Filters</button>
          <i className="ri-equalizer-line text-4xl font-semibold cursor-pointer"></i>
        </div>
      </div>

      {/* Filter Sidebar */}
      {open && (
        <div className="w-full sm:w-[350px] h-full z-[100] absolute right-0 top-0 bg-white border-l-4 border-[#5BE38D] shadow-lg">
          <div className="flex items-center gap-3 px-5 py-4 border-b">
            <i
              className="ri-arrow-left-s-line px-3 py-2 bg-gray-200 rounded cursor-pointer"
              onClick={() => setOpen(false)}
            ></i>
            <h1 className="text-xl font-bold">Apply Filters</h1>
          </div>
          <div className="p-5">
            <MultiSelect
              data={['5 Rating', 'Top Central Universities/Colleges', 'B.Tech', 'NEET']}
              defaultValue={['5 Rating', 'Top Central Universities/Colleges', 'B.Tech', 'NEET']}
              styles={{
                input: {
                  backgroundColor: 'transparent',
                  border: 'none',
                },
              }}
            />

            <div className="py-5 text-black">
              <h2 className="text-lg font-bold mb-2">Exam Expertise</h2>
              <div className="space-y-1">
                {Object.keys(examExpertise).map((exam) => (
                  <label key={exam} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={examExpertise[exam]}
                      onChange={() => toggleExam(exam)}
                    />
                    <span>{exam}</span>
                  </label>
                ))}
                <a href="#" className="text-green-600 font-semibold block mt-2">See All</a>
              </div>

              <h2 className="text-lg font-bold mt-6 mb-2">Course</h2>
              <div className="space-y-1">
                {Object.keys(courses).map((course) => (
                  <label key={course} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={courses[course]}
                      onChange={() => toggleCourse(course)}
                    />
                    <span>{course}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-8 gap-4">
              <button className="flex-1 border px-4 py-2 rounded">Remove all</button>
              <button className="flex-1 bg-[#5BE38D] px-4 py-2 rounded">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Carousel */}
      <div className="relative w-full overflow-x-hidden">
        <MentorCarousel />
      </div>

      {/* Buttons */}
      <div className="px-5 sm:px-10 flex flex-col sm:flex-row justify-between gap-2 my-20 absolute bottom-0 sm:my-5 sm:relative">
        <Link
          to="/mentor/home"
          className="bg-white px-4 py-3 rounded-sm w-full sm:w-[50%] flex justify-center items-center border"
        >
          <button>
            <span className="font-bold">View All</span>
            <i className="ri-arrow-right-line ml-2"></i>
          </button>
        </Link>

        <MDialog button={button} />
      </div>
    </div>
  );
};

export default MFirstPage;
