import React, { useEffect } from 'react'
import { Link, useParams, useNavigate, useLocation, } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import  Message  from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import{useDispatch, useSelector} from 'react-redux'


function CartScreen({ Location,history }) {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const packageId = params.id;
  const searchParams = new URLSearchParams(location.search);
  const qty = searchParams.get('qty') 
 

  const dispatch = useDispatch()
  const  cart = useSelector(state => state.cart)
  const { cartItems } = cart
  
  
  useEffect(() => {
      if (packageId){
          dispatch(addToCart(packageId, qty))

      }
  },  [dispatch,packageId,qty])



    const removeFromCartHandler = (id)=>{
        dispatch(removeFromCart(id))
    }

    const  checkoutHandler= ()=>{
        navigate('/login?redirect=shipping')}
       
    return (
        <Row>
            <Col md = {8}>
                <h1>SHOPPING CART</h1> 
                {cartItems.length === 0 ? (
                    <Message variant = 'info'>
                        Your Cart is Empty <Link to = '/'> Go back </Link>
                    </Message>

                ): ( 
                    <ListGroup variant='flush'>
                        {cartItems.map(item =>(
                            <ListGroup.Item key = {item.package}>
                                <Row>
                                    <Col md={2}>
                                        <Image src= {item.image} alt = {item.name} fluid rounded/>
                                    </Col>
                                    <Col md={3}>
                                        <Link to = {`/package/${item.package}`}>{item.name}</Link>
                                   </Col>

                                   <Col md ={2}>
                                    Price: ${item.Price}
                                   </Col>

                                   <Col md={3}>
                                     <Form.Control
                                        as="select"
                                        value={item.qty}
                                        onChange = {(e) => dispatch(addToCart(item.package, Number(e.target.value)))} 
                            > 
                                        {
                                      
                                         [...Array(11).keys()].map((x) => (
                                            <option key={x} value={x}>
                                                     {x}
                                            </option>
                                         ))
                                        }

                                     </Form.Control>
                                   </Col>

                                   <Col md={1}>
                                   <Button
                                            type="button"
                                            variant="light"
                                            onClick={() => removeFromCartHandler(item.package)}
>
                                         <i className="fas fa-trash"></i>
                                    </Button>
                                   </Col>
                                </Row>

                            </ListGroup.Item>
                        ))}


                    </ListGroup>

                )} 
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Subtotal({cartItems.reduce((acc, item)=> acc + item.qty,0)}) items</h2>
                            ${cartItems.reduce((acc, item)=> acc + item.qty*item.Price,0).toFixed(2)}
                        </ListGroup.Item>

                     </ListGroup>

                     <ListGroup.Item >
                         <Button 
                           type='button'
                           className='btn-block'
                           disabled={cartItems.length===0}
                           onClick={checkoutHandler}
                         >
                             PROCEED TO CHECKOUT

                         </Button>
                     </ListGroup.Item>
                </Card>
            </Col>
        </Row>
    )
}

export default CartScreen;
