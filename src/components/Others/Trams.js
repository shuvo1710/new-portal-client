import React from 'react';
import { Link } from 'react-router-dom';

const Trams = () => {
    return (
        <div>
            <h2>this is our trams</h2>
            <div><Link to="/register">back to register</Link></div>

        </div>
    );
};

export default Trams;