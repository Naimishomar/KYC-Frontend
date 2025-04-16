import React, { useEffect, useRef, useState } from "react";

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

export default function AutoScrollCards() {
  const containerRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const intervalRef = useRef(null);

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
    <div className="relative w-full overflow-hidden">
      <div className="flex space-x-6 overflow-x-scroll scroll-smooth px-4 py-8" ref={containerRef} onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll}>
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
  );
}
