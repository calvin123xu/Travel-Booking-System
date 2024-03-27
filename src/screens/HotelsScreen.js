
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Link } from 'react-router-dom';
import { listHotels } from '../actions/hotelActions';
import Hotel from '../components/Hotel'; 

function HotelsScreen() {
  const dispatch = useDispatch();
  const hotelList = useSelector((state) => state.hotelList);
  const { loading, error, hotels } = hotelList;

  useEffect(() => {
    dispatch(listHotels());
  }, [dispatch]);

  return (
    <div>
    <h1>Hotels</h1>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
      <>
        <Row>
          {hotels.map((hotel) => (
            <Col sm={12} md={6} lg={4} xl={3} key={hotel.id}>
              <Link to={`/hotel/${hotel.id}`} className="text-decoration-none">
                <Hotel hotel={hotel} />
              </Link>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center mt-4">
          <Link to="/Activities">
            <Button variant="primary">Browse Activities</Button>
          </Link>
        </div>
      </>
    )}
  </div>
);
}

export default HotelsScreen;
