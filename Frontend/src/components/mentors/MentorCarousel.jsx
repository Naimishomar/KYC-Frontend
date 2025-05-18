import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const mentors = [
  {
    name: "Karan Deb",
    role: "Computer Science",
    location: "Amity, Delhi",
    expertise: "NEET",
    image: "/mentorPerson.png",
  },
  {
    name: "Karan Deb",
    role: "Computer Science",
    location: "Amity, Delhi",
    expertise: "NEET",
    image: "/mentorPerson.png",
  },
  {
    name: "Karan Deb",
    role: "Computer Science",
    location: "Amity, Delhi",
    expertise: "NEET",
    image: "/mentorPerson.png",
  },
  {
    name: "Karan Deb",
    role: "Computer Science",
    location: "Amity, Delhi",
    expertise: "NEET",
    image: "/mentorPerson.png",
  },
  {
    name: "Karan Deb",
    role: "Computer Science",
    location: "Amity, Delhi",
    expertise: "NEET",
    image: "/mentorPerson.png",
  },
  {
    name: "Karan Deb",
    role: "Computer Science",
    location: "Amity, Delhi",
    expertise: "NEET",
    image: "/mentorPerson.png",
  },
  {
    name: "Karan Deb",
    role: "Computer Science",
    location: "Amity, Delhi",
    expertise: "NEET",
    image: "/mentorPerson.png",
  },
  {
    name: "Karan Deb",
    role: "Computer Science",
    location: "Amity, Delhi",
    expertise: "NEET",
    image: "/mentorPerson.png",
  },
  // Add more mentor objects...
];

const MentorCard = ({ mentor, isActive }) => (
  <motion.div
    className={`bg-white rounded-md shadow-md transition-all duration-500 overflow-hidden ${
      isActive ? "scale-110 w-65 h-95 z-10" : "scale-95 w-65 h-95 opacity-80"
    }`}
  >
    <div className='w-full h-95 group relative rounded-md overflow-hidden'>
      <img src={mentor.image} className='w-full h-full object-cover' alt="mentor" />
      <div className='bg-white w-full absolute bottom-0 h-30 p-5 transition-all duration-500 group-hover:h-full group-hover:bg-white/80 group-hover:pt-10'>
        <div className='flex justify-between'>
          <h1 className='text-xl font-extrabold'>{mentor.name}</h1>
        </div>
        <p className='text-sm'>{mentor.role} · {mentor.location}</p>
        <h1 className='mt-2'><strong>Expertise:</strong> {mentor.expertise}</h1>
        <p className='text-sm mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime hic unde ipsum?
        </p>
        <div className='flex justify-between mt-3'>
          <p className='flex items-center text-sm'><strong>Rating:</strong><img src="/mentorStar.png" alt="" className='w-18 h-4 ml-1' /></p>
          <button className='px-4 py-1 bg-green-400 rounded-md font-bold text-sm cursor-pointer'>View</button>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function MentorCarousel() {
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % mentors.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getSlideStyle = () => {
    const cardWidth = 270;
    const gap = 24;
    const offset = (cardWidth + gap) * centerIndex;
    const containerCenterOffset = window.innerWidth / 1.1 - cardWidth / 2;

    return {
      transform: `translateX(${containerCenterOffset - offset}px)`,
      transition: "transform 0.5s ease-in-out",
    };
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-center py-10">
        <div className="flex gap-6" style={getSlideStyle()}>
          {mentors.map((mentor, idx) => (
            <MentorCard key={idx} mentor={mentor} isActive={idx === centerIndex} />
          ))}
        </div>
      </div>
      
    </div>
  );
}