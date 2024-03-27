// components/ActivityComponent.js
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Activity({ activity }) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/activity/${activity.id}`}>
                <Card.Img src={activity.image} alt={`Activity ${activity.name}`} />
            </Link>
            <Card.Body>
                <Link to={`/activity/${activity.id}`}>
                    <Card.Title as="div">
                        <strong>{activity.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">Description: {activity.description}</Card.Text>
                <Card.Text as="h3">${activity.price}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Activity;
