import React from 'react';
import image1 from '../../assests/banner/banner.png'
import image2 from '../../assests/banner/photo-image-2.jpg';
import image3 from '../../assests/banner/photo-image-3.webp'
import './Banner.css'
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <>
      <>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Click Your Passion</h3>
          <p>We provide the best service to memorable you moment</p>
        </Carousel.Caption>
      </>
     
     
    </>
    );
};

export default Banner;