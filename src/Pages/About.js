import React from "react";
import pic3 from "../Img/pics3.png";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

function About() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row">
      <div className="flex-1 flex justify-center items-center">
        <div className="w-full md:w-[400px] md:h-[600px] h-full flex justify-center items-center">
          <img src={pic3} alt="no image show" className="h-[400px] w-[350px]" />
        </div>
      </div>

      <div className="flex-1 h-[50vh] md:h-auto lg:h-auto lg:w-1/2 content-center md:ml-4 ml-8 flex-col space-y-2">
        <p className="mt-4 md:mt-0">About Us</p>
        <div className="font-bold text-3xl flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 md:items-center">
          <span>We're on a Mission to Change View of RealEstate Field.</span>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="space-y-2">
            <div className="text-[#0061E0]">
              <ApartmentIcon fontSize="large" />
            </div>
            <h3 className="font-bold">Modern Villa</h3>
            <p className="text-sm">
              When unknown printer took galley of type and scrambled.
            </p>
            <button className="bg-[#0061E0] text-white px-4 py-2 rounded-md">
              Learn More
            </button>
          </div>
          <div className="space-y-2">
            <div className="text-[#0061E0]">
              <CurrencyExchangeIcon fontSize="large" />
            </div>
            <h3 className="font-bold">Secure Payment</h3>
            <p className="text-sm">
              When unknown printer took galley of type and scrambled.
            </p>
            <button className="bg-[#0061E0] text-white px-4 py-2 rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
