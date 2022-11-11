import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../AuthProvider/Authprovider';
import Review from '../Review/Review';
import './ServiceDetails.css'

const ServiceDetails = () => {

    const{user} = useContext(AuthContext)

    useTitle('Details')

    const detailsData = useLoaderData()
    const {_id, img, name, details,price,rating} = detailsData

    const [reviews,setReviews] = useState([])
    
    useEffect(()=>{
        fetch(`https://artland-photography-server.vercel.app/review?service=${_id}`)
        .then(res =>res.json())
        .then(data => setReviews(data))
    },[_id])

    const addReview = ()=>{
        if(user?.uid){
            <Link className='' to={`/privateReview/${_id}`}>Add your Review</Link>
        }
        else{
            alert('please login first to add review')
        }
    }
   
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

           <div className='review'>
            <h3>Review Section</h3>
           </div>

           <div>
            {
                reviews.length === 0? 
                <>
                <h2> No review add</h2>
                </>
                :
                <>
                
                </>
            }
           </div>

           <div className='shadow-lg p-3 mb-5 bg-white rounded'>
           {/* <h3 className='text-align-center'>Review of client</h3> */}
           {
                    reviews.map(reviewes => <Review
                        key={reviewes._id}
                        reviewes={reviewes}
                    ></Review>)
                }
           </div>

                <div className='d-grid justify-content-center'>
                <Link onClick={addReview} className='' to={`/privateReview/${_id}`}>Add your Review </Link>
                </div>
        </div>
    );
};

export default ServiceDetails;