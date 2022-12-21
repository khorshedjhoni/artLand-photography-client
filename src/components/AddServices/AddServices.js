import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useLoaderData } from 'react-router-dom';
import './AddServices.css'

const AddServices = () => {
    // const {name,price,detials} = useLoaderData([])

    const handleSubmit= event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const details = form.details.value;
        const img = form.img.value;
        const rating = form.rating.value;
       

        const services = {
            name,
            rating,
            img,
            price,
            details,

        }

        fetch('https://artland-photography-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('added successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div className='form'>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control name="img" type="text" placeholder="Name" required />
        <Form.Label>imageURL</Form.Label>
        <Form.Control name="name" type="text" placeholder="ImgURL" required />
        <Form.Label>price</Form.Label>
        <Form.Control name="price" type="text" placeholder="price" required/>
        <Form.Label>Rating</Form.Label>
        <Form.Control name="rating" type="text" placeholder="rating" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Details</Form.Label>
        <Form.Control name="details" as="textarea" rows={3} placeholder="Details" required/>
      </Form.Group>
      {/* <input variant="info" className='button' type="submit" value="Add Services" /> */}
      <Button variant="secondary" className='button' type="submit" value="Add Services">Add Services</Button>
      {/* <button>submit</button> */}
    </Form>
    
        </div>
    );
};

export default AddServices;