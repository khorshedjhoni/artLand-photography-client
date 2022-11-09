import React from 'react';
import Form from 'react-bootstrap/Form';

const AddServices = () => {

    const handleSubmit= event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const details = form.details.value;

        const services = {
            
            name,
            price,
            details,

        }

        fetch('http://localhost:5000/services', {
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
        <Form.Control name="name" type="text" placeholder="name" />
        <Form.Label>price</Form.Label>
        <Form.Control name="price" type="text" placeholder="price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Details</Form.Label>
        <Form.Control name="details" as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <button>submit</button>
        </div>
    );
};

export default AddServices;