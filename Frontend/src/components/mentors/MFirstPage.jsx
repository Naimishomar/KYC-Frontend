import React, { useEffect, useRef, useState } from "react";
import { MultiSelect } from '@mantine/core';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { useNavigate, Link } from "react-router-dom";
import MDialog from "./MDialog";



const students = [
  {
    name: "Anannya Singh",
    course: "Computer Science",
    college: "Amity, Delhi",
    rating: 5,
    expertise: "JEE Mains",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero, assumenda voluptatem quasi quidem cupiditate maiores quia aperiam velit reprehenderit laudantium hic ex facilis ipsum beatae nobis necessitatibus. Exercitationem amet voluptatem dolorum dolores deleniti quidem recusandae iure provident sint accusantium odio, dicta perferendis repudiandae inventore cumque animi culpa nam. Distinctio?",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Karan Deb",
    course: "Computer Science",
    college: "Amity, Delhi",
    rating: 4,
    expertise: "DSA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero, assumenda voluptatem quasi quidem cupiditate maiores quia aperiam velit reprehenderit laudantium hic ex facilis ipsum beatae nobis necessitatibus. Exercitationem amet voluptatem dolorum dolores deleniti quidem recusandae iure provident sint accusantium odio, dicta perferendis repudiandae inventore cumque animi culpa nam. Distinctio?",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Anant Sharma",
    course: "Computer Science",
    college: "Amity, Delhi",
    rating: 4.5,
    expertise: "Maths",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero, assumenda voluptatem quasi quidem cupiditate maiores quia aperiam velit reprehenderit laudantium hic ex facilis ipsum beatae nobis necessitatibus. Exercitationem amet voluptatem dolorum dolores deleniti quidem recusandae iure provident sint accusantium odio, dicta perferendis repudiandae inventore cumque animi culpa nam. Distinctio?",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Anant Sharma",
    course: "Computer Science",
    college: "Amity, Delhi",
    rating: 4.5,
    expertise: "Maths",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero, assumenda voluptatem quasi quidem cupiditate maiores quia aperiam velit reprehenderit laudantium hic ex facilis ipsum beatae nobis necessitatibus. Exercitationem amet voluptatem dolorum dolores deleniti quidem recusandae iure provident sint accusantium odio, dicta perferendis repudiandae inventore cumque animi culpa nam. Distinctio?",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Anant Sharma",
    course: "Computer Science",
    college: "Amity, Delhi",
    rating: 4.5,
    expertise: "Maths",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero, assumenda voluptatem quasi quidem cupiditate maiores quia aperiam velit reprehenderit laudantium hic ex facilis ipsum beatae nobis necessitatibus. Exercitationem amet voluptatem dolorum dolores deleniti quidem recusandae iure provident sint accusantium odio, dicta perferendis repudiandae inventore cumque animi culpa nam. Distinctio?",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Anant Sharma",
    course: "Computer Science",
    college: "Amity, Delhi",
    rating: 4.5,
    expertise: "Maths",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero, assumenda voluptatem quasi quidem cupiditate maiores quia aperiam velit reprehenderit laudantium hic ex facilis ipsum beatae nobis necessitatibus. Exercitationem amet voluptatem dolorum dolores deleniti quidem recusandae iure provident sint accusantium odio, dicta perferendis repudiandae inventore cumque animi culpa nam. Distinctio?",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Anant Sharma",
    course: "Computer Science",
    college: "Amity, Delhi",
    rating: 4.5,
    expertise: "Maths",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero, assumenda voluptatem quasi quidem cupiditate maiores quia aperiam velit reprehenderit laudantium hic ex facilis ipsum beatae nobis necessitatibus. Exercitationem amet voluptatem dolorum dolores deleniti quidem recusandae iure provident sint accusantium odio, dicta perferendis repudiandae inventore cumque animi culpa nam. Distinctio?",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Anant Sharma",
    course: "Computer Science",
    college: "Amity, Delhi",
    rating: 4.5,
    expertise: "Maths",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero, assumenda voluptatem quasi quidem cupiditate maiores quia aperiam velit reprehenderit laudantium hic ex facilis ipsum beatae nobis necessitatibus. Exercitationem amet voluptatem dolorum dolores deleniti quidem recusandae iure provident sint accusantium odio, dicta perferendis repudiandae inventore cumque animi culpa nam. Distinctio?",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Anant Sharma",
    course: "Computer Science",
    college: "Amity, Delhi",
    rating: 4.5,
    expertise: "Maths",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero, assumenda voluptatem quasi quidem cupiditate maiores quia aperiam velit reprehenderit laudantium hic ex facilis ipsum beatae nobis necessitatibus. Exercitationem amet voluptatem dolorum dolores deleniti quidem recusandae iure provident sint accusantium odio, dicta perferendis repudiandae inventore cumque animi culpa nam. Distinctio?",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  // Add more students...
];

function MFirstPage() {
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
    const [button, setButton] = useState(<span className='font-bold text-2xl'>Get Personalized Mentor<i class="ri-arrow-right-line ml-2 font-bold"></i></span>)

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
        const container = containerRef.current
        if (!container) return;
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } 
        else {
          container.scrollBy({ left: 300, behavior: "smooth" });
        }
      }, 3000);
    };
    
    const stopAutoScroll = () => {
      clearInterval(intervalRef.current);
    };

  return (
    <div className='w-full h-fit bg-white/90 py-5 relative'>
        <div className='px-15 py-5 flex justify-between items-center'>
            <h1 className='font-bold text-5xl'>Connect with our <br />Top Senior Mentors</h1>
            <div className='font-bold space-x-3 text-xl' onClick={()=>setOpen(prev=>!prev)}>
                <button className='font-bold cursor-pointer'>Apply Filters</button>
                <i className="ri-equalizer-line text-xl font-bold cursor-pointer"></i>
            </div>
        </div>
        {(open) &&
            <div className="w-100 overflow-hidden h-full z-[100] absolute right-0 top-0 bg-white border-l-15 border-[#5BE38D]">
                <div className="flex justify-center mt-5 text-2xl font-bold gap-3 items-center">
                    <i class="ri-arrow-left-s-line px-3 py-2 bg-gray-200 cursor-pointer" onClick={()=>setOpen(false)}></i>
                    <h1>Apply Filters</h1>
                </div>
                <div className="py-5">
                    <MultiSelect
                    data={['5 Rating', 'Top Central Universities/Colleges', 'B.Tech', 'NEET']}
                    defaultValue={['5 Rating', 'Top Central Universities/Colleges', 'B.Tech', 'NEET']}
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
                </div>
                <div className="py-10 px-10 bg-green-50 h-fit text-black font-sans">
                    <h2 className="text-xl font-bold mb-2">Exam Expertise</h2>
                    <div className="mb-4 space-y-1 px-10">
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
                    <h2 className="text-xl font-bold mb-2 mt-6">Course</h2>
                    <div className="space-y-1 px-10">
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

                <div className="flex justify-center gap-3 absolute bottom-5 w-full px-5 font-semibold">
                    <button className="px-4 py-2 border-2 rounded-sm w-30">Remove all</button>
                    <button className="px-4 py-2 bg-[#5BE38D] rounded-sm w-30">Save</button>
                </div>
            </div>
        }
        <div className="relative w-full overflow-hidden">
            <div className="flex space-x-6 scroll-hide overflow-x-scroll scroll-smooth px-4 py-8" ref={containerRef} onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll}>
                {students.map((student, index) => (
                <div key={index} className="relative flex-shrink-0 w-80 h-100 bg-white shadow-md rounded-xl cursor-pointer hover:shadow-xl transition" onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)}>
                    <img src={student.img} alt={student.name} className="w-full h-full object-cover rounded-xl mb-4"/>
                    <div className="absolute bottom-0 bg-white w-full h-25 flex rounded-xl flex-col items-center justify-center">
                    <h3 className="text-lg font-semibold">{student.name}</h3>
                    <p className="text-sm text-gray-500">{student.course} • {student.college}</p>
                    <p className="text-sm text-gray-500"><strong>Expertise:</strong>{student.expertise}</p>
                    </div>
                    {hoveredCard === index && (
                    <div className="absolute bottom-0 w-80 h-75 p-4 bg-white shadow-lg rounded-xl z-50">
                        <h3 className="text-lg font-semibold">{student.name}</h3>
                        <p className="text-sm text-gray-500">{student.course} • {student.college}</p>
                        <p className="text-sm"><strong>Expertise:</strong> {student.expertise}</p>
                        <p className="text-xs mt-2 text-gray-600">{student.description}</p>
                        <button className="w-full my-2 py-2 rounded-sm font-bold bg-[#43f490cf] cursor-pointer">View</button>
                    </div>
                    )}
                </div>
                ))}
            </div>
        </div>

        <div className="px-15 flex justify-between gap-6">
            <Link to='/mentor/home' className="bg-white px-3 py-2 w-[50%] rounded-sm cursor-pointer flex justify-center items-center"><button><span className="font-bold" >View All</span><i class="ri-arrow-right-line"></i></button></Link>
            
            <MDialog button={button}/>
        </div>
    </div>
  )
}

export default MFirstPage