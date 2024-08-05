import React from 'react'

function TestemonialCard(props) {
  return (
    <div className='flex flex-col w-72 mx-2 '>
        <div className='flex w-full h-60 lg:h-auto shadow-lg p-2 my-4 rounded-lg bg-white'>
        <p>{props.ts_paragraph}</p>
        </div>
        <div className='flex mx-2 items-center my-4'>
            <div className='w-12 h-12 shadow-lg justify-center items-center rounded-full mx-2'>
            <img src={props.ts_pics} alt='not found' />
        </div>
        <div >
        <h1 className='font-bold '>{props.ts_name}</h1>
        <p className='text-sm'>{props.cutomer}</p>
        </div>

    </div>
    </div>
  )
}

export default TestemonialCard
