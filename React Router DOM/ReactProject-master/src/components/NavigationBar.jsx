import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavigationBar() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid >
                    <Navbar.Brand href="#"> <img src="src/components/logo.png"  width="80px" height="60px" className="d-inline-block align-top mx-3" alt=" logo" />
                    <img src="src/components/orawarelogo.png"  width="50%" height="70" className="d-inline-block align-top mx-5" alt="Oraware logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            
                           
                        </Nav>
                        {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form> */}
                        
                    </Navbar.Collapse>
    

      {/* cart */}
      <a className="icon-link icon-link-hoverd-inline-flex me-4" style={{ "--bs-icon-link-transform": "translate3d(0, -.15rem, 0)" }} href="#">
        <svg xmlns="http://www.w3.org/2000/svg" color="black" width="15" height="28" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </a>

      {/* track order */}
      <a className="icon-link icon-link-hoverd-inline-flex me-4" style={{ "--bs-icon-link-transform": "translate3d(0, -.15rem, 0)" }} href="#">
        <svg xmlns="http://www.w3.org/2000/svg" color="black" width="15" height="28" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
          <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
        </svg>
      </a>

      {/* Profile */}
      <a className="icon-link icon-link-hoverd-inline-flex me-4" style={{ "--bs-icon-link-transform": "translate3d(0, -.15rem, 0)" }} href="#">
        <svg xmlns="http://www.w3.org/2000/svg" color="black" width="15" height="28" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </svg>
      </a>

      {/* search */}
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
    
                </Container>
            </Navbar>
            <div className="alert alert-secondary" role="alert">
  <strong style={{ textAlign: 'justify' }}>Free shipping on all orders above PKR 2000</strong> 
</div>
<section id="navbar"></section>
        </>
    )
}

export default NavigationBar