import React, { useContext, useEffect, useState } from 'react';
import AllMyReview from '../AllMyRview/AllMyReview';
import { AuthContext } from '../AuthProvider/Authprovider';

const MyReviews = () => {

    const {user} = useContext(AuthContext)
    const[reviews,setReviews] = useState([])
    
  

    useEffect(()=>{
        fetch(`https://artland-photography-server.vercel.app/reviews?email=${user?.email}`)
        .then(res =>res.json())
        .then(data => setReviews(data))
    },[user?.email])

    const handleDelete = id =>{
        const proceed =window.confirm('Confirm your identity')
        if(proceed){
            fetch(`https://artland-photography-server.vercel.app/reviews/${id}`,{
                method:'DELETE'
            })
            .then(res =>res.json())
            .then(data=> {
                console.log(data)
                if(data.deletedCount >0){
                    alert('deleted successfully')
                    const remaining  = reviews.filter(ode=> ode._id !== id)
                    setReviews(remaining)
                }
            })
            
        }
    }
    const handleUpdate= id => {
        fetch(`https://artland-photography-server.vercel.app/reviews/${id}`,{
            method:'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status:'Approved'})
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.modifiedCount >0 ){
                const remaining = reviews.filter(ode=> ode._id !== id)
                const approving = reviews.find(ode=> ode._id !== id)
                approving.status= 'approved'
                const newReview = [approving, ...remaining];
                setReviews(newReview)
            }
        })
    }

    return (
        <div>
           <div>
           {
            reviews.length===0?  
            <>
            <h3 className='d-grid justify-content-center'>No Review Existing </h3>
            </>
            :
            <>
                <h3 className='d-grid justify-content-center'>Total review :{reviews.length} </h3>
               
            </>
           }
           </div>

          <div className='d-flex mb-5 '>
          {
            reviews.map(reviewes=> <AllMyReview 
            key={reviewes._id}
            reviewes = {reviewes}
            handleDelete = {handleDelete}
            handleUpdate={handleUpdate}

            ></AllMyReview>)
           }
          </div>
        </div>
    );
};

export default MyReviews;