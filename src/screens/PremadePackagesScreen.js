import React, { useState,  useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Package from '../components/Package'
import { Link } from 'react-router-dom';
import axios from 'axios'



function PremadePackagesScreen() {
  const [Packages, setPackages] = useState([])
  
  useEffect (() => {
    async function fetchPackages() {
      const{ data } = await axios.get('/api/Packages/')
      setPackages(data)
  }
  fetchPackages()
     
  },[])
  return (
    <div>
      <h1>Packages</h1>
      <Row>
        {Packages.map((pkg) => (
          <Col key={pkg.id}>
            <Link to={`/package/${pkg.id}`}> 
              <Package pkg={pkg} />
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PremadePackagesScreen;
