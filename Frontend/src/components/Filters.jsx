import React, { useState } from 'react';
import { MultiSelect } from '@mantine/core';

function Filters() {
  const [showFilters, setShowFilters] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [institution, setInstitution] = useState(false)

  return (
    <div className='w-full bg-black/10 text-black'>

      {/* Header Row */}
      <div className='w-full flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 px-20 gap-4'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold whitespace-nowrap'>Find Mentors-</h1>
        <button className='text-lg sm:text-xl flex gap-2 sm:gap-3 items-center px-4 py-2 rounded-full bg-[#1bb05ccf] cursor-pointer hover:bg-green-400 w-80 justify-center font-extrabold'>VIEW ALL
          <i className="ri-graduation-cap-line text-2xl sm:text-3xl"></i>
        </button>
      </div>

      {/* Filter Bar */}
      <div className='w-full bg-[#70B2FF] px-4 sm:px-20 py-4'>

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
            <div className='flex items-center gap-2 text-lg sm:text-xl font-bold '>
              <span className=''>Filters</span>
              <i className="ri-filter-3-fill font-medium"></i>
            </div>
            <div className="relative w-fit flex">
                <button onClick={()=>setShowSelect(prev=>!prev)} className={`text-base sm:text-lg flex items-center rounded-full gap-2 font-semibold border px-4 py-1 cursor-pointer overflow-hidden transition-all duration-200 ${showSelect && "w-fit"}`}>Courses
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

            <button onClick={()=>setInstitution(prev=>!prev)} className={`text-base sm:text-lg flex items-center rounded-full gap-2 font-semibold border px-4 py-1 cursor-pointer overflow-hidden transition-all duration-200 ${institution && "w-fit"}`}>
              Institution Types
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
            <button className='text-base sm:text-lg bg-white flex items-center rounded-full gap-2 font-semibold border px-4 py-2 w-full sm:w-auto whitespace-nowrap'>
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
