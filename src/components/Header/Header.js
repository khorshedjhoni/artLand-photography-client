import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/Authprovider';
import './Header.css'
const Header = () => {
    const{user,logOut} = useContext(AuthContext)
    const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))
      }
    return (
       <div>
       < Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ART LAND PHOTOGRAPHY</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <NavLink className='link' to='/'>Home</NavLink>
            <NavLink className='link' to='/blog'>Blog</NavLink> 
                        
            <NavLink className='link' to='/login'>
                   
                {
                    user?.uid?
                    
                    <>
                    
              
                    <button className='bg-dark text-white' onClick={handleLogOut}>logOut</button>
                    <NavLink className='link' to='/addServices'>Add Services</NavLink> 
              
                    </>
                    :
                    <>
                     <NavLink className='text-white text-decoration-none' to ='/login'>login</NavLink>
                     
                    </> 
                }  
                </NavLink>     
                       
            <NavLink className='link' to='/services'>Services</NavLink>


            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
           
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </div>
    );
};

export default Header;

{/* <NavLink className='link' to='/'>Home</NavLink>
            <NavLink className='link' to='/blog'>Blog</NavLink> 
                        
            <NavLink className='link' to='/login'>
                   
                {
                    user?.uid?
                    
                    <>
                    
              
                    <button className='bg-dark text-white' onClick={handleLogOut}>logOut</button>
                    <NavLink className='link' to='/addServices'>Add Services</NavLink> 
              
                    </>
                    :
                    <>
                     <NavLink className='text-white text-decoration-none' to ='/login'>login</NavLink>
                     
                    </> 
                }  
                </NavLink>     
                       
            <NavLink className='link' to='/services'>Services</NavLink> */}