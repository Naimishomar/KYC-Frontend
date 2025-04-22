import React from 'react';

function AppreciationWall() {
  return (
    <div className='w-full min-h-screen bg-[#FFE7B2] flex flex-col lg:flex-row items-center p-4 gap-6 relative overflow-hidden'>

      {/* Background Image */}
      <img src="/backgroung.png" alt="" className='absolute top-0 left-0 w-full h-auto object-cover z-0' />

      {/* Left Title */}
      <div className='w-full lg:w-[40%] z-10 text-center'>
        <p className='text-5xl sm:text-5xl lg:text-6xl font-bold leading-tight'>
          Appreciation <br />Wall <i className="ri-heart-line text-[#06FA6F] font-medium"></i>
        </p>
      </div>

      {/* Testimonial Card */}
      <div className='w-full flex-1 flex justify-center items-center z-10'>
        <div className='w-[300px] sm:w-[380px] lg:w-[480px] p-4 rounded-full lg:rounded-full bg-[#FFAE00] relative flex flex-col justify-center items-center overflow-hidden text-center'>
          <img
            className='w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full mt-4 object-cover'
            src="https://s3-alpha-sig.figma.com/img/7bc1/4501/4b1abf793d9813be4c68e7b1f8e05f78?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m1iA48awvKTmvTMREJsHE6EUP-EebImewg5H-tFwKsiWuN6tr3UZPzbt8TUjbMwdi9pe2c3AWWFz0-em9zVLPGCBktW-iQgbJXHjQAQXifX-bhu9Xug4Ji-ctXxW35mW0IU3HFyGl56CRXkXTYtJVck-PIR6x6VurWXNdWmMIZj3leTsMLs44rtPUJZFIpmh3CwrzkbjDuGJw4-ghYOUYEKezv4xsaGaA3FIdppnpLs7YND-XDg4YtxVvD8rKHljXnPavfMLpOag2xkZ5ZoGYw9hBHkRW~QUtWKsPRQKaZAK-R8iL10OASOQq8dsgJiBhVBEqwJz65UXaWTmdv3r6g__"
            alt="testimonial"
          />
          <p className='text-sm sm:text-base px-4 py-4 font-medium'>
            I was overwhelmed with the college application process and unsure of where to start — that’s when I stumbled upon Know Your Colleges! They connected me to a mentor who gave me personalized support, helped me identify my strengths, and craft a compelling narrative. Thanks to them, I applied to all my dream universities with guidance from students already there.
          </p>
          <h1 className='mt-2 font-semibold text-lg'>Harshita Gupta</h1>
          <p className='text-sm mb-4'>M.Tech | IITM Gwalior</p>
        </div>
      </div>
    </div>
  );
}

export default AppreciationWall;
