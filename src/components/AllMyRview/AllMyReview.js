import React from 'react';
import './AllMyReview.css'

const AllMyReview = ({reviewes,handleDelete,handleUpdate}) => {
    const {_id, name, customer, email,review,imgURL, status,serviceName} = reviewes
    

    return (
        <div className='review-container' >
            <div className='d-flex justify-content-between'>
            <div>
                <button onClick={()=> handleDelete(_id)} className=''> Delete</button>
            </div>
            <div>
                <button onClick={()=> handleUpdate(_id)} className=''> {status ? status: 'update'}</button>
            </div>
            </div>

            <div>
                <img src={imgURL} alt=''></img> <br></br>
                <h4>{customer}</h4>

            </div>
            <div>
                <h6>Service Name: {serviceName}</h6>
                <p>Review: {review}</p>
            </div>
        </div>
    );
};

export default AllMyReview;