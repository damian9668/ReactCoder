import React from "react";
import {Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import CartWidget from "./Cart/CartWidget";
import Logo from '../logo.png';  //  src/images
import {Link} from "react-router-dom";

const NavBar = () =>{
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/categoria/electronica">Electronica</Nav.Link>
                            <Nav.Link as={Link} to="/categoria/arduino">Arduino</Nav.Link>
                            <Nav.Link as={Link} to="/categoria/stm">STM32 Boards</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} eventKey={2} to="/cart">
                                <CartWidget/>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar