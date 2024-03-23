import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function Header() {
  return (
    <header>
     <Navbar bg = "dark" variant = "dark" expand ="lg" collapseOnSelect>
      <Container>
        <LinkContainer  to = '/'>
          <Navbar.Brand>Concordia Travel</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to ='/Flights'>
               <Nav.Link><i className= "fas fa-plane"></i>Flights</Nav.Link>
            </LinkContainer>
            <LinkContainer to ='/Hotels'>
              <Nav.Link><i className= "fas fa-hotel"></i>Hotels</Nav.Link>
            </LinkContainer>
            <LinkContainer to ='/Activities'>
              <Nav.Link><i className= "fas fa-umbrella-beach"></i>Activities</Nav.Link>
            </LinkContainer>
            <LinkContainer to ='/Premade Packages'> 
              <Nav.Link><i className= "fas fa-book-atlas"></i>Premade Packages</Nav.Link>
            </LinkContainer>
            <LinkContainer to ='/Cart'>
              <Nav.Link><i className= "fas fa-shopping-cart"></i>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to ='/Login'>
              <Nav.Link><i className= "fas fa-user"></i>Login</Nav.Link>
            </LinkContainer>
           
          </Nav>
       
        </Navbar.Collapse>
        </Container>
      
     </Navbar>
      
    </header>
  )
}

export default Header
