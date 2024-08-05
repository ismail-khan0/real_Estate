import React from "react";
import ExpertiesCrad from "../Components/ExpertiesCrad";
import man1 from "../Img/man1.png";
import man2 from "../Img/man2.png";
import man3 from "../Img/man3.png";
import man4 from "../Img/man4.png";

function Experties() {
  return (
    <div className="px-4 py-8">
      <div className="flex flex-col items-center text-center mb-6">
        <p className="text-[#0061E0] mt-4 lg:text-xl text-sm">Experties Here</p>
        <div className="font-bold lg:text-4xl text-2xl space-x-2 flex flex-row">
          <span>Our Growing Agents</span>
        </div>
      </div>
      <div className="relative">
        <div className="flex overflow-x-scroll scrollbar-hide lg:overflow-hidden  py-4 lg:justify-center lg:items-center">
          <div className="flex flex-nowrap space-x-4 ">
            <ExpertiesCrad
              pics={man1}
              Name="Ismail"
              work="Eco Builder"
              PhoneNum="Call: +783234"
            />
            <ExpertiesCrad
              pics={man2}
              Name="Ismail"
              work="Eco Builder"
              PhoneNum="Call: +783234"
            />
            <ExpertiesCrad
              pics={man3}
              Name="Ismail"
              work="Eco Builder"
              PhoneNum="Call: +783234"
            />
            <ExpertiesCrad
              pics={man4}
              Name="Ismail"
              work="Eco Builder"
              PhoneNum="Call: +783234"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experties;
