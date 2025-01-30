import React from 'react'
import pic from "../Img/logo-white 1.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Newsletter from '../Components/Newsletter';

function Footer() {
  return (
   
    <div>
         <Newsletter/>
   
    <div className='flex lg:py-12 bg-black text-white flex-wrap flex-col lg:flex-row'>
        
      <div className='flex flex-1 flex-col justify-center items-center mb-4 lg:mb-0 '>
      <div className='w-80'>
      <div class="flex flex-shrink-0 items-center">
          <img class="h-12 w-auto" src={pic} alt="Your Company" />
        </div>
        <p className='text-sm my-4'>Lorem Ipsum is simply dummy text of the
and typesetting industry. Lorem Ipsum is
dummy text of the printing.</p>
<div className=' text-[#0061E0]'><FacebookIcon/> <InstagramIcon/> <TwitterIcon/> <LinkedInIcon/></div>
</div>
      </div>
      <div className='flex flex-1 mx-4 lg:mx-0'>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-2 lg:gap-x-12">

        <div className='font-bold text-lg'><h1>Quick links</h1></div>
        <div className='font-bold text-lg'><h1>Serviuce </h1></div>
        <div className='font-bold text-lg'> <h1> Contract</h1></div>
        <div className='text-sm'><p>Home</p></div>
        <div className='text-sm'><p>Wish List</p></div>
        <div className='text-sm flex'> <LocationOnIcon/> <p className='ml-2'>126, Pakistan</p></div>
        <div className='text-sm'><p>About Us</p></div>
        <div className='text-sm'><p>Login</p></div>
        <div className='text-sm flex'> <MobileScreenShareIcon/> <p className='ml-2'>+2745289394</p></div>
        <div className='text-sm'><p>Blog</p></div>
        <div className='text-sm'><p>Submite A request</p></div>
        <div className='text-sm flex'> <MailOutlineIcon/> <p className='ml-2'>Info@jjsdfkssk.com</p></div>
        <div className='text-sm'><p>Faqe</p></div>
        <div className='text-sm'><p>Apointment</p></div>
        <div className='text-sm'><p></p></div>
        <div className='text-sm'><p>Servuise </p></div>
        <div className='text-sm'><p>Promotion Offers</p></div>
        <div className='text-sm'><p></p></div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Footer
