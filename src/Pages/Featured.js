import React from 'react'
import FeaturedCard from '../Components/FeaturedCard'
import room3 from '../Img/room3.png'
import room2 from '../Img/room2.png'
import room1 from '../Img/Room1.png'
import room4 from '../Img/room4.png'
import room5 from '../Img/room5.png'
import room6 from '../Img/room6.png'

function Featured() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[#0061E0] mt-4 lg:text-xl text-sm">Featured Listing</p>
      <div className="font-bold lg:text-2xl text-2xl space-x-2">
        <span>We Bring Dream Home To Reality</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="p-2"><FeaturedCard feet='2400' garage='2' badrooms='2' bathroom='2' name='Ismail khan' day='1' dollar='532474' rooms={room1}/></div>
        <div className="p-2"><FeaturedCard feet='3400' garage='3' badrooms='3' bathroom='3' name='jahangeer' day='3' dollar='32374' rooms={room2}/></div>
        <div className="p-2"><FeaturedCard feet='2399' garage='2' badrooms='2' bathroom='2' name='usama' day='2' dollar='35374' rooms={room3}/></div>
        <div className="p-2"><FeaturedCard feet='1863' garage='4' badrooms='2' bathroom='2' name='huzaifa' day='1' dollar='85374'rooms={room4} /></div>
        <div className="p-2"><FeaturedCard feet='3495' garage='2' badrooms='3' bathroom='4' name='Afan' day='3' dollar='91374' rooms={room5}/></div>
        <div className="p-2"><FeaturedCard feet='4729' garage='2' badrooms='4' bathroom='3' name='Afaq' day='2' dollar='15374' rooms={room6}/></div>
      </div>
    </div>
  )
}

export default Featured
