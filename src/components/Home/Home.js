import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import Button from 'react-bootstrap/Button';
import image from '../../assests/banner/banner.png'
import image1 from '../../assests/about/about -me.jpg'
import './Home.css'
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../AuthProvider/Authprovider';
import Banner from '../Banner/Banner';
import About from '../About/About';

const Home = () => {
    const{user,logOut} = useContext(AuthContext)
    useTitle('Home')
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('https://artland-photography-server.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    return (
        
        <div>
            <Banner></Banner>
            
            <div className='cards'>
             {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
        </div>
        <div className='m-2'>
        <Button variant="secondary"><Link className='link text-white'  to='/services'>Sell all</Link></Button>
        </div>
                <div>
                <div>
    <div >
        <div class="col-sm-12 mx-auto w-75 chose-container">
          <h4><span>Why Choose</span> ArtLand?</h4>
          <p>When you choose artLand,you'll feel the benefit of 10 years' experience of photography. Because I know the digital world and we know that how to handle it. With working knowledge of photography I capture your best moment.</p>
          <br></br>
          <div className='support'>
          <div>
          <h4>Professional</h4>
          <p>ArtLand Photography provide professional photographer,</p>
          </div>
         <div>
         <h4>Experience Photographer</h4>
          <p>The best and Experience photographer capture your valuable moment </p>
         </div>
         <div>
         <h4>Support 24/7</h4>
          <p>ArtLand photography is always available to provide services</p>
         </div>
          </div>
        </div>
     
    </div>
  </div>
                </div>
        {/* <div className='about w-75'>
            <div className='w-50  '>
            <img src={image1} alt=''></img>
            </div>
            <div className='m-4 me-5 '>
                <h3>About Me</h3>
                <p>Hi,I'm Jhon.currently the sole owner of ART LAND photography.I try to provided the best services to the client. <br />
                I first fall in love with photography when I am in high school,for then photography is my hobby and passion.Now it turns also profession.
                <br />
                I graduate my cinematography and photography degree from New South Wales college.
                 </p>
            </div>
        </div> */}
        <div>
            <About></About>
        </div>
        </div>
        
    );
};

export default Home;