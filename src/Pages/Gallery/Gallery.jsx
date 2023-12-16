import events from "../../assets/Image/event1.jpg"
import events2 from "../../assets/Image/event2.jpg"
import events3 from "../../assets/Image/event3.jpg"
import events4 from "../../assets/Image/event4.jpg"
import events5 from "../../assets/Image/event5.jpg"
import events6 from "../../assets/Image/event6.jpg"
import events7 from "../../assets/Image/event7.jpg"
import events8 from "../../assets/Image/event8.jpg"
import events9 from "../../assets/Image/event9.jpg"
import events10 from "../../assets/Image/event10.jpg"
import GalleryNav from "./GalleryNav"

const Gallery = () => {
    return (
        <div className=" m-8 ">
            <h1 className="text-5xl text-center mb-6 font-bold">Gallery</h1>
            <p className="text-center mb-8 font-semibold underline">Our recent pojects</p>
            <GalleryNav></GalleryNav>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 rounded-lg ">
           <div className="overflow-hidden">
           <img src={events} alt="" className="w-full h-auto"/>
           </div>
           <div className="overflow-hidden">
           <img src={events2} alt="" className="w-full h-auto"/>
           </div>
          <div className="overflow-hidden">
          <img src={events3} alt="" className="w-full h-auto"/>
          </div>
           <div className="overflow-hidden">
           <img src={events4} alt="" className="w-full h-auto"/>
           </div>
         <div className="overflow-hidden">
         <img src={events5} alt="" className="w-full h-auto"/>
         </div>
          <div className="overflow-hidden ">
          <img src={events6} alt="" className="w-full h-auto"/>
          <img src={events7} alt="" className="w-full h-auto mt-3"/>
          </div>
           <div className="overflow-hidden">
           <img src={events9} alt="" className="w-full h-auto"/>
           <img src={events10} alt="" className="w-full h-auto mt-3" />
           </div>
          <div className="overflow-hidden">
          <img src={events8} alt="" className="w-full h-auto"/>
          </div>
         
         
           </div>
           <div>

           </div>
        </div>
    );
};

export default Gallery;