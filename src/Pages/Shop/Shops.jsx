import PropTypes from 'prop-types'; 

const Shops = ({product}) => {
    const {product_name,product_picture,price_low_range }=product;
    return (
        <div className="mt-12">
        
            <div>
            <img className="text-center" src={product_picture} alt="" />
            <h1 className="text-3xl mt-4">{product_name}</h1>
            <p className="mt-4">${price_low_range}</p>
            <button  className="bg-orange-500 px-4 py-2 rounded-lg mt-3 mx-au">Add to cart</button>
            </div>
            
       
       </div>
    );
};
Shops.propTypes ={
    product: PropTypes.object,
    handleClick:PropTypes.object
}
export default Shops;