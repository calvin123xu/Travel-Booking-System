import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap'; // Make sure to import Button from react-bootstrap
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Link } from 'react-router-dom';
import { listFlights } from '../actions/flightActions';
import Flight from '../components/Flight';

function FlightsScreen() {
  const dispatch = useDispatch();
  const flightList = useSelector((state) => state.flightList);
  const { loading, error, flights } = flightList;

  useEffect(() => {
    dispatch(listFlights());
  }, [dispatch]);

  return (
    <div>
      <h1>Flights</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {flights.map((flight) => (
              <Col sm={12} md={6} lg={4} xl={3} key={flight.id}>
                <Link to={`/flight/${flight.id}`} className="text-decoration-none">
                  <Flight flight={flight} />
                </Link>
              </Col>
            ))}
          </Row>
          <div className="d-flex justify-content-center mt-4">
            <Link to="/Hotels">
              <Button variant="primary">Browse Hotels</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default FlightsScreen;
