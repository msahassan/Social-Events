import { useEffect, useState } from "react";
import background21 from '../../assets/Image/picture.png'
import { Link } from "react-router-dom";
import Services from "./Services";
import PriceCard from "./PriceCard";

import Terminal from "./Terminal";
import Marquee from "react-fast-marquee";


const Service = () => {
    const [datas,setDatas]= useState([]);
    const [comments,setComments]= useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data => setDatas(data))
        
    },[])
    useEffect(()=>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data => setComments(data))
        
    },[])

    return (
        <div className="bg-slate-200">
            <div style={{backgroundImage:`url(${background21})`,backgroundPosition:'center',
             backgroundSize:'cover',
             backgroundRepeat:'no-repeat',}} className="shadow-lg  flex justify-center items-center py-7 space-y-4">
            <h1 className="text-3xl text-white">See Our Best Events Gallery!</h1>
            <Link to={'/gallery'}><button className="bg-orange-600 py-2 px-6 rounded-lg ml-5">Visit Gallery</button></Link>
            </div>
            <div className="text-center mt-4">
            <h1 className="text-5xl font-semibold">Services</h1> 
            <p className="text-3xl text-orange-300">~</p>
            <p className="uppercase underline font-semibold">we are the best</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 mt-10 w-3/4 mx-auto gap-10">
                {
                    datas.map(data =><Services key={data.id} data={data}></Services>)
                }
            </div>
            
            <PriceCard></PriceCard>
            <div className="text-center mt-6 mb-6">
                <h1 className="text-5xl font-bold">Testimonials</h1>
                <p >HAPPY CLIENTS ABOUT US</p>
            </div>
           <Marquee className="m-5 mb-12">
           <div className="flex justify-center items-center gap-5">
                {
                    comments.map(comment => <Terminal key={comment.id} comment={comment}></Terminal>)
                }
            </div>
           </Marquee>
           
           
        </div>
    );
};

export default Service;