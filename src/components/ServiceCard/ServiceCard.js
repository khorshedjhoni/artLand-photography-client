import React from 'react';

import './SingleCard.css'

const ServiceCard = ({service}) => {
    const { _id, img, name, details,price,rating } = service;
    return (
        <div> 
        <div className="card">
    <img src={img} alt="" />
    <div className="card-body">
      <h2>{name}</h2>
      <p>
        {
            details.length>100?
            <>{details.slice(0,100) + '....' } 
              
            </>
            :details
        }
      </p>
     
    </div>
    <div className='d-flex justify-content-between pe-2 ps-2'>
        <h6>Price: {price}</h6>
        <h6>Rating: {rating}</h6>
    </div>
  </div>
    </div>

    );
};

export default ServiceCard;

