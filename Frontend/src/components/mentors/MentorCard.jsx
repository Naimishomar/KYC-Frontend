import React from 'react'

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
  ];

function MentorCard() {
  return (
    <div className='min-h-screen bg-[rgb(233,233,233)] flex flex-wrap w-full justify-center px-15 py-3 space-x-4'>
      {mentors.map((item)=>(
      <div className='w-65 h-95 group relative rounded-md overflow-hidden m-3'>
          <img src={item.image} className='w-full h-full object-cover' />
          <div className='bg-white w-full absolute bottom-0 h-35 p-5 transition-all duration-500 group-hover:h-full group-hover:bg-white/80 group-hover:pt-10'>
            <div className='flex justify-between'>
              <h1 className='text-3xl font-extrabold'>{item.name}</h1> 
              {/* <img src="/mentorStar.png" alt="" />  */}
            </div>
            <p className='text-sm mt-1'>{item.role} . {item.location}</p>
            <h1 className='mt-3'><strong>Expertise:</strong>{item.expertise}</h1>
            <p className='text-sm mt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime hic unde ipsum? Aliquid voluptatibus consectetur excepturi voluptates natus quas magni aut enim vitae. Ullam labore similique, deleniti laudantium atque, perferendis earum molestiae, qui voluptatibus.</p>
            <div className='flex justify-between'>
              <p className='flex justify-center items-center text-sm'><strong>Rating:</strong><img src="/mentorStar.png" alt="" className='w-18 h-4' /></p>
              <button className='px-7 py-1 bg-green-400 rounded-md font-bold text-xl cursor-pointer'>View</button>
            </div>
          </div>
      </div>
      ))}
    </div>
  )
}

export default MentorCard