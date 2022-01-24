import React from "react";
import {Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import CartWidget from "./CartWidget";
import Logo from '../logo.png';  //  src/images

const NavBar = () =>{
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            //alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Electronica</Nav.Link>
                            <Nav.Link href="#pricing">Arduino</Nav.Link>
                            <Nav.Link href="#features">STM32 Boards</Nav.Link>
                            <Nav.Link href="#pricing">ESP Boards</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">
                                <CartWidget></CartWidget>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar