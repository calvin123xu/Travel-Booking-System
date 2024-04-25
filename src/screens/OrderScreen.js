import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { PayPalButton } from 'react-paypal-button-v2';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getBookingDetails, payBooking } from '../actions/bookingActions'; 
import { BOOKING_PAY_RESET } from '../constants/bookingConstants'

function OrderScreen() {
  const { id: bookingId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sdkReady, setSdkReady] = useState(false);

  const bookingDetails = useSelector((state) => state.bookingDetails ?? {});
  const { booking, error, loading } = bookingDetails;

  const bookingPay = useSelector((state) => state.bookingPay ?? {});
  const { loading: loadingPay, success: successPay } = bookingPay;

  const addPayPalScript = () => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.paypal.com/sdk/js?client-id=Ab1J-jzwJuEJqyfuyIzORKsoY7n-tfs2ZuroKNSWYI8W4gWSWNSYZl_Pp1dpB6WEJxEltINCr2kl1Ic2'; // Replace with your client ID
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
  };

  useEffect(() => {
    if (!booking || successPay) {
      dispatch({type:BOOKING_PAY_RESET})
      dispatch(getBookingDetails(bookingId)).catch((error) => {
        console.error('Failed to load booking details:', error);
      });
    }

    if (booking && !booking.isPaid && !window.paypal) {
      addPayPalScript();
    } else {
      setSdkReady(true);
    }
  }, [bookingId, booking, successPay, dispatch]);

  console.log(booking);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payBooking(bookingId, paymentResult));
  };

  // Calculate itemsPrice only if bookingSummary are available
  const itemsPrice = booking?.bookingSummary?.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2) || '0.00'
    return loading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <div>
            <h1>Booking: {booking?.id}</h1>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Checkout Address</h2>
                            <p><strong>Name: </strong>{booking.user.name}</p>
                            <p><strong>Email: </strong><a href={`mailto:${booking.user.email}`}>{booking.user.email}</a></p>
                            <p>
                                <strong>Address:</strong>
                                {booking?.checkoutAddress?.address},{booking?.checkoutAddress?.city}
                                {' '}
                                {booking?.checkoutAddress?.postalCode},
                                {' '}
                                {booking?.checkoutAddress?.country}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <p>
                            <strong>Method: </strong>{booking?.paymentMethod}
                            </p>

                            {booking.isPaid  ? (
                                <Message variant='success'>Paid on {booking.paidAt.substring(0,10)}</Message>
                            )  : (
                                    <Message variant='warning'>Not Paid</Message>
                                 )}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Booking Details</h2>
                            {booking?.bookingSummary?.length === 0 ? (
                                <Message> Booking is empty</Message>
                            ) : (
                                  <ListGroup varaint ='flush'>
                                  {booking.bookingSummary?.map((item, index) => (
                                    <ListGroup.Item key ={index}>
                                        <Row>
                                            <Col md= {1}>
                                               <Image src = {item.image} alt ={item.name} fluid rounded/>
                                            </Col>
    
                                            <Col>
                                               <Link to ={`/pkg/${item.package}`}>{item.name}</Link>
                                            </Col>
    
                                            <Col md={4}>
                                                {item.qty}  X ${item.price} = ${(item.qty * item.price).toFixed(2)}
                                            
                                            </Col>
                                        </Row>
    
                                    </ListGroup.Item>
                                     ))}
                                   </ListGroup>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Booking Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items:</Col>
                                    <Col>${itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                               <Row> 
                                  <Col>Tax:</Col>
                                   <Col>${booking.taxPrice}</Col>
                              </Row>
                           </ListGroup.Item>

                            <ListGroup.Item>
                              <Row> 
                               <Col>Total:</Col>
                               <Col>${booking.totalPrice}</Col>
                             </Row>
                          </ListGroup.Item>

                          {!booking.isPaid && (
                            <ListGroup.Item>
                                {loadingPay && <Loader />}
                                {!sdkReady ? (
                                    <Loader />
                                ) : (
                                    <PayPalButton 
                                       amount = {booking.totalPrice}
                                       onSuccess={successPaymentHandler}
                                       
                                    
                                    />
                                
                                )}
                            </ListGroup.Item>
                          )}


                            
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default OrderScreen;
