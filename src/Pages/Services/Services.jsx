import { Link } from 'react-router-dom';
import icon from '../../assets/Image/icon.png'
import PropTypes from 'prop-types'; 
const Services = ({data}) => {
    const {title,id} =data;
    return (
        <div className="">
            
            <Link to={`/details/${id}`}>
            <div className="shadow-lg text-center  py-10 rounded-xl bg-white">
                <img className='w-32 h-32 mx-auto' src={icon} alt="" />
                <h1 className='text-xl font-Vidaloka font-semibold'>{title}</h1> </div>
            </Link>

           
           
           
        </div>
    );
};
Services.propTypes={
    data:PropTypes.object
}
export default Services;