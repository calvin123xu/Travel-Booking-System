import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {Form, Button, Row, Col, Table} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import { listMyBookingDetails } from '../actions/bookingActions'


function ProfileScreen() {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [message, setMessage] = useState('');



        const navigate = useNavigate();
        const location = useLocation();
        const dispatch = useDispatch();
      
      
        const userDetails = useSelector(state => state.userDetails)
        const { error, loading, user } =  userDetails

        const userLogin = useSelector(state => state.userLogin)
        const { userInfo } =  userLogin

        const userUpdateProfile = useSelector(state => state.userUpdateProfile)
        const { success } =  userUpdateProfile

        const bookingListMy = useSelector(state => state.bookingListMy)
        const { loading:loadingBookingDetails, error:errorBookingDetails, bookingDetails } =  bookingListMy
      
      
      
        useEffect(() => {
          if (!userInfo) {
            navigate('/login');
          
          } else{
              if(!user || !user.name || success ||userInfo.id !==user.id){
                dispatch({type: USER_UPDATE_PROFILE_RESET})
                dispatch (getUserDetails('profile'))
                dispatch(listMyBookingDetails())

              }else{
                setName(user.name)
                setEmail(user.email)

            }
          }
      
        }, [navigate, dispatch, userInfo, user, success])
      
        const submitHandler = async (e) => {
            e.preventDefault();
            if(password !== confirmPassword){
                setMessage("Passwords do not match")
                }else{
                    dispatch (updateUserProfile({
                        'id': user._id,
                        'name':name,
                        'email':email,
                        'password': password
                    }))
                    setMessage('')
                }

      
            
      
      
           
        };
  return (
    <Row>
      <Col md = {3}>
         <h2>User Profile</h2>
         {message && <Message variant = 'danger'>{message}</Message>}
       {error &&  <Message variant = 'danger'>{error}</Message>}
       {loading && <Loader/>}

       <Form onSubmit={submitHandler}>

            <Form.Group controlId='name' >
              <Form.Label>Name</Form.Label>
              <Form.Control 
                 type='name'
                 placeholder='Enter name' 
                 value={name} 
                 onChange ={(e) => setName(e.target.value)}>
                
              </Form.Control>

            
            </Form.Group>

            
            <Form.Group controlId='email' >
              <Form.Label>Email Address</Form.Label>
              <Form.Control 
                 required
                 type="email" 
                 placeholder='Enter email' 
                 value={email} 
                 onChange ={(e) => setEmail(e.target.value)}>
                
              </Form.Control>

            
            </Form.Group>

            <Form.Group controlId='password' >
              <Form.Label>Password </Form.Label>
              <Form.Control
                 
                 type='password' 
                 placeholder='Enter Password' 
                 value={password} 
                 onChange ={(e) => setPassword(e.target.value)}>
                
              </Form.Control>

            
            </Form.Group>

            <Form.Group controlId='passwordConfirm' >
              <Form.Label>Confirm Password </Form.Label>
              <Form.Control 
                 
                 type='password' 
                 placeholder='Confirm Password' 
                 value={confirmPassword} 
                 onChange ={(e) => setConfirmPassword(e.target.value)}>
                
              </Form.Control>

            
            </Form.Group>

            <Button type='submit' variant='primary'>
               Update
            </Button>


       </Form>
      </Col>
      <Col md = {9}>
         <h2>My Bookings</h2>
         {loadingBookingDetails ? (
             <Loader />
         ) : errorBookingDetails ? (
             <Message variant = 'danger'>{errorBookingDetails}</Message>
         ) : (
             <Table stripped responsive className='table-sm'>
              <thead>
                <tr key = {bookingDetails.id}>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Paid</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {bookingDetails.map(booking => (
                  <tr>
                    <td>{booking.id}</td>
                    <td>{booking.createdAt.substring(0,10)}</td>
                    <td>${booking.totalPrice}</td>
                    <td>{booking.isPaid ? booking.paidAt.substring(0,10) : (
                      <i className='fas fa-times' style={{color: 'red'}}></i>
                    )}</td>
                    <td>
                      <LinkContainer to = {`/booking/${booking.id}`}>
                        <Button className='btn-sm'>Details</Button>
                      </LinkContainer>
                    </td>
                  </tr>


                ))}
              </tbody>

             </Table>

         )
         }
      </Col>
    </Row>
  )
}

export default ProfileScreen
