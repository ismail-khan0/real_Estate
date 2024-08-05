import React from 'react';

function Card(props) {
  return (
    <div className='lg:w-60 lg:h-60 w-full max-w-xs h-auto flex flex-col items-center justify-center bg-white shadow-lg p-4 m-2'>
      <div className='w-16 h-16 rounded-full flex justify-center items-center text-[#0061E0] mb-4'>
        {props.angle}
      </div>
      <h1 className='my-2 font-bold text-xl text-[#0061E0] text-center'>
        {props.heading}
      </h1>
      <p className='text-gray-500 text-center'>
        {props.paragraph}
      </p>
    </div>
  );
}

export default Card;
