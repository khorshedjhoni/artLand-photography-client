import React from 'react';
import './Review.css'

const Review = ({reviewes}) => {
    const {customer,imgURL,review,service,serviceName } = reviewes
    console.log(review)
    return (
        
        <div>
            
            <div className='review-container '>
            <div className=' justify-content-between'>
               <div className='img-review'>
               <img className='w-25 rounded-circle' src={imgURL} alt=""></img>
               </div>
               <div>
                <h6>{customer}</h6>
               </div>   
               <div>
                <h6>{serviceName}</h6>
               </div>   
            </div>
            <div>
                
            </div>
            <div>
                <p>{review}</p>
            </div>
        </div>
        </div>
    );
};

export default Review;