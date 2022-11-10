import React from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import './Login.css'
import { useContext } from 'react';
// import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle,  } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/Authprovider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const [error,setError] = useState('')
  const navigate = useNavigate()
    // const {singIn,providerLogin}= useContext(AuthContext);
    const {singIn,providerLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const location = useLocation()
    useTitle('Login')
    const from = location.state?.from?.pathname || '/'

    
    

    const handleGoogleSignIn = ()=>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
            navigate(from,{replace:true})
        })
        .catch(error=>console.error(error))
    }

   
    const handleSUbmit = event =>{
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      
      singIn(email,password)
      .then(result=>{
        const user = result.user;
        console.log(user)
        setError('')
        form.reset()
        navigate(from,{replace:true})
      })
      .catch(error=>{
        console.error(error)
        setError(error.message)
      })
    }
    return (
        <div onSubmit={handleSUbmit} className='form-details' >
            <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br />
      <span>If you haven't SignUp, <Link to ='/signup'>SignUp</Link></span>
      <Form.Text className="text-muted">
          {error}
        </Form.Text>
    </Form>
            
            <FaGoogle size='3rem' className='icon' onClick={handleGoogleSignIn} />
            
            
        </div>
    );
};

export default Login;