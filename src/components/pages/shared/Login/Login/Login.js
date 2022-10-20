import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../../context/AuthProvider/AuthProvider';

const Login = () => {
    const {LoginUser} = useContext(AuthContext)
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
            navigate('/')
        })
        .catch(e=>{
            console.error('error',e)
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
      <Form.Text className="text-muted m-2">
          We'll never share your email with anyone else.
        </Form.Text>
    </Form>
       
    );
};

export default Login;