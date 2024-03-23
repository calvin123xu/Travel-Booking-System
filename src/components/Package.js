import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom';


function Package( {pkg}) {
  return (
    <Card className= "my-3  p-3 rounded">
        <Link to ={`/pkg/${pkg.id}`}>
           <Card.Img src={pkg.image}/>
        </Link>
        <Card.Body>
          <Link to={`/pkg/${pkg.id}`}>
            <Card.Title as="div">
              <strong>{pkg.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as= "div">
            <div className="my-3">
              <Rating value={pkg.rating} text={`${pkg.numReviews} reviews`} color={'#f8e825'} />
            </div>

          </Card.Text>
          

          <Card.Text as="h3">
            ${pkg.Price}


          </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Package
