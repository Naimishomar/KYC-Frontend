import React, { useState, useEffect } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const words = ['courses', 'colleges', 'seniors'];
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = 100;
    const pauseTime = 500;
    let timeout;

    if (isTyping) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setText(prev => prev + currentWord.charAt(charIndex));
          setCharIndex(prev => prev + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), pauseTime);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText(prev => prev.slice(0, -1));
          setCharIndex(prev => prev - 1);
        }, typingSpeed);
      } else {
        setWordIndex(prev => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, wordIndex, words]);

  return (
    <>
      {/* Top Header */}
      <div className='w-full bg-black/80 px-4 sm:px-20 py-4 flex items-center justify-between text-white'>
        <div className='flex items-center gap-4 sm:gap-6'>
          <div className='flex items-center'>
            <img className='w-8' src="https://www.knowyourcolleges.com/static/media/logo.84255c87a633c115a0b1.png" alt="logo" />
            <span className='text-2xl font-bold ml-2'>KYC</span>
          </div>

          {/* Search Input */}
          <div className='hidden md:flex border rounded-full px-2 items-center w-64 lg:w-72'>
            <input type="text" placeholder={`Search ${text}`} className="px-2 py-1 bg-transparent text-white focus:outline-none w-full"/>
            <i className="ri-search-line text-xl text-white p-1 rounded-full"></i>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className='hidden lg:flex gap-5'>
          <button className='border px-14 py-1 rounded-full bg-white/15 hover:bg-white/10'>Home</button>
          <button className='border px-14 py-1 rounded-full bg-white/15 hover:bg-white/10'>Program</button>
          <button className='border px-6 py-1 rounded-full bg-[#06FA6F] text-black flex gap-2 items-center'>
            Become Mentor
            <i className="ri-graduation-cap-line text-lg"></i>
          </button>
        </div>

        {/* Hamburger Icon */}
        <button
          className='lg:hidden text-2xl'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="ri-menu-line"></i>
        </button>
      </div>

      <hr className='border-[#06FA6F]' />

      {/* Submenu bar */}
      <div className='hidden lg:flex items-center justify-between px-4 sm:px-20 py-2 w-full bg-black/80'>
        <div className='flex gap-4 py-2'>
          <button className='text-white px-4 py-1 rounded-full bg-white/15 hover:bg-white/10 border'>College Events</button>
          <button className='text-white px-4 py-1 rounded-full bg-white/15 hover:bg-white/10 border'>College Compare</button>
          <button className='text-white px-4 py-1 rounded-full bg-white/15 hover:bg-white/10 border'>College Predictors</button>
        </div>
        <div> 
          <button className='text-black px-4 py-1 rounded-full flex items-center gap-2 bg-[#06FA6F]'>Login <i className="ri-user-2-fill"></i></button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-black/90 text-white px-6 py-4 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
        <div className='flex flex-col gap-4'>
          <button className='border px-4 py-2 rounded-full bg-white/15 hover:bg-white/10'>Home</button>
          <button className='border px-4 py-2 rounded-full bg-white/15 hover:bg-white/10'>Program</button>
          <button className='border px-4 py-2 rounded-full bg-[#06FA6F] text-black flex gap-2 items-center'>Become Mentor <i className="ri-graduation-cap-line"></i></button>

          <hr className='border-white my-2' />

          <button className='border px-4 py-2 rounded-full bg-white/15 hover:bg-white/10'>College Events</button>
          <button className='border px-4 py-2 rounded-full bg-white/15 hover:bg-white/10'>College Compare</button>
          <button className='border px-4 py-2 rounded-full bg-white/15 hover:bg-white/10'>College Predictors</button>

          <button className='text-black bg-[#06FA6F] px-4 py-2 rounded-full flex items-center justify-center gap-2 mt-2'>
            Login <i className="ri-user-2-fill"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
