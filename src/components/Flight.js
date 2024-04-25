import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function FlightComponent({ flight }) {
   
    const formatDate = (isoString) => {
        const dateObj = new Date(isoString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
     
        return dateObj.toLocaleDateString('en-US', options);
    };

    const formatTime = (isoString) => {
        const dateObj = new Date(isoString);
        const options = { hour: '2-digit', minute: '2-digit', hour12: true };
        
        return dateObj.toLocaleTimeString('en-US', options);
    };

    
    const departureDate = formatDate(flight.departure);
    const departureTime = formatTime(flight.departure);
    const arrivalDate = formatDate(flight.arrival);
    const arrivalTime = formatTime(flight.arrival);

    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/flight/${flight.id}`}>
                <Card.Img src={flight.image} alt={`Flight ${flight.flightNum}`} />
            </Link>
            <Card.Body>
                <Link to={`/flight/${flight.id}`}>
                    <Card.Title as="div">
                        <strong>Flight {flight.flightNum}</strong>
                    </Card.Title>
                </Link>
                
                <Card.Text as="div">
                    <div>Origin: {flight.origin}</div>
                    <div>Destination: {flight.destination}</div>
                </Card.Text>

                <Card.Text as="div">
                   Departure Date: {departureDate}
                </Card.Text>
                <Card.Text as="div">
                    Departure Time: {departureTime}
                </Card.Text>

                <Card.Text as="div">
                    Arrival Date: {arrivalDate}
                </Card.Text>
                <Card.Text as="div">
                    Arrival Time: {arrivalTime}
                </Card.Text>

                <Card.Text as="div">
                    Duration: {flight.duration}
                </Card.Text>

                <Card.Text as="h3">
                    ${flight.price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default FlightComponent;
