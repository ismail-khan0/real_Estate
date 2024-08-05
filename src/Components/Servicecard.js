import React from "react";
import Card from "./Card";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationCityIcon from '@mui/icons-material/LocationCity';
function Servicecard() {
  return (
    <div className="flex flex-wrap justify-center bg-[#E2EFFF] p-4">
      <Card heading="260+" paragraph="Total Constructions " angle={<PrecisionManufacturingIcon fontSize="large"/>} />
      <Card heading="120+" paragraph="Apartio Rooms" angle={<SingleBedIcon fontSize="large"/>}/>
      <Card heading="190+" paragraph="Apartments Solds" angle={<ApartmentIcon fontSize="large"/>}/>
      <Card heading="649+" paragraph="Total Area Squar" angle={<LocationCityIcon fontSize="large"/>}/>
    </div>
  );
}

export default Servicecard;
