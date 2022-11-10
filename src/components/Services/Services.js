import React, { useContext, useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../AuthProvider/Authprovider';


const Services = () => {
    const [services,setServices] = useState([])
    const {setLoading} = useContext(AuthContext)
    
    useEffect(()=>{
        fetch('https://artland-photography-server.vercel.app/service')
        .then(res =>res.json())
        .then(data => setServices(data))
        
    },[])
    return (
        <div>
            <div className='cards'>
             {
                    services.map(service => <SingleCard
                        key={service._id}
                        service={service}
                    ></SingleCard>)
                }
        </div>
      
        {/* <div className='m-2'>
        <Button variant="secondary"><Link className='link text-black'  to='/services'>Sell all</Link></Button>
        </div> */}
        </div>
        
    );
};

export default Services;