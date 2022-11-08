import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const SingleCard = ({service}) => {
    useTitle('Services')
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
    <Button className='mx-auto m-2' variant='dark'><Link className='link' to ={`/services/${_id}`}>View All</Link></Button>
  </div>
    </div>

    );
};

export default SingleCard;