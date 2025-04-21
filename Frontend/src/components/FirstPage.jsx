import React,{useState, useEffect} from 'react'

function FirstPage() {
      const [changeText, setchangeText] = useState(0)
      const texts = [
        `Know The Truth <br/> Behind The <br/> Campus Walls`,
        `Ask A Senior! <br/> One Conversation Can <br/> Change Your Life.`,
        `Not Just Colleges, <br/> Real People, <br/> Real Stories.`,
      ];
    
      useEffect(() => {
        const interval = setInterval(() => {
          setchangeText(prev => (prev + 1) % texts.length);
        }, 1000);
        return () => clearInterval(interval); // cleanup on unmount
      }, []);

  return (
    <>
        <div className='h-screen w-full bg-[#06FA6F] relative'>
            <img src="/KYC2.png" alt="theme" className='absolute top-0 left-0 h-screen w-full'/>
            <div className='flex justify-between px-5 py-15 relative w-full h-screen gap-6'>
              <div className='w-[50%]'>
                <h1 className='text-8xl font-bold'>KNOW <br />YOUR <br />COLLEGES</h1>
              </div>
              <div className='w-[50%] flex justify-center text-center'>
                <p key={changeText} className='text-5xl font-bold motionDash' dangerouslySetInnerHTML={{ __html: texts[changeText]}}></p>
              </div>
            </div>
            <div className='w-full px-16 h-16 absolute bottom-0 mb-16 flex items-center gap-10'>
                <img src="https://www.knowyourcolleges.com/static/media/logo.84255c87a633c115a0b1.png" alt="logo" className='w-10 h-10'/>
                <div className='w-full h-2 rounded-2xl bg-black/50'></div>
                <button className='bg-black/50 text-white whitespace-nowrap px-6 py-2 rounded-4xl'>Get Started<i className="ri-arrow-right-up-fill"></i></button>
            </div>
        </div>
    </>
  )
}

export default FirstPage