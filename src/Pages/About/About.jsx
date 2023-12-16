import {  useEffect, useState } from "react";
import StuffData from "./StuffData";
import download from '../../assets/Image/download.png'

const About = () => {


  const [staffDatas, setStaffDatas] =useState([]);

  
  useEffect(()=>{
    fetch('about.json')
    .then(res =>res.json())
    .then(data =>setStaffDatas(data))
  },[])
  return (
    <div>
     <div className="text-center mt-12 h-[70vh] shadow-md">
     <h1 className="text-5xl font-bold">
        <span className="text-yellow-400">Hello!</span> We Are an Event Planning
        Agency
      </h1>
      <p className="text-2xl">~~</p>
      <p className="text-lg font-medium">
        As the premier event planning company in New York City, we know that
        its not “one size fits all”. <br /> Each event and client is unique and
        we believe our services should be as well. We know that it <br /> should
        be “Can I hire a planner?” not “Can I afford one?”.
      </p>
      <img className="w-[48rem] mx-auto mt-12" src={download} alt="" />
     </div>

   
     
 
     {/* Staff section// */}
     <div className=" bg-slate-100 py-10">
        <h1 className="text-5xl font-bold text-center">Our Staff</h1>
        <p className="text-center">~~</p>
        <p className="uppercase text-center">meet our best team </p>
        <div className="grid grid-cols-2  lg:grid-cols-4 gap-6 space-y-4 mt-8 mb-8 ">
          {
            staffDatas.map(staffData =><StuffData key={staffData.id} staffData={staffData}></StuffData>)
          }

        </div>
     </div>
     {/* others section */}




    </div>
  );
};

export default About;

