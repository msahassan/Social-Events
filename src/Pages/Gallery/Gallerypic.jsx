import { Link } from "react-router-dom";
import events from "../../assets/Image/event1.jpg"
import events2 from "../../assets/Image/event2.jpg"
import events3 from "../../assets/Image/event3.jpg"
import events4 from "../../assets/Image/event4.jpg"

const Gallerypic = () => {
    return (
        <div className="px-24 space-y-5 mt-12">
            <h1 className="lg:text-5xl font-semibold text-center"> Gallery </h1>
            <p className="uppercase text-center">Our recent Projects</p>
            <div className=" grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-6 pt-6">
            <div>
                <img className="hover:scale-105 transition-transform duration-500 ease-in-out" src={events} alt="" />
            </div>
            <div><img className=" hover:scale-105 transition-transform duration-300 ease-in-out" src={events2} alt="" /></div>
            <div><img className=" hover:scale-105 transition-transform duration-300 ease-in-out" src={events3} alt="" /></div>
            <div><img className="hover:scale-105 transition-transform duration-300 ease-in-out" src={events4} alt="" /></div>
            </div>
            <div className="lg:flex justify-center items-center gap-7 shadow-sm h-24">
                <h1 className="text-4xl">See Our <span className="text-yellow-500">Best Events</span> Gallery!</h1>
                <Link to={'/gallery'}><button className="bg-orange-600 py-2 px-5 rounded-lg">Visit Gallery</button></Link>
            </div>

        </div>
    );
};

export default Gallerypic;