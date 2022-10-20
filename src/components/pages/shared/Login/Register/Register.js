import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../../../context/AuthProvider/AuthProvider';

const Register = () => {
    const {cerateUser} = useContext(AuthContext)
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email,password,photo)
        cerateUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            form.reset()
        })
        .catch(e=>{
            console.error('error',e )
        })

    }
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Enter name" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name='photo' type="text" placeholder="Enter photo" />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <Form.Text className="text-muted m-2">
            We'll never share your email with anyone else.
          </Form.Text>
      </Form>
    );
};

export default Register;