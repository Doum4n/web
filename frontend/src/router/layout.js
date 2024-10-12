import { Outlet, Link } from "react-router-dom";
import { Nav, NavDropdown, NavItem, Row, Col, Button } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import {Container} from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import React, { useState } from 'react';
import { signInWithPopup } from "firebase/auth";

import {auth} from '../config/firebase'
import { GoogleProvider } from "../config/firebase";

const Layout = () => {

  const [show, setShow] = useState();

  const HandlerShow = () => setShow(true);
  const HandlerClose = () => setShow(false);

  const SignInWithGoogle = async () => {
    try{
      await signInWithPopup(auth, GoogleProvider);
    }catch(e){
      console.error(e);
    }
  }

  return (
    <>
     <Navbar className="border rouded bg-light">
        <Container fluid>
              <Navbar.Brand>brand</Navbar.Brand>
              <Navbar.Collapse>
              <Nav>
                <Nav.Link href='#home'>
                  Home
                </Nav.Link>
                <NavDropdown title='Dropdown'>
                  <NavItem>
                    <Button>
                      asd
                    </Button>
                  </NavItem>
                </NavDropdown>
              </Nav>
              </Navbar.Collapse>

          <Row>
          <Col>
            <Button variant="primary" onClick={SignInWithGoogle}>
              Account
            </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>

    <Outlet/>
    </>
  )
};

export default Layout;
