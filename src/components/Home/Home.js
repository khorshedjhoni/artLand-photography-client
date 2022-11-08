import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import Button from 'react-bootstrap/Button';

const Home = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className='cards'>
             {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
        </div>
      
        <div className='m-2'>
        <Button variant="secondary"><Link className='link text-black'  to='/services'>Sell all</Link></Button>
        </div>
        </div>
        
    );
};

export default Home;