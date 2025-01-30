import React from "react";
import TestemonialCard from "../Components/TestemonialCard";
import ts_pics from '../Img/Ellipse 54.png'
import ts_pics2 from '../Img/Ellipse 55.png'
import ts_pics3 from '../Img/Avatar.png'
function Testemonial() {
  return (
    <div className=" flex-wrap  my-8 lg:my-0 mt-0 lg:mt-8 bg-[#E2EFFF]">
      <div className="flex-col flex justify-center items-center content-center">
        <p className=" text-[#0061E0] mt-4 lg:text-xl text-sm">Our Testemonial</p>
        <div className="font-bold lg:text-4xl text-2xl space-x-2 mb-4 flex flex-row">
          <span>What Our Costumer Says</span>
        </div>
      </div>
      <div className="flex overflow-x-scroll scrollbar-hide lg:overflow-hidden  py-4 lg:justify-center lg:items-center ">
        <TestemonialCard
          ts_name="Ismial"
          ts_pics={ts_pics}
          ts_paragraph="I could probably go into sales for you. I am completely blown away. After using SEO my business skyrocketed! The very best."
          cutomer="cutomer"
        />
        <TestemonialCard
          ts_name="Usama"
          ts_pics={ts_pics2}
          ts_paragraph="I received very good care at Clinicity Clinic, and the doctor took the time to explain the medications he was prescribing and why."
          cutomer="cutomer"
        />
        <TestemonialCard
          ts_name="Huzaifa"
          ts_pics={ts_pics3}
          ts_paragraph="I have insurance and still go to this clinic. The cost is in line with my copy to do and I don’t need to make an appointment."
          cutomer="cutomer"
        />
      
      </div>
    </div>
  );
}

export default Testemonial;
