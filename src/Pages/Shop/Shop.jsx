import { useEffect, useState } from "react";
import Shops from "./Shops";

const Shop = () => {
    const [products ,setProduct]= useState([])
    //  const [cart,setCart] = useState([])
    //  const [warning,setWarning] = useState(false)
    // const [totalPrice, setTotalPrice] = useState(0);

    // const handleClick = (product)=>{
    //      let isPresent = false;
    //     cart.forEach((item)=>{
    //         if (product.id === item.id)
    //         isPresent =true;
    //         const total = products.reduce((preValue,currentItem) =>(preValue) + (currentItem.price),0);  
    //          setTotalPrice(total);
    //     })
    //     // if (isPresent){
    //     //     setWarning(true)
    //     //     setTimeout(()=>{
    //     //         setWarning(false);
    //     //     },2000)
    //     //     return;
    //     // }
    //     // if(products){
    //     //     const total = products.reduce((preValue,currentItem) =>parseInt (preValue) + parseInt(currentItem.price),0);  
    //     //      setTotalPrice(total);
    //     // }
        
    //      setCart([...cart,product]);
    // }



    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProduct(data))
    },[])
    return (
       <div className=" flex max-w-[1400px] mx-auto justify-center space-x-8 ">

        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 w-3/4 gap-3 items-center">
        {
            products.map(product =><Shops key={product.id}
                 product={product} 
                //  handleClick={handleClick}
                
                 ></Shops>)
        }
        </div>
        
         <div className="mt-10">
       <h1 className="text-3xl font-semibold">Cart</h1>
       <p>Subtotal:0.00</p>
      <div className="space-y-3">
      <button className="btn btn-secondary ml-3">view cart</button>
      <button className="btn btn-secondary ml-3">checkout</button>
      </div>
        {/* {
            warning && <div className="warning">Item is already added to your cart</div>
        } */}
        </div>
       </div>
    );
};

export default Shop;