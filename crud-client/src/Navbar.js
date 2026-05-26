import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {

    const navigate =useNavigate();
    const handlesubmit =()=>{
        navigate("/");
    };
    return (
        <Navbar expand="lg" className="navbar">
            <Navbar.Brand className="ms-3">Placement Site</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    
                    <LinkContainer to="/home">
                    <Nav.Link className="me-3">Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                    <Nav.Link className="me-3">Contact</Nav.Link>
                    </LinkContainer>
                 
                    <LinkContainer to="/users">
                    <Nav.Link className="me-3">Users</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/">
                    <Nav.Link className="me-3">Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/register">
                    <Nav.Link className="me-3">Register</Nav.Link>
                    </LinkContainer>               
                    </Nav>
            </Navbar.Collapse>
            <button type="button4" onClick={handlesubmit}>Logout</button>
        </Navbar>
    )
}

export default NavigationBar;