import Slider from "./Header/Slider";
import event6 from '../../assets/Image/event6.jpg'
import Contact from "./Contact";
import Gallerypic from "../Gallery/Gallerypic";
const Home = () => {
  return (
    <div>
      <Slider></Slider>

      {/* About section */}
      <div className=" py-12 bg-pink-100 space-y-4   lg:flex h-[100vh] justify-center gap-12">
       
        <div className="space-y-7 pt-9">
          <h1 className="text-3xl font-semibold"><span className="text-5xl text-pink-700">About</span> Rainbow</h1>
          <p className="lg:text-lg font-medium">
            We would love to meet up and chat about how <br />
            we can make your dream wedding happen!
          </p>
          <p>
            Wedding elit miss eget the solin missen citudino sellus rutrum in <br />
            lacus son nemine vestibulum eleifen ornare drana company tortor <br />
            semper at. Suspendise asinim the sedisem tinciun the drana numune <br />
            consue. Destination elit miss eget the solin miss citudino phasellus <br />
            rutrum into lacus miss. Vestibulum eleifen ornare drana sempe numune <br />
            consue. Event elit miss eget the solin miss citudino phasellus <br />
            rutrum into the lacusi events vestibulum eleifen ornare drana <br />
            company tortori sempeto numune consue design elit miss eget the <br />
            solin miss citudino sellus rutrum in lacus miss vestibulum in the <br />
            ornare drana company tortor semper at.
          </p>
        </div>
        <div>
          <img className="lg:h-[75vh] w-[65vh] rounded-lg" src={event6} alt="" />
        </div>
        </div>

    {/* Gallery */}
    <div className="flex">
    <Gallerypic></Gallerypic>
    </div>

    {/* Contact */}

    <div className="">
    <Contact></Contact>
    </div>















      </div>
    
  );
};

export default Home;
