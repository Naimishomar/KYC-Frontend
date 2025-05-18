import { MultiSelect } from '@mantine/core';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { ChevronDown, ChevronUp, Plus, X, ArrowRight } from 'lucide-react';

const courses = [
  {
    title: 'Technical Science',
    options: ['B.Tech, B.E, BCA, M.Tech, MCA']
  },
  {
    title: 'Medical Science',
    options: ['MBBS', 'BDS', 'BAMS', 'AYUSH']
  },
  {
    title: 'Arts',
    options: ['B.Ftech', 'BA Hons', 'BAMS','AYUSH']
  },
  {
    title: 'Commerce',
    options: ['B.Com', 'M.Com']
  },
  {
    title: 'Law',
    options: ['LLB', 'LLM']
  },
  {
    title:'Management',
    options: ['BBA','MBA ']
  }
];

const expertise = [
  {
    id: 1,
    title: "NEET",
  },
  {
    id: 2,
    title: "JEE Mains",
  },
  {
    id: 3,
    title: "JEE Advanced",
  },
  {
    id: 4,
    title: "BITSAT",
  },
  {
    id: 5,
    title: "CUET",
  },
  {
    id: 6,
    title: "NDA",
  },
  {
    id: 7,
    title: "CAT",
  },
  {
    id: 8,
    title: "IPMAT",
  },
  {
    id: 9,
    title: "GATE",
  },
  {
    id: 10,
    title: "CLAT",
  },
  {
    id: 11,
    title: "AILET",
  }
]

function MDialog({button,progress = 40}) {
  const [openCourses, setOpenCourses] = useState({});
  const [openExpertise, setOpenExpertise] = useState({});
  const [selectedFilters, setSelectedFilters] = useState(['Chosen Filter 1', 'Chosen Filter 2']);

    const toggleCourse = (title) => {
    setOpenCourses((prev) => ({ ...prev, [title]: !prev[title] }));
  };
  return (
    <div>
            <Dialog>
              <DialogTrigger className='w-full px-20 whitespace-nowrap py-2 rounded-sm bg-[#5BE38D] text-2xl text-black flex justify-center items-center cursor-pointer'>{button}</DialogTrigger>
              <DialogContent className="bg-[#E9E9E9] text-black border-none !max-w-none w-[90vw] !max-h-none h-[90vh] p-0 overflow-auto">
                <DialogHeader>
                  <DialogTitle className='font-bold text-[32px] px-10 pt-5'>Get a Personalized Mentor!</DialogTitle>
                  <hr className="border-2 border-[#C0C0C0] w-full"/>
                  <DialogDescription>
                    <div className="px-10 py-5 text-black">
                      <div>
                        <label htmlFor="" className="font-semibold text-xl">Search Mentor</label>
                        <div className="bg-white px-3 py-1 flex mt-1 rounded-sm">
                          <i class="ri-search-line text-lg text-[#6C6C6C]"></i>
                          <input type="text" placeholder="Mentor Name / College Name" className="border-none outline-0 w-full mx-2 placeholder:font-semibold placeholder:text-[#6C6C6C]" />
                        </div>
                      </div>

                      <div className="mt-3">
                        <label htmlFor="" className="font-semibold text-xl">Location</label>
                        <div className="bg-white px-3 py-1 flex mt-1 rounded-sm">
                          <i class="ri-search-line text-lg text-[#6C6C6C]"></i>
                          <input type="text" placeholder="College Location" className="border-none outline-0 w-full mx-2 placeholder:font-semibold placeholder:text-[#6C6C6C]" />
                        </div>
                      </div>

                      <div className="flex gap-4 mb-3 flex-wrap mt-6">
                        {selectedFilters.map((filter, idx) => (
                          <div key={idx} className="flex items-center bg-[#5BE38D] text-black px-4 py-2 rounded-full font-semibold">
                            <X size={16} className="mr-2 cursor-pointer" onClick={() => {
                              setSelectedFilters((prev) => prev.filter((_, i) => i !== idx));
                            }} />
                            {filter}
                          </div>
                        ))}
                      </div>

                      <div className="bg-[#5BE38D] rounded-2xl p-6 shadow-md">
                              <h2 className="text-2xl font-bold mb-4">COURSES</h2>
                              {courses.map((course) => (
                                <div key={course.title} className="mb-4">
                                  <button
                                    onClick={() => toggleCourse(course.title)}
                                    className="flex items-center gap-2 text-left w-full"
                                  >
                                    <div className="bg-white text-black px-2 py-2 rounded-md shadow cursor-pointer ml-5">
                                      {openCourses[course.title] ? <ChevronUp size={16} /> : <Plus size={16} />}
                                    </div>
                                    <span className="font-bold text-[18px]">{course.title}</span>
                                  </button>

                                  {openCourses[course.title] && (
                                    <div className="ml-15 mt-2 space-y-2">
                                      {course.options.map((option) => (
                                        <label key={option} className="flex items-center gap-2">
                                          <input type="checkbox" className="accent-blue-400" />
                                          <span>{option}</span>
                                        </label>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                      </div>
                      
                      <div className="bg-[#5BE38D] rounded-2xl p-6 shadow-md mt-3">
                        <h2 className="text-2xl font-bold mb-4">EXAM EXPERTISE</h2>
                        <div className="space-y-2 ml-5">
                          {expertise.map((item) => (
                            <label
                              key={item.id}
                              htmlFor={`expertise-${item.id}`}
                              className="flex items-center gap-3 text-black mb-4 font-bold text-[18px]"
                            >
                              <input
                                type="checkbox"
                                id={`expertise-${item.id}`}
                                name={item.title}
                                className="accent-green-600 w-4 h-4"
                              />
                              {item.title}
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                      <div className='w-full h-20 border-t-2 flex mb-5 justify-end px-10 space-x-5'>
                          <button className='px-8 border-2 border-black text-black rounded-md cursor-pointer'><span className='text-xl font-bold'>Remove All</span></button>
                          <button className="w-150 bg-green-700 text-white font-semibold rounded-xl px-7 relative overflow-hidden group cursor-pointer">
                            <div className="flex items-center justify-between font-semibold text-xl">
                              <span>Continue</span>
                              <img src="/whiteArrow.png" alt="arrow" className='w-12'/>
                            </div>

                            {/* Progress Bar */}
                            <div className="mt-2 h-1.5 bg-white rounded-full overflow-hidden">
                              <div
                                className="h-full bg-[#5BE38D] transition-all duration-500"
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                          </button>
                      </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
    </div>
  )
}

export default MDialog