import React from "react";
import pic3 from "../Img/pics3.png";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
function About() {
  return (
    <div className="lg:flex lg:flex-row flex-col   ">
      <div className="left flex-1 flex justify-center content-center items-center">
        <div className="lg:w-[400px] lg:h-[600px] w-full h-full  flex justify-center content-center items-center">
          <img src={pic3} alt="no image show" className="h-[400px] w-[350px]" />
        </div>
      </div>

      <div className="right w-full h-[50vh] lg:h-auto lg:w-1/2 content-center ml-4 flex-col space-y-2">
        <p className=" mt-4 lg:mt-0">About Us</p>
        <div className="font-bold text-3xl flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:items-center">
          <span>We're on a Mission to Change View of RealEstate Field.</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 ">
          <div className="space-y-2">
            <div className="text-[#0061E0]">
              {" "}
              <ApartmentIcon fontSize="large" />
            </div>
            <h3 className="font-bold">Modern Villa</h3>
            <p className="text-sm">
              When unknown printer took galley of type and scrambled.
            </p>
            <button className="bg-[#0061E0] text-white px-4 py-2 rounded-md  ">
              Learn More
            </button>
          </div>
          <div className="space-y-2 ">
            <div className="text-[#0061E0]">
              <CurrencyExchangeIcon fontSize="large" />
            </div>
            <h3 className="font-bold">Secure Payment</h3>
            <p className="text-sm">
              When unknown printer took galley of type and scrambled.
            </p>
            <button className="bg-[#0061E0] text-white px-4 py-2 rounded-md  ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
