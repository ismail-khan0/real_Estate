import React from 'react'

function NewsLetter() {
  return (
    <div className='flex justify-center items-center p-8 bg-[#0061E0] flex-wrap '>
      <div className=' flex flex-col flex-1 justify-center items-center text-white mb-4 lg:mb-0'>
        <div>
      <span className='font-bold text-lg'>Jion Our Newsletter Know</span>
      <p className='text-sm'>Register Know for get updates on promotions</p>
      </div>
      </div>
      <div className='flex-1 flex'>
      <input className='p-2 w-72' type="email" placeholder='Enter Your Email to Subscrib' ></input>
      <button className='py-2 px-3 rounded-r-lg bg-black text-white'>Subscribe</button>
    </div>
    </div>
  )
}

export default NewsLetter
