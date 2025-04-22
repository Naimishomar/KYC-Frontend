import React, { useState } from 'react';

const blogs = [
  {
    title: 'Career choice that best suits you.',
    desc: 'B Tech via JEE (Mains), MBA, MCA, MCA Lateral via CUET PG. Sem penatibus et quam diam ante proin ullamcorpe',
    time: '20min',
    date: 'January 20, 2025',
    image: '/insta.png', // replace with actual path
  },
  {
    title: 'Career choice that best suits you.',
    desc: 'B Tech via JEE (Mains), MBA, MCA, MCA Lateral via CUET PG. Sem penatibus et quam diam ante proin ullamcorpe',
    time: '20min',
    date: 'January 20, 2025',
    image: '/insta.png', // replace with actual path
  },
  {
    title: 'Career choice that best suits you.',
    desc: 'B Tech via JEE (Mains), MBA, MCA, MCA Lateral via CUET PG. Sem penatibus et quam diam ante proin ullamcorpe',
    time: '20min',
    date: 'January 20, 2025',
    image: '/insta.png', // replace with actual path
  },
  {
    title: 'Career choice that best suits you.',
    desc: 'B Tech via JEE (Mains), MBA, MCA, MCA Lateral via CUET PG. Sem penatibus et quam diam ante proin ullamcorpe',
    time: '20min',
    date: 'January 20, 2025',
    image: '/insta.png', // replace with actual path
  },
  {
    title: 'Career choice that best suits you.',
    desc: 'B Tech via JEE (Mains), MBA, MCA, MCA Lateral via CUET PG. Sem penatibus et quam diam ante proin ullamcorpe',
    time: '20min',
    date: 'January 20, 2025',
    image: '/insta.png', // replace with actual path
  },
  {
    title: 'Career choice that best suits you.',
    desc: 'B Tech via JEE (Mains), MBA, MCA, MCA Lateral via CUET PG. Sem penatibus et quam diam ante proin ullamcorpe',
    time: '20min',
    date: 'January 20, 2025',
    image: '/insta.png', // replace with actual path
  },
  {
    title: 'Career choice that best suits you.',
    desc: 'B Tech via JEE (Mains), MBA, MCA, MCA Lateral via CUET PG. Sem penatibus et quam diam ante proin ullamcorpe',
    time: '20min',
    date: 'January 20, 2025',
    image: '/insta.png', // replace with actual path
  },
  // Add more blog objects if needed
];

const podcasts = [
  {
    title: 'Understanding Career Paths in Tech',
    desc: 'Explore different roles in tech including frontend, backend, data science, and more.',
    time: '35min',
    date: 'January 25, 2025',
    image: '/insta.png', // replace with actual path
  },
  {
    title: 'Understanding Career Paths in Tech',
    desc: 'Explore different roles in tech including frontend, backend, data science, and more.',
    time: '35min',
    date: 'January 25, 2025',
    image: '/insta.png', // replace with actual path
  },
  {
    title: 'Understanding Career Paths in Tech',
    desc: 'Explore different roles in tech including frontend, backend, data science, and more.',
    time: '35min',
    date: 'January 25, 2025',
    image: '/insta.png', // replace with actual path
  },
  {
    title: 'Understanding Career Paths in Tech',
    desc: 'Explore different roles in tech including frontend, backend, data science, and more.',
    time: '35min',
    date: 'January 25, 2025',
    image: '/insta.png', // replace with actual path
  },
  {
    title: 'Understanding Career Paths in Tech',
    desc: 'Explore different roles in tech including frontend, backend, data science, and more.',
    time: '35min',
    date: 'January 25, 2025',
    image: '/insta.png', // replace with actual path
  },

];


const Card = ({ item }) => (
    <div className="w-96 h-90 bg-white rounded-2xl shadow-md p-4 text-gray-800 shrink-0 relative cursor-pointer">
      <img src={item.image} alt="content" className="rounded-xl w-full h-55 object-cover" />
      <div className='absolute bottom-0 mb-4'>
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-sm mt-1">{item.desc}</p>
        <div className="flex gap-2 text-xs mt-2">
            <span className="bg-gray-200 rounded-full px-2 py-1">{item.time}</span>
            <span className="bg-gray-200 rounded-full px-2 py-1">{item.date}</span>
        </div>
      </div>
    </div>
  );
  
  const LatestUpdates = () => {
    const [activeTab, setActiveTab] = useState('blogs');
  
    return (
      <div className="bg-blue-400 min-h-screen px-8 py-12 text-black">
        <h2 className="text-4xl font-bold mb-6">LATEST UPDATES</h2>
  
        <div className="flex gap-6 border-b-2 border-black mb-6">
          <button
            className={`pb-2 font-semibold cursor-pointer ${activeTab === 'blogs' ? 'border-b-4 border-black' : ''}`}
            onClick={() => setActiveTab('blogs')}
          >
            BLOGS
          </button>
          <button
            className={`pb-2 font-semibold cursor-pointer ${activeTab === 'podcasts' ? 'border-b-4 border-black' : ''}`}
            onClick={() => setActiveTab('podcasts')}
          >
            PODCASTS
          </button>
        </div>
  
        <div className="flex gap-6 w-full overflow-x-auto scroll-hide">
          {(activeTab === 'blogs' ? blogs : podcasts).map((item, index) => (
            <Card key={index} item={item} />
          ))}

        </div>
      </div>
    );
  };
  
  export default LatestUpdates;
