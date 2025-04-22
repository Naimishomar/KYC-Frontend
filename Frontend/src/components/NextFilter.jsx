import React, { useState } from 'react';

function NextFilter() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className='w-full bg-black/10 text-black'>
      {/* Header */}
      <div className='w-full flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 gap-4'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold'>Find Colleges-</h1>
        <button className='text-lg sm:text-xl font-bold flex gap-2 sm:gap-3 items-center px-4 py-2 rounded-full bg-[#43f490cf] cursor-pointer hover:bg-green-400 w-full'>
          VIEW ALL
          <i className="ri-graduation-cap-line text-2xl sm:text-3xl"></i>
        </button>
      </div>

      {/* Filter Bar */}
      <div className='w-full bg-[#70B2FF] px-4 sm:px-6 py-4'>
        {/* Mobile Toggle Button */}
        <div className='sm:hidden flex justify-between items-center'>
          <p className='text-xl font-bold flex items-center gap-2'>
            Filters <i className="ri-filter-3-fill font-medium"></i>
          </p>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className='text-lg bg-white px-4 py-1 rounded-3xl flex items-center gap-2'
          >
            {showFilters ? 'Hide' : 'Show'} Options
            <i className="ri-arrow-drop-down-line text-2xl"></i>
          </button>
        </div>

        {/* Filters Section (Collapsible on mobile) */}
        <div className={`mt-4 sm:mt-0 ${showFilters ? 'block' : 'hidden'} sm:flex justify-between items-center flex-wrap sm:flex-nowrap gap-4`}>
          {/* Left Buttons */}
          <div className='flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4'>
            <button className='text-base sm:text-xl flex items-center gap-2 font-semibold border px-4 py-1 rounded-3xl'>
              Courses
              <i className="ri-book-shelf-line text-2xl font-medium"></i>
              <i className="ri-arrow-drop-right-line text-3xl text-white font-medium"></i>
            </button>

            <button className='text-base sm:text-xl flex items-center gap-2 font-semibold border px-4 py-1 rounded-3xl'>
              Institution Types
              <i className="ri-bank-line text-2xl font-medium"></i>
              <i className="ri-arrow-drop-right-line text-3xl text-white font-medium"></i>
            </button>
          </div>

          {/* Right Button */}
          <div className='w-full sm:w-auto'>
            <button className='text-base sm:text-xl bg-white flex items-center gap-2 font-semibold border px-4 py-1 rounded-3xl w-full sm:w-auto'>
              Advanced Filters
              <i className="ri-equalizer-line text-xl sm:text-2xl font-light"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextFilter;
