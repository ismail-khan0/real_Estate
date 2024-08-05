import React from "react";

function ExpertiesCrad(props) {
  return (
    <div className="lg:w-48 lg:h-80 w-80 h-80  lg:flex lg:flex-col  bg-white flex flex-row justify-center items-center shadow-lg mx-2 my-6 ">
      <div className="w-42 h-42 flex justify-center flex-col">
        {" "}
        <img className="w-36 h-36" src={props.pics} alt="no image show" />
        <h1 className="my-1 font-bold text-lg">{props.Name}</h1>
        <p className="text-gray-500">{props.work}</p>
        <h5 className="mt-1 text-[#0061E0]">{props.PhoneNum} </h5>
      </div>
    </div>
  );
}

export default ExpertiesCrad;
