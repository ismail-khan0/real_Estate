import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CottageIcon from "@mui/icons-material/Cottage";
import HouseIcon from "@mui/icons-material/House";
import Servicecard from "../Components/Servicecard";

function Service() {
  return (
    <div className="flex flex-col items-center px-4 py-8 lg:px-8 lg:py-12">
      <div className="text-center mb-8">
        <p className="text-[#0061E0] mt-4 lg:text-xl text-sm">Our Service</p>
        <div className="font-bold lg:text-4xl text-2xl space-x-2 mb-4">
          <span>Our Main Focus</span>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 lg:gap-8  ">
        <div className="lg:w-80 lg:h-80 w-full max-w-xs h-auto shadow-lg flex flex-col items-center bg-white p-4">
          <div className="w-16 h-16 rounded-full shadow-lg text-[#0061E0] bg-white flex justify-center items-center mb-4">
            <HomeIcon fontSize="large" />
          </div>
          <h1 className="my-4 font-bold text-2xl text-[#0061E0]">Boy Home</h1>
          <p className="text-gray-500 text-center">
            Over 1 million+ homes for sale available <br /> on the website, we
            can match you with a <br />
            house you will want to call home.
          </p>
          <h5 className="mt-8 text-[#0061E0]">Find A Home</h5>
        </div>

        <div className="lg:w-80 lg:h-80 w-full max-w-xs h-auto shadow-lg flex flex-col items-center bg-white p-4">
          <div className="w-16 h-16 rounded-full shadow-lg text-[#0061E0] bg-white flex justify-center items-center mb-4">
            <CottageIcon fontSize="large" />
          </div>
          <h1 className="my-4 font-bold text-2xl text-[#0061E0]">Boy Home</h1>
          <p className="text-gray-500 text-center">
            Over 1 million+ homes for sale available <br /> on the website, we
            can match you with a <br />
            house you will want to call home.
          </p>
          <h5 className="mt-8 text-[#0061E0]">Find A Home</h5>
        </div>

        <div className="lg:w-80 lg:h-80 w-full max-w-xs h-auto shadow-lg flex flex-col items-center bg-white p-4">
          <div className="w-16 h-16 rounded-full shadow-lg text-[#0061E0] bg-white flex justify-center items-center mb-4">
            <HouseIcon fontSize="large" />
          </div>
          <h1 className="my-4 font-bold text-2xl text-[#0061E0]">Boy Home</h1>
          <p className="text-gray-500 text-center">
            Over 1 million+ homes for sale available <br /> on the website, we
            can match you with a <br />
            house you will want to call home.
          </p>
          <h5 className="mt-8 text-[#0061E0]">Find A Home</h5>
        </div>
      </div>
      
    </div>
  );
}

export default Service;
