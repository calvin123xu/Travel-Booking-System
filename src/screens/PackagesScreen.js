import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'
import { Row, Col , Image ,ListGroup , Button , Card, Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import { listPackageDetails } from '../actions/packageActions'



function PackagesScreen({ history }) {
    const [qty, setQty] = useState(1)
    const params = useParams();
    const dispatch = useDispatch();
    const packageDetails = useSelector((state) => state.packageDetails);
    const pkg = packageDetails.Package;
    const navigate = useNavigate();


  
    useEffect (() => {
      dispatch(listPackageDetails(params.id));
    }, [dispatch, params.id]);

    const addToCartHandler = () => {
      navigate(`/Cart/${params.id}?qty=${qty}`);  // navigating to cart with quantity
    }

     return (
       <div>
         <Link to =  '/Premade Packages' className =' btn btn-light my-3' >Back To Premade Packages</Link>
         <Row>
            <Col md={5}>
            <Image src = {pkg.image} fluid />

            </Col>
            <Col md= {4}>
              <ListGroup >
                  <ListGroup.Item>
                    <h3>{ pkg.name}</h3>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Rating value= { pkg.rating} text={`${ pkg.numReviews} reviews`} color={'#f8e825'}/>

                  </ListGroup.Item>

                  <ListGroup.Item>
                    Price : ${ pkg.Price}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Description : { pkg.description}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Best Time to Visit : { pkg.besttimetovisit}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Flight Details : { pkg.flightdetails}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Flight Duration : { pkg.flightduration}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Activities : { pkg.activities}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Hotel : { pkg.Hotel}
                  </ListGroup.Item>
              </ListGroup>


            </Col>
            <Col md= {3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                      <strong>${pkg && pkg.Price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                         'Currently Available'
                      </Col>
                    </Row>
                  </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Number of Packages</Col>
                          <Col xs='auto' className='my-1'>
                            <Form.Control
                              as="select"
                              value={qty}
                              onChange = {(e) => setQty(e.target.value)} 
                            > 
                               {[...Array(11).keys()].map((x) => (
                                  <option key={x} value={x}>
                                     {x}
                                  </option>
                                ))
                              }

                            </Form.Control>
                          </Col>

                        </Row>
                      </ListGroup.Item>

                  <ListGroup.Item>
                     <Button 
                     onClick = {addToCartHandler}
                     className= 'btn-block' 
                     type='button'>
                      Add to Cart
                     </Button>
                  </ListGroup.Item>


                </ListGroup>
              </Card>
            </Col>

          
         </Row>
       </div>
     );
   }
   
   export default PackagesScreen;
   
