import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Hotel({ hotel }) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/hotel/${hotel.id}`}>
                <Card.Img src={hotel.image} alt={`Hotel ${hotel.name}`} />
            </Link>
            <Card.Body>
                <Link to={`/hotel/${hotel.id}`}>
                    <Card.Title as="div">
                       <strong>{hotel.name}</strong> 
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                   Description: {hotel.description}
                </Card.Text>

                <Card.Text as="div">
                    Room Type: {hotel.room}
                </Card.Text>

                <Card.Text as="h3">
                    ${hotel.price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Hotel;
