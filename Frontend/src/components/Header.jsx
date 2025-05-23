import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const words = ['courses', 'colleges', 'seniors'];
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

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
    <header className='relative top-0 left-0 w-full z-[10000]'>

      {/* Top Header */}
      <div className='w-full bg-[#2E2E2E] px-4 sm:px-25 py-4 lg:py-3 flex items-center justify-between text-white'>
        <div className='flex items-center gap-4 sm:gap-6'>
          <div className='flex items-center cursor-pointer' onClick={() => navigate("/")}>
            <img className='w-5' src="https://www.knowyourcolleges.com/static/media/logo.84255c87a633c115a0b1.png" alt="logo" />
            <span className='text-[1.35rem] font-bold ml-1'>KYC</span>
          </div>

          {/* Desktop Search */}
          <div className='hidden md:flex border border-gray-400 rounded-full px-2 items-center w-55 lg:w-72 bg-[#3F3F3F]'>
            <input type="text" placeholder={`Search ${text}`} className="px-2 py-1 text-white focus:outline-none w-full bg-transparent" />
            <i className="ri-search-line text-xl text-white p-1 rounded-full"></i>
          </div>
        </div>

        {/* Mobile Search Toggle */}
        <div className="md:hidden flex items-center justify-center px-2 py-1 rounded-full bg-[#3F3F3F]">
          {showSearch && (
            <div className="px-3 flex items-center bg-[#3F3F3F]">
              <input
                type="text"
                placeholder={`Search ${text}`}
                className="bg-transparent text-white outline-none w-full text-sm border-none"
              />
            </div>
          )}
          <button onClick={() => setShowSearch(prev => !prev)} className='rounded-full bg-[#3F3F3F]'>
            <i className="ri-search-line text-white" />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className='hidden lg:flex gap-5 font-semibold'>
          <button className='border border-gray-400 px-10 rounded-full bg-[#3F3F3F] hover:bg-white/5 cursor-pointer'>Home</button>
          <button className='border border-gray-400 px-14 py-1 rounded-full bg-[#3F3F3F] hover:bg-white/5 cursor-pointer'>Program</button>
          <Link to='/mentor'>
            <button className='border px-6 py-1 rounded-full bg-[#06FA6F] text-black flex gap-2 items-center cursor-pointer'>Become Mentor<i className="ri-graduation-cap-line text-lg"></i></button>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button className='lg:hidden text-2xl' onClick={() => setMenuOpen(true)}>
          <i className="ri-menu-line text-2xl"></i>
        </button>
      </div>

      {/* Mobile Slide-in Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[80vw] bg-[#2E2E2E] text-white z-[100] transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='p-4 border-b border-gray-500 flex justify-end'>
          <button onClick={() => setMenuOpen(false)}>
            <i className="ri-close-line text-4xl"></i>
          </button>
        </div>
        <h1 className='pt-5 pl-5 text-xl font-semibold'>TOOLS</h1>
        <div className='py-3 px-10 flex flex-col items-start gap-2 font-medium'>
          <button className='py-2 w-full text-start'><i class="ri-coupon-3-line"></i>College Events</button>
          <button className='py-2 w-full text-start'><i class="ri-funds-line"></i>College Compare</button>
          <button className='py-2 w-full text-start'><i class="ri-signpost-line"></i>College Predictors</button>
          <hr className='border-gray-500 border w-full my-4' />
          <button className='text-black bg-[#06FA6F] w-full text-start flex items-center gap-1 px-4 py-2 rounded-full'>
            <i className="ri-account-circle-2-line text-xl"></i>
            <span className='text-md font-semibold'>Login</span>
          </button>
          <Link to='/mentor' className='text-black bg-[#06FA6F] w-full text-start flex items-center gap-1 px-4 py-2 rounded-full'><button>
            <i className="ri-account-circle-2-line text-xl"></i>
            <span className='text-md font-semibold'>Become A Mentor</span>
          </button></Link>
        </div>
      </div>

      {/* Submenu for Desktop */}
      <div className='hidden lg:flex items-center justify-between px-4 sm:px-25 py-1 w-full bg-[#2E2E2E]'>
        <div className='flex gap-4 py-2'>
          <button className='text-white px-4 py-1 rounded-full bg-[#3F3F3F] hover:bg-white/5 border border-gray-400 cursor-pointer'>College Events</button>
          <button className='text-white px-4 py-1 rounded-full bg-[#3F3F3F] hover:bg-white/5 border border-gray-400 cursor-pointer'>College Compare</button>
          <button className='text-white px-4 py-1 rounded-full bg-[#3F3F3F] hover:bg-white/5 border border-gray-400 cursor-pointer'>College Predictors</button>
        </div>
        <button className='text-black px-5 py-0.5 rounded-full flex items-center justify-center gap-1 bg-[#06FA6F] cursor-pointer hover:bg-green-500 text-sm font-bold'>
          <span className='text-sm font-semibold'>Login</span>
          <i className="ri-account-circle-2-line text-2xl"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
