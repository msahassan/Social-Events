import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CarDetail from "./CarDetail";
import Footer from "../../Home/Footer";


const CardDetails = () => {

    const [details, setDetails] = useState({});
    const {id} = useParams();
   console.log(id)
    const serviceDetails = useLoaderData();
    console.log(serviceDetails)
  
    useEffect(() => {
      const findDetails = serviceDetails?.find((details) => details.id === id);
      setDetails(findDetails);
    }, [serviceDetails, id]);
    
  console.log(details);
    return (
        <div className="space-y-10">
            <CarDetail details={details}></CarDetail>
            <Footer></Footer>
        </div>
    );
};

export default CardDetails;