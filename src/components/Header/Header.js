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
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ARTLAND PHOTOGRAPHY</Navbar.Brand>
          <Nav className="ms-auto">
           
            <NavLink className='link' to='/'>Home</NavLink>
            <NavLink className='link' to='/blog'>Blog</NavLink> 
                        
            <NavLink className='link' to='/login'>
                   
                {
                    user?.uid?
                    
                    <>
                    
              
                    <button className='bg-dark text-white' onClick={handleLogOut}>logOut</button>
              
                    </>
                    :
                    <>
                     <NavLink className='text-white text-decoration-none' to ='/login'>login</NavLink>
                     
                    </> 
                }  
                </NavLink>     
            <NavLink className='link' to='/addServices'>Add Services</NavLink>            
            <NavLink className='link' to='/services'>Services</NavLink>
            
          </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;