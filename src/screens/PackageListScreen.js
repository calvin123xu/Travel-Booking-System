
import React, {useState, useEffect} from 'react'
import { LinkContainer, useLocation } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'
import {Table, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listPackages, deletePackage, createPackages } from '../actions/packageActions'
import { PACKAGE_CREATE_RESET } from '../constants/packageConstants'

function PackageListScreen() {
    

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const packageList = useSelector(state => state.packageList)
    const {loading, error, Packages= []} = packageList

    const packageDelete = useSelector(state => state.packageDelete)
    const {loading:loadingDelete, error:errorDelete, success:successDelete} = packageDelete

    const packageCreate = useSelector(state => state.packageCreate)
    const {loading:loadingCreate, error:errorCreate, success:successCreate, package:createdPackage} = packageCreate

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    useEffect(() => {
        
        if (!userInfo.isAdmin) {
          navigate('/login');
        } else if (successCreate && createdPackage?.id) {
          
          navigate(`/admin/package/${createdPackage?.id}/edit`);
      
         
          dispatch({ type: PACKAGE_CREATE_RESET });
        } else {
          // If not creating a package, list all packages
          dispatch(listPackages());
        }
        
    }, [dispatch,navigate, userInfo, successDelete, successCreate, createdPackage])


    const deleteHandler = (id) => {

        if(window.confirm('Are you sure you want to delete this Package?')){
            dispatch(deletePackage(id))
        } 
      
     }
     const createPackageHandler = () => {
         dispatch(createPackages())
     }

    

    return (
    <div>

      <Row className='align-items-center'>
         <Col>
            <h1>Packages</h1>
         </Col>
         <Col className='text-right'>
            <Button className='my-3' onClick={createPackageHandler}>
                <i className='fas fa-plus'> Create Package</i>
            </Button>
         </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

      {loading
        ? (<Loader/>)
        :  error
              ? (<Message variant = 'danger'>{error}</Message>)
              : (
                <Table striped bordered hover responsive className='table-sm'> 
                    <thead>
                        <tr>
                           <th>ID</th>
                           <th>NAME</th>
                           <th>PRICE</th>
                           <th></th>
                        </tr>
                    </thead>


                    <tbody>
                        {Packages.map(pkg => (
                            <tr key={pkg.id}> 
                              <td>{pkg.id}</td>
                              <td>{pkg.name}</td>
                              <td>${pkg.Price}</td>
                              
                              
                              <td>
                                <LinkContainer to={`/admin/package/${pkg.id}/edit`}>
                                    <Button variant='ligsht' className='btn-sm'>
                                    <i className='fas fa-edit'></i>
                                    </Button>
                                </LinkContainer>
                                <Button variant='danger' className='btn-sm' onClick={()=> deleteHandler(pkg.id)}>
                                    <i className='fas fa-trash'></i>
                                </Button>
                              </td>


                            </tr>
                        ))}
                    </tbody>
                </Table>

              )}
    </div>
    )
}

export default PackageListScreen
