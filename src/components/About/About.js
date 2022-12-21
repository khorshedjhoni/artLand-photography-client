import React from 'react';
import image1 from '../../assests/about/about -me.jpg'

const About = () => {
    return (
        <div className='mx-auto mt-5'>
            <div class=" mb-3 mt-10  mx-auto w-75  d-flex flex-xl-column flex-sm-row flex-column" >
  <div class="">
    <div class="">
      <img src={image1}alt="" />
    </div>
    <div class="">
      <div >
      <h3 class=" d-flex justify-content-center">About Me</h3>
                <p>Hi,I'm Jhon.currently the sole owner of ART LAND photography.I try to provided the best services to the client. <br />
                I first fall in love with photography when I am in high school,for then photography is my hobby and passion.Now it turns also profession.
                <br />
                I graduate my cinematography and photography degree from New South Wales college.
                 </p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;