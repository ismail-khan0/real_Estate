import React from 'react'
import Groups2Icon from '@mui/icons-material/Groups2';

function Agents() {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col lg:flex-row w-[66%] px-4 py-12 bg-[#E2EFFF] justify-center items-center'>
      <div className='flex flex-1 flex-col lg:flex-row justify-center items-center mb-4 lg:mb-0'>
        <div className='flex  bg-white justify-center items-center rounded-full w-12 h-12 mx-4'>
<div className='text-[#0061E0] '><Groups2Icon fontSize='large'/></div>
</div>
      <div className='flex flex-col'>
      <h1 className='text-lg font-bold'>Become An Agent</h1>
      <p>Agent hen an unknown printer took a galley scramble</p>
      </div>
      
      </div>
      <div className='flex flex-1 justify-end mr-2'>
      <button className="bg-[#0061E0] text-white px-4 h-12 py-2 rounded-md">
            Learn More
          </button>
      </div>
      </div>
    </div>
  )
}

export default Agents
