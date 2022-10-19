import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CgGoogle, CgYoutube, CgTwitter, } from "react-icons/cg";
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary">Log in with google</Button>
                <Button className='mb-2' variant="outline-dark">Log in with Github</Button>
            </ButtonGroup>
            <div>
                <h5>Found us</h5>
                <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item><CgGoogle/> Google</ListGroup.Item>
                        <ListGroup.Item><CgYoutube/> YouTube</ListGroup.Item>
                        <ListGroup.Item><CgTwitter></CgTwitter> Twitter</ListGroup.Item>
                        <ListGroup.Item>WhatsApp</ListGroup.Item>
                        <ListGroup.Item>Discord</ListGroup.Item>
                        <ListGroup.Item>Privacy policy</ListGroup.Item>
                        <ListGroup.Item>Terms And Condition</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
            <div className='mt-5 border border-1'>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;