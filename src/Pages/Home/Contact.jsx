import slider3 from "../../assets/Image/slider3.jpg";
import background21 from "../../assets/Image/picture.png";

const Contact = () => {
  return (
    <div className="lg:flex justify-center">
      <div className="">
        <img className="h-[38rem] " src={slider3} alt="" />
      </div>
      <div
        className="text-center lg:w-2/4 "
        style={{
          backgroundImage: `url(${background21})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-5xl font-semibold p-24">Online Request </h1>
        <div className="flex gap-6 p-4 justify-center">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="number"
            placeholder="Phone"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <textarea
          placeholder="Message"
          className="textarea textarea-bordered textarea-lg w-full max-w-2xl ml-4 "
        ></textarea>

      {/* check box */}
   <div>
   <div className="inline-flex items-center">
  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
    <input type="checkbox"
      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
      id="check" />
    <span
      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
        stroke="currentColor" strokeWidth="1">
        <path fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"></path>
      </svg>
    </span>
  </label>
  <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="check">
    Remember Me
  </label>
</div>
    </div> 

        <div className="text-center mt-5">
          <button className="py-2 px-6 bg-orange-700 rounded-lg">Send</button>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
