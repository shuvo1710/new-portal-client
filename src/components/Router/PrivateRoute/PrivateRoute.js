import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <div className='d-flex justify-content-center align-items-center'> <Spinner animation="border" variant="primary" /></div>
    }
    if(!user?.uid){
       return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;