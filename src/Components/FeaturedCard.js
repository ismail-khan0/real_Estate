import React from 'react'
import Room1 from '../Img/Room1.png'
import GridViewIcon from '@mui/icons-material/GridView';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


function FeaturedCard(props) {
  return (
    <div className='m-0 flex flex-col w-80 shadow-lg '>
      <div className=''>
        <img src={props.rooms} alt=''/>
      </div>
      <div className='heading flex justify-center flex-col items-center'>
        <h2 className='font-bold'>1963 S Crescent Heights Blvd</h2>
        <p>Hills,CA 90210</p>
      </div>
      <div className='line h-1 bg-black my-2 border'></div>
      <div className='manu mx-2'>
        
      <div class="p-2">
    <div class="grid grid-cols-2 gap-4">
        <div class=" h-6 flex items-center">
            <div><GridViewIcon/></div>
            <p className='text-sm ml-1'>{props.feet} Square Feet</p>
        </div>
        <div class=" h-6 flex items-center">
            <div><DirectionsCarIcon/></div>
        <p className='text-sm ml-2'>{props.garage} Garages</p></div>
        <div class=" h-6 flex items-center ">
        <div><HotelIcon/></div>
        <p className='text-sm ml-2'>{props.badrooms} Bedrooms</p>
        </div>
        <div class=" h-6 flex items-center ">
        <div><BathtubIcon/></div>
        <p className='text-sm ml-2'>{props.bathroom} Bathrooms</p>
        </div>
    </div>
</div>
         </div>
         <div className=' h-1 w-full text-black border  bg-black my-2' ></div>
      <div className='manu2'>
      <div class=" p-4 ">
    <div class="grid grid-cols-2 gap-4">
        <div class=" h-6 flex  items-center ">
        <div><PersonIcon/></div>
        <p className='text-sm ml-3'>{props.name}</p>
        </div>
        <div class=" h-6 flex items-center">
        <div><AccessTimeIcon/></div>
        <p className='text-sm ml-3'>{props.day} day ago</p>
        </div>
        
    </div>
</div>
      </div>
      <button className='bg-[#0061E0] w-full h-8 text-white'>$ {props.dollar}</button>
    </div>
  )
}

export default FeaturedCard
