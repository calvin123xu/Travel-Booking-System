import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { listPackageDetails } from '../actions/packageActions';

function PackageEditScreen() {
    const { id } = useParams();
    const packageId = id;


    // Define state variables for each package attribute
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [besttimetovisit, setBestTimeToVisit] = useState('');
    const [flightdetails, setFlightDetails] = useState('');
    const [flightduration, setFlightDuration] = useState('');
    const [activities, setActivities] = useState('');
    const [Hotel, setHotel] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const packageDetails = useSelector((state) => state.packageDetails);
    const { loading, error, package: packageData } = packageDetails;

    useEffect(() => {
        if (!packageData || packageData.id !== packageId) {
            dispatch(listPackageDetails(packageId));
        } else {
            setName(packageData.name);
            setPrice(packageData.price); // Make sure the price attribute matches your backend
            // ... update other state variables with the packageData
        }
    }, [packageId, packageData, dispatch]);

    const submitHandler = async (e) => {
        e.preventDefault();
    };

    if (loading) return <Loader />;
    if (error) return <Message variant='danger'>{error}</Message>; 
  return (
   <div>
           
    <Link to='/admin/packagelist'>
       Go Back
    </Link>
         
    <FormContainer>
        <h1>Edit Package</h1>
              
              
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> 
        : (
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

                
                <Form.Group controlId='Price' >
                  <Form.Label>Price</Form.Label>
                  <Form.Control 
                     type='number'
                     placeholder='Enter Price' 
                     value={price} 
                     onChange ={(e) => setPrice(e.target.value)}>
                    
                  </Form.Control>
                </Form.Group>

                                
                <Form.Group controlId='image' >
                  <Form.Label>Image</Form.Label>
                  <Form.Control 
                     type='text'
                     placeholder='Enter Image' 
                     value={image} 
                     onChange ={(e) => setImage(e.target.value)}>
                    
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId='besttimetovisit' >
                  <Form.Label>Besttimetovisit</Form.Label>
                  <Form.Control 
                     type='text'
                     placeholder='Enter besttimetovisit' 
                     value={besttimetovisit} 
                     onChange ={(e) => setBestTimeToVisit(e.target.value)}>
                    
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId='flightdetails' >
                  <Form.Label>Flight Details</Form.Label>
                  <Form.Control 
                     type='text'
                     placeholder='Enter flightdetails' 
                     value={flightdetails} 
                     onChange ={(e) => setFlightDetails(e.target.value)}>
                    
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId='flightduration' >
                  <Form.Label>Flight Duration</Form.Label>
                  <Form.Control 
                     type='text'
                     placeholder='Enter flightduration' 
                     value={flightduration} 
                     onChange ={(e) => setFlightDuration(e.target.value)}>
                    
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId='activities' >
                  <Form.Label>Activities</Form.Label>
                  <Form.Control 
                     type='text'
                     placeholder='Enter activities' 
                     value={activities} 
                     onChange ={(e) => setActivities(e.target.value)}>
                    
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId='hotel' >
                  <Form.Label>Hotel</Form.Label>
                  <Form.Control 
                     type='text'
                     placeholder='Enter hotel' 
                     value={Hotel} 
                     onChange ={(e) => setHotel(e.target.value)}>
                    
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId='description' >
                  <Form.Label>Description</Form.Label>
                  <Form.Control 
                     type='text'
                     placeholder='Enter description' 
                     value={description} 
                     onChange ={(e) => setDescription(e.target.value)}>
                    
                  </Form.Control>
                </Form.Group>

                
                <Button type='submit' variant='primary'>
                   Update
                </Button>
    
    
            </Form>
           
         )}
           
      
    </FormContainer>
  </div>
    
  )
}

export default PackageEditScreen

