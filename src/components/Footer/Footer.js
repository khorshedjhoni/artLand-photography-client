import React from 'react';

const Footer = () => {
    return (
       <div className='bg-dark text-white '> 
         <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left ">
            <div className="row ">
                <div className="col-md-6 mt-md-0 mt-3 mx-auto  ">
                    <h5 className="text-uppercase ">ArtLand Photography</h5>
                    <p>Contact us: +01521090900</p>
                </div>
    
                <hr className="clearfix w-100 d-md-none pb-0"/>
                </div>
        </div>
    
        <div className="footer-copyright text-center py-3">© 2022 Copyright:
            <a> ArtLand.com</a>
        </div>
    
    </footer>
       </div>
    
   
    );
};

export default Footer;