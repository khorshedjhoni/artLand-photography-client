import React from 'react';
import { Button } from 'react-bootstrap';
import './AllMyReview.css'

const AllMyReview = ({reviewes,handleDelete,handleUpdate}) => {
    const {_id, name, customer, email,review,imgURL, status,serviceName} = reviewes
    

    return (
        <div className=' container-review px-5 mx-auto' >
            <h4>Service Name: {serviceName}</h4>
            <div className='d-flex justify-content-between'>
                
                <img className='img' src={imgURL} alt="" />
                <h4>Cutomer:{customer}</h4> 
                <div>
                <Button variant='danger' onClick={()=> handleDelete(_id)} className=''> Delete</Button>
                </div>
            </div>
            <div>
                <p>{review}</p>
            </div>
            

        </div>
    );
};

export default AllMyReview;

{/* <img src={imgURL} alt=''></img> <br></br>
<h4>{customer}</h4>

</div>
<div className=' bg-success'>
<h6>Service Name: {serviceName}</h6>
<p className=''>Review: {review}</p> */}