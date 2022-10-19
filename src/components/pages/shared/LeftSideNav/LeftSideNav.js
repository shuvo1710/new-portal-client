import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/news-categories')
        .then(res=>res.json())
        .then(data =>setCategories(data))
    },[])
    return (
        <div className='d-lg-block d-sm-none '>
            <h5>All category {categories.length}</h5>
            {categories.map(caterory=> <p key={caterory.id}>
                <Link to={`category/${caterory.id}`}>{caterory.name}</Link>
            </p>)}
        </div>
    );
};

export default LeftSideNav;