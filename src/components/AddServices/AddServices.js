import React from 'react';
import Form from 'react-bootstrap/Form';
import { useLoaderData } from 'react-router-dom';

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
        console.log(name,price)

        const services = {
            name,
            rating,
            img:img,
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
        <div>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control name="img" type="text" placeholder="Name" />
        <Form.Label>imageURL</Form.Label>
        <Form.Control name="name" type="text" placeholder="ImgURL" />
        <Form.Label>price</Form.Label>
        <Form.Control name="price" type="text" placeholder="price" />
        <Form.Label>Rating</Form.Label>
        <Form.Control name="rating" type="text" placeholder="rating" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Details</Form.Label>
        <Form.Control name="details" as="textarea" rows={3} placeholder="Details" />
      </Form.Group>
      <input className='button' type="submit" value="Add Services" />
      {/* <button>submit</button> */}
    </Form>
    
        </div>
    );
};

export default AddServices;