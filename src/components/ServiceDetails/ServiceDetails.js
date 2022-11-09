import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import './ServiceDetails.css'

const ServiceDetails = () => {
    useTitle('Details')
    const detailsData = useLoaderData()
    const {_id, img, name, details,price,rating} = detailsData
    return (
        <div>
           <div>
           <div> 
        <div className="detailsCard">
    
    
        <img src={img} alt="" />
     
    <div className="card-body">
      <h2>{name}</h2>
      <p>
        {
           details
        }
      </p>
     
    </div>
    <div className='d-flex justify-content-between pe-2 ps-2'>
        <h6>Price: {price}</h6>
        <h6>Rating: {rating}</h6>
    </div>
   
  </div>
    </div>
           </div>
        </div>
    );
};

export default ServiceDetails;