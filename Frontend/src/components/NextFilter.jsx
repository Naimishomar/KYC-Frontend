import React from 'react'

function NextFilter() {
  return (
    <>
    <div className='w-full bg-black/10 text-black'>
        <div className='w-full flex justify-between p-6'>
            <h1 className='text-5xl font-semibold'>Find Colleges-</h1>
            <button className='text-xl font-bold flex gap-3 items-center w-90 justify-center rounded-4xl bg-[#43f490cf] cursor-pointer'>VIEW ALL<i className="ri-graduation-cap-line text-3xl"></i></button>
        </div>
        <div className='w-full h-20 bg-[#70B2FF] flex px-6 items-center justify-between'>
          <div className='flex gap-4 items-center'>
            <p className='text-xl font-bold flex items-center gap-2'>Filters<i className="ri-filter-3-fill font-medium"></i></p>
            <hr className='border-3 rounded-2xl bg-black rotate-90 w-14'/>
            <button className='text-xl flex items-center rounded-4xl gap-2 font-semibold border px-5 py-1 cursor-pointer'>Courses<i className="ri-book-shelf-line text-3xl font-medium"></i><i className="ri-arrow-drop-right-line text-4xl text-white font-medium"></i></button>
            <button className='text-xl flex items-center rounded-4xl gap-2 font-semibold border px-5 py-1 cursor-pointer'>Institution Types<i class="ri-bank-line text-3xl font-medium"></i><i className="ri-arrow-drop-right-line text-4xl text-white font-medium"></i></button>
          </div>
          <div>
            <button className='text-xl bg-white flex items-center rounded-4xl gap-2 font-semibold border px-5 py-1 cursor-pointer'>Advanced Filters<i class="ri-equalizer-line text-2xl font-light"></i></button>
          </div>
        </div>
    </div>
    </>
  )
}

export default NextFilter