import React from 'react'

function AppreciationWall() {
  return (
    <div className='w-full h-screen bg-[#FFE7B2] flex items-center p-3 relative justify-between gap-5'>
          <img src="/backgroung.png" alt="" className='absolute top-0 left-0' />
        <div className='w-[40%] text-center'>
            <p className='text-6xl font-bold'>Appreciation <br />Wall<i className="ri-heart-line text-[#06FA6F] font-medium"></i></p>
        </div>
        <div className='flex-1 h-screen flex justify-center items-center'>
          <div className='w-120 h-120 rounded-full bg-[#FFAE00] relative flex flex-col justify-center items-center overflow-hidden'>
            <img className='w-30 h-30 rounded-full mt-5' src="https://s3-alpha-sig.figma.com/img/7bc1/4501/4b1abf793d9813be4c68e7b1f8e05f78?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m1iA48awvKTmvTMREJsHE6EUP-EebImewg5H-tFwKsiWuN6tr3UZPzbt8TUjbMwdi9pe2c3AWWFz0-em9zVLPGCBktW-iQgbJXHjQAQXifX-bhu9Xug4Ji-ctXxW35mW0IU3HFyGl56CRXkXTYtJVck-PIR6x6VurWXNdWmMIZj3leTsMLs44rtPUJZFIpmh3CwrzkbjDuGJw4-ghYOUYEKezv4xsaGaA3FIdppnpLs7YND-XDg4YtxVvD8rKHljXnPavfMLpOag2xkZ5ZoGYw9hBHkRW~QUtWKsPRQKaZAK-R8iL10OASOQq8dsgJiBhVBEqwJz65UXaWTmdv3r6g__"/>
            <p className='text-center'>I was overwhelmed with the college application process <br /> and unsure of where to start and this is when I stumbled <br /> upon Know your colleges! They connected me to a mentor <br /> who gave me personalised support, helped me identify my strengths and craft a compelling narrative for my applications. Thanks to Know your colleges I applied to all my dream <br />universities with personalised guidance from students at that university and put my best foot forward!</p>
            <h1 className='mt-10'>Harshita Gupta</h1>
            <p>M.Tech | IITM Gwalior</p>
          </div>
        </div>
    </div>
  )
}

export default AppreciationWall