import React, { useState } from 'react';

function Filters() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className='w-full bg-black/10 text-black'>

      {/* Header Row */}
      <div className='w-full flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 gap-4'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold whitespace-nowrap'>Find Mentors-</h1>
        <button className='text-lg sm:text-xl font-bold flex gap-2 sm:gap-3 items-center px-4 py-2 rounded-full bg-[#43f490cf] cursor-pointer hover:bg-green-400 w-60 justify-center'>
          VIEW ALL
          <i className="ri-graduation-cap-line text-2xl sm:text-3xl"></i>
        </button>
      </div>

      {/* Filter Bar */}
      <div className='w-full bg-[#70B2FF] px-4 sm:px-6 py-4'>

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
          <div className='flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center'>
            <div className='flex items-center gap-2 text-lg sm:text-xl font-bold'>
              <span className='lg:hidden'>Filters</span>
              <i className="ri-filter-3-fill font-medium"></i>
            </div>

            <button className='text-base sm:text-lg flex items-center rounded-full gap-2 font-semibold border px-4 py-2 cursor-pointer'>
              Courses
              <i className="ri-book-shelf-line text-2xl font-medium"></i>
              <i className="ri-arrow-drop-right-line text-3xl text-white font-medium"></i>
            </button>

            <button className='text-base sm:text-lg flex items-center rounded-full gap-2 font-semibold border px-4 py-2 cursor-pointer'>
              Institution Types
              <i className="ri-bank-line text-2xl font-medium"></i>
              <i className="ri-arrow-drop-right-line text-3xl text-white font-medium"></i>
            </button>
          </div>

          {/* Advanced Filters */}
          <div className='w-full sm:w-auto mt-2 lg:mt-0'>
            <button className='text-base sm:text-lg bg-white flex items-center rounded-full gap-2 font-semibold border px-4 py-2 w-full sm:w-auto'>
              Advanced Filters
              <i className="ri-equalizer-line text-xl font-light"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
