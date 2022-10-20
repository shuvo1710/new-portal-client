import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
  const {user,logOut} = useContext(AuthContext)

  const handleLogOut =()=>{
    logOut()
    .then(result=>{

    })
    .catch(error=>{
      console.error('error', error)
    })
  }
  
    return (
        <Navbar className='mb-2' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand> <Link to={'/'}>News Portal</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
            <Nav>
              {
                user?.uid ? <>
                <span className='text-white d-flex justify-content-center align-items-center'>{user?.displayName}</span>
                <button onClick={handleLogOut} variant="light" className='border-0 p-0 m-2 rounded-2 px-2'>Log Out</button>
                </> :
                <>
                <Link to='login'>Log in</Link>
                <Link to='register'>Register</Link>
                </>
              }
              <Nav.Link eventKey={2}>
                
                {
                  user?.uid ?
                   <Image roundedCircle style={{height:'40px'}} src={user.photoURL} ></Image>:
                  <FaUser></FaUser>
                }
              </Nav.Link>
            </Nav>
            <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
          </Navbar.Collapse>
          
        </Container>
        
      </Navbar>
    );
};

export default Header;