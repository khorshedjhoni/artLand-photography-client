import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/Authprovider';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const PrivateReview = () => {

    const {user} = useContext(AuthContext)

    const detailsData = useLoaderData()
    const {_id, img, name, details,price,rating} = detailsData
   

    const handleAddReview = event =>{
        event.preventDefault()
        const form = event.target 
        const CustomerName = form.CustomerName.value
        const email = form.email.value
        const imgURL = form.imgURL.value
        const review = form.review.value

        const revie ={
            service:_id,
            serviceName:name,
            customer:CustomerName,
            email,
            review,
            imgURL
        }
        fetch('https://artland-photography-server.vercel.app/reviews',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(revie)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Review added successfully')
                form.reset()
            }
        })
        .catch(error=> console.error(error))

    }
    return (
        <div>
            <div> <h3>Review about: {name}</h3></div>

            <div>
            <Form onSubmit={handleAddReview} className='form-details'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control name='CustomerName' type='text' placeholder='name' />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name='imgURL' type="text" placeholder="Enter Photo URL" defaultValue={user?.photoURL} />
          
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" defaultValue={user?.email} required />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Review</Form.Label>
          <Form.Control  name='review' type='text' placeholder='review' required />
        </Form.Group>
        
        <Button variant="primary" type="submit" value="Add Review">
       Add Review
        </Button>
        
      </Form>
                
            </div>
        </div>
    );
};

export default PrivateReview;

