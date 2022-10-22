import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../../context/AuthProvider/AuthProvider';

const Login = () => {
    const {LoginUser,setLoding} = useContext(AuthContext)
    const [error, setError] = useState('')
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    const navigate = useNavigate()
    const handdleSubmit=(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        LoginUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            form.reset()
            setError('')
            if(user.emailVerified){
              navigate(from,{replace:true})
            }
            else{
              toast.error('Your email is not verified.Please verify your email')
            }
        })
        .catch(e=>{
            console.error('error',e)
            setError(e.message)
        })
        .finally(()=>{
          setLoding(false);
        })
    }

    return (
            <Form onSubmit={handdleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Log in
      </Button>
      <Form.Text className="text-danger m-2">
          {error}
        </Form.Text>
    </Form>
       
    );
};

export default Login;