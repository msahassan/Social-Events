import background from "../../../assets/Image/slider1.jpg";
import background2 from "../../../assets/Image/slider2.jpg";
import background3 from "../../../assets/Image/slider3.jpg";

const Slider = () => {
  return (
    <div className="carousel lg:h-[760px] w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div
          className="hero w-full"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="space-y-12">
              <h1 className="mb-5 text-5xl font-bold">
                <span className="text-orange-600 lg:text-7xl">We create </span>
                <br />
                You <br />
                celebrate
              </h1>
              <p className="mb-5 text-base font-medium">
                Planning a Wedding, Proposal, or Event in our busy city is not
                so easy,
                <br />
                and it takes skills (and time) to make it all look easy-going
              </p>
              <button className="bg-orange-700 py-3 px-6 rounded-lg uppercase text-white">
                online request
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className=" lg:carousel-item relative w-full">
        <div
          className="hero"
          style={{
            backgroundImage: `url(${background2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="space-y-12">
              <h1 className="mb-5 text-5xl font-bold">
                <span className="text-orange-600 text-7xl">Let us help</span>
                <br />
                You <br />
                create{" "}
              </h1>
              <p className="mb-5 font-medium">
                Planning a Wedding, Proposal, or Event in our busy city is not
                so easy,
                <br />
                and it takes skills (and time) to make it all look easy-going
              </p>
              <button className="btn btn-primary uppercase">
                online request
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div
          className="hero"
          style={{
            backgroundImage: `url(${background3})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="space-y-12">
              <h1 className="mb-5 text-5xl font-bold">
                <span className="text-orange-600 text-7xl">From set up</span>
                <br />
                to <br />
                clean up
              </h1>
              <p className="mb-5 font-medium">
                Planning a Wedding, Proposal, or Event in our busy city is not
                so easy,
                <br />
                and it takes skills (and time) to make it all look easy-going
              </p>
              <button className="btn btn-primary uppercase">
                Online request
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
