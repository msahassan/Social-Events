import PropTypes from 'prop-types'; 

const CarDetail = ({details}) => {
    const { background_image, title, description } = details;

 
    return (
        <div className='w-3/4 mx-auto mt-8'>
            <div className=" space-y-6">
            <img className='rounded-2xl h-[90vh] w-full' src={background_image} alt="" />
            <h1 className="text-4xl text-center font-semibold underline">{title}</h1>
            <p className="text-lg font-normal">{description}</p>
            </div>

        </div>
    );
};
CarDetail.propTypes={
    details:PropTypes.object
}
export default CarDetail;