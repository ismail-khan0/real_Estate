import React from "react";
import pic2 from "../Img/image1.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex flex-col md:flex-col md:flex h-[100vh] bg-[#F4F9FF] lg:flex-row">
      <div className="flex-1 flex justify-center items-center ml-8 lg:ml-0 ">
        <div className="flex   flex-col ">
          <div className="font-inter font-bold lg:text-5xl  text-2xl flex flex-col ">
            <span>Discover A Place</span>
            <span>You'll Love to Live</span>
          </div>
          <p className="my-4 md:my-0">
            Homie is a real estate soluation that gives you the local <br />
            scoop about homes. Search confidently with your
            <br /> trusted source of homes for sale or rent.
          </p>
            <Link
                        to="/footer" className="bg-[#0061E0] text-white md:mt-4 mt-0 px-4 py-2 rounded-md  w-40">
            
            Make an Enquiry
          </Link>
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center">
        <div className="m-0 absolute inset-y-0 start-[40%] flex items-end">
          <div className="w-44 h-32 bg-white flex flex-col items-center">
            <p>Buy Your Dream Home</p>
            <span className="font-bold text-xl ">80+</span>
            <p>Home Available</p>
            <button className="bg-[#0061E0] mt-2 px-1 text-white  py-1 rounded-md">
              View Details
            </button>
          </div>
        </div>
        <img className="lg:h-[80%] lg:w-[80%] w-[70%] h-[70%] md:w-[50%] md:h-[50%]" src={pic2} />
      </div>
    </div>
  );
}

export default Home;
