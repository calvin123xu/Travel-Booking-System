import React, { useState,  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Package from '../components/Package'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Link } from 'react-router-dom';
import { listPackages } from '../actions/packageActions'




function PremadePackagesScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const packageList = useSelector(state => state.packageList)
  const { loading, error, Packages } = packageList

 
  let keyword = navigate.search
  console.log(keyword)
  useEffect (() => {
    dispatch(listPackages(keyword))
 
     
  },[dispatch,keyword])
  
  
 

  return (
    <div>
      <h1>Packages</h1>
      {loading ? <Loader />
        :error ? <Message variant = 'danger' > {error} </Message>
           :      
           <Row>
              {Packages.map((pkg) => (
                <Col key={pkg.id}>
                  <Link to={`/package/${pkg.id}`} className="text-decoration-none"> 
                     <Package pkg={pkg} />
                 </Link>
               </Col>
        ))}
          </Row>
    }

    </div>
  );
}

export default PremadePackagesScreen;