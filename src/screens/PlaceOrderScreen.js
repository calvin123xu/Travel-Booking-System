import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {Button, Row, Col, ListGroup, Image, Card} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createBooking } from '../actions/bookingActions'
import { BOOKING_CREATE_RESET } from '../constants/bookingConstants'

function PlaceOrderScreen() {
    

    const bookingcreate=useSelector(state => state.bookingCreate)
    const {booking, error, success} = bookingcreate
    
    const dispatch=useDispatch();
    const navigate = useNavigate();


    const cart = useSelector(state => state.cart)

    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.Price *  item.qty , 0).toFixed(2);
    cart.taxPrice = Number((0.05) * cart.itemsPrice).toFixed(2);
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.taxPrice)).toFixed(2);

    if(!cart.paymentMethod){
       navigate('/payment')  
    }

    useEffect(()=> {
        if (success){
            navigate(`/booking/${booking.id}`)
            dispatch ({type: BOOKING_CREATE_RESET})
        }

    },[success, navigate] )




    const Book =() => {
        dispatch(createBooking({
            bookingSummary:cart.cartItems,
            checkoutAddress:cart.checkoutAddress,
            paymentMethod:cart.paymentMethod,
            itemsPrice:cart.itemsPrice,
            taxPrice:cart.taxPrice,
            totalPrice:cart.totalPrice,
        }))
    }
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md = {8}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h2>Checkout</h2>
                    <p>
                        <strong>Address:</strong>
                        {cart.checkoutAddress.address},{cart.checkoutAddress.city}
                        {' '}
                        {cart.checkoutAddress.postalCode}
                        {' '}
                        {cart.checkoutAddress.country}
                    </p>
                </ListGroup.Item>
                
                <ListGroup.Item>
                    <h2>Payment Method</h2>
                    <p>
                        <strong>Method:</strong>
                        {cart.paymentMethod}
                    </p>
                </ListGroup.Item>

                <ListGroup.Item>
                    <h2>Booking</h2>
                    {cart.cartItems.length === 0 ? <Message variant = 'info'>
                        Your cart is empty! Please add some items.
                    </Message> : (
                        <ListGroup varaint ='flush'>
                            {cart.cartItems.map((item, index) => (
                                <ListGroup.Item key ={index}>
                                    <Row>
                                        <Col md= {1}>
                                           <Image src = {item.image} alt ={item.name} fluid rounded/>
                                        </Col>

                                        <Col>
                                           <Link to ={`/pkg/${item.package}`}>{item.name}</Link>
                                        </Col>

                                        <Col md={4}>
                                            {item.qty}  X ${item.Price} = ${(item.qty * item.Price).toFixed(2)}
                                        
                                        </Col>
                                    </Row>

                                </ListGroup.Item>
                            ))}

                        </ListGroup>
                    )}

                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md = {4}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Booking Summary</h2>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row> 
                            <Col>Item:</Col>
                            <Col>${cart.itemsPrice}</Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row> 
                            <Col>Tax:</Col>
                            <Col>${cart.taxPrice}</Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row> 
                            <Col>Total:</Col>
                            <Col>${cart.totalPrice}</Col>
                        </Row>
                    </ListGroup.Item>
                    
                    <ListGroup.Item>
                        {error && <Message variant ='danger'>{error}</Message>}
                    </ListGroup.Item>


                    <ListGroup.Item>
                        <Button 
                            type ='button'
                            classname='btn-block'
                            disabled={cart.cartItems === 0}
                            onClick = {Book}
                        
                        > 
                            Book
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PlaceOrderScreen
