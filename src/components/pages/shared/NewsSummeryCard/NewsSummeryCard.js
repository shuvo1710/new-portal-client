import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark,FaShareAlt, FaStar } from 'react-icons/fa';


const NewsSummeryCard = ({news}) => {
    const {author,_id, details,image_url,title,total_view,rating} = news;
    return (
         <Card className='mb-5'>
            <Card.Header>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image 
                    roundedCircle
                    src={author.img}
                    style={{height:'60px'}}>
                    </Image>
                    <div className='m-2' >
                        <p className='m-0'>{author.name}</p>
                        <p className='m-0'>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </div></Card.Header>
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
            {details.length > 250 ?
            <p>{details.slice (0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link> </p>
            :
            <p>{details}</p>
            }
        </Card.Text>

        </Card.Body>
        <Card.Footer className='d-flex justify-content-between'>
            <div>
                <FaStar className='text-warning'></FaStar>
                <span className='mx-2'>{rating?.number}</span>
            </div>
            <div>
                <FaEye></FaEye>
                <span className='mx-2'>{total_view}</span>
            </div>

        </Card.Footer>
        </Card>

    );
};

export default NewsSummeryCard;