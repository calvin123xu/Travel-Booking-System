
import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveCheckoutAddress } from '../actions/cartActions'


function CheckoutScreen() {

  const cart = useSelector(state => state.cart)
  const {checkoutAddress} = cart

  const dispatch = useDispatch()
  const navigate = useNavigate();


  const [address, setAddress] = useState(checkoutAddress.address)
  const [city, setCity] = useState(checkoutAddress.city)
  const [postalCode, setPostalCode] = useState(checkoutAddress.postalCode)
  const [country, setCountry] = useState(checkoutAddress.country)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch (saveCheckoutAddress({address, city, postalCode, country}))
    navigate('/payment')
    
  }



  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Checkout</h1>
      <Form onSubmit = {submitHandler}>
            <Form.Group controlId='address' >
              <Form.Label>Address</Form.Label>
              <Form.Control 
                 type='text'
                 placeholder='Enter address' 
                 value={address ? address: ''} 
                 onChange ={(e) => setAddress(e.target.value)}>
                
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='city' >
              <Form.Label>City</Form.Label>
              <Form.Control 
                 type='text'
                 placeholder='Enter city' 
                 value={city ? city: ''} 
                 onChange ={(e) => setCity(e.target.value)}>
                
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='postalCode' >
              <Form.Label>Postal Code</Form.Label>
              <Form.Control 
                 type='text'
                 placeholder='Enter postal code' 
                 value={postalCode ? postalCode: ''} 
                 onChange ={(e) => setPostalCode(e.target.value)}>
                
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='country' >
              <Form.Label>Country</Form.Label>
              <Form.Control 
                 type='text'
                 placeholder='Enter country' 
                 value={country ? country: ''} 
                 onChange ={(e) => setCountry(e.target.value)}>
                
              </Form.Control>
            </Form.Group>

            <Button type ='submit' variant ='primary'>
              Continue
            </Button>




      </Form>
    </FormContainer>
  )
}

export default CheckoutScreen
