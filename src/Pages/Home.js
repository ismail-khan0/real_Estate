import React from "react";
import pic2 from "../Img/image1.png";
function Home() {
  return (
    <div className="Relative flex flex-col h-[100vh] bg-[#F4F9FF] lg:flex-row">
      <div className="flex-1 flex justify-center items-center ml-8 lg:ml-0 ">
        <div className="flex   flex-col ">
          <div className="font-inter font-bold lg:text-5xl  text-2xl flex flex-col ">
            <span>Discover A Place</span>
            <span>You'll Love to Live</span>
          </div>
          <p className="my-4">
            Homie is a real estate soluation that gives you the local <br />
            scoop about homes. Search confidently with your
            <br /> trusted source of homes for sale or rent.
          </p>
          <button className="bg-[#0061E0] text-white px-4 py-2 rounded-md  w-40">
            Make an Enquiry
          </button>
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
        <img className="h-[80%] w-[80%]" src={pic2} />
      </div>
    </div>
  );
}

export default Home;
