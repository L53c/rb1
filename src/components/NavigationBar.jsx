import React from 'react'
import { Link, Router } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components'

const Styles = styled.div`
  .navbar {
    background-color: rgb(0 0 0 / 90%);
  }
  .navbar-brand,
  .navbar-nav,
  .nav-link{
    color: rgb(255 255 255 / 50%) !important;
    &:hover{
      color: #fff !important;
    }
  }
`;

const NavigationBar = () => {
    return(
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/">Code Life</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
              {/* <Router>
                <Nav.Item><Link to={'/'}>Home</Link></Nav.Item>
                <Nav.Item><Link to={'/about'}>About</Link></Nav.Item>
                <Nav.Item><Link to={'/contact'}>Contact</Link></Nav.Item>
              </Router> */}
            </Nav>
            </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
};

export default NavigationBar;