import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Review from '../Review/Review';
import './ServiceDetails.css'

const ServiceDetails = () => {
    useTitle('Details')
    const detailsData = useLoaderData()
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res =>res.json())
        .then(data => setReviews(data))
    },[])
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

           <div className='shadow-lg p-3 mb-5 bg-white rounded'>
           {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
           </div>
        </div>
    );
};

export default ServiceDetails;