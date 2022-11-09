import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const {name,image,rating,text} = review
    return (
        
        <div>
            
            <div className='review-container '>
            <div className=' justify-content-between'>
               <div className='img-review'>
               <img className='w-25 rounded-circle' src={image} alt=""></img>
               </div>
               <div>
                <h6>{name}</h6>
               </div>   
            </div>
            <div>
                {text}
            </div>
            <div>
                <p>Rating: {rating}</p>
            </div>
        </div>
        </div>
    );
};

export default Review;