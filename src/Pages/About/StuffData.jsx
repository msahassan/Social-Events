import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import PropTypes from 'prop-types';
const StuffData = ({staffData}) => {
    const {staff_name,staff_img,staff_designation,facebook_link,linkedin_link,twitter_link} =staffData
    return (
        <div className="pl-20">
           
  <div className="space-y-4">
    <img  src={staff_img} className="h-[15vh] w-[16vh] rounded-full" />
   <h1 className=" text-2xl font-bold">{staff_name}</h1>
   <p className="">{staff_designation}</p>
   
  <div className="flex gap-6 items-center text-xl">
  <a href={facebook_link}><FaFacebook></FaFacebook></a>
   <a href={linkedin_link}><FaLinkedin></FaLinkedin></a>
   <a href={twitter_link}><FaTwitter></FaTwitter></a>
  </div>
  </div> 


        </div>
    );
};
StuffData.propTypes={
    staffData:PropTypes.object
}
export default StuffData;