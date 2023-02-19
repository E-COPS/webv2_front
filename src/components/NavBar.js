import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo-img.png';
import logo_hover from '../images/logo-green-img.png';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { FiMenu } from 'react-icons/fi';
import styles from './NavBar.module.css';

function NavBar({ isWhite }) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={styles.navStyle}
      style={{ backgroundColor: isWhite && '#E5E5E5' }}
    >
      <Container className="align-items-center flex">
        {/* logo */}
        <Navbar.Brand href="/" className="">
          <img src={logo} className={styles.logoImg} alt="e-cops" />
          {/* Hover effect */}
          {/* <img src={logo_hover} class="hover-logo" className={styles.logoImg} alt="ecops-hover" /> */}
        </Navbar.Brand>
        {/* menu icon */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 mx-2">
          <FiMenu className={styles.menuIcon} />
        </Navbar.Toggle>
        {/* menu */}
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto align-items-center">
            <Nav.Link className={styles.navText} href="/">
              HOME
            </Nav.Link>
            {/* <Nav.Link
              className={styles.navText}
              // style={({ isActive }) => (isActive ? styles.activeStyle : {})}
              href="/program"
            >
              PROGRAM
            </Nav.Link>
            <Nav.Link className={styles.navText} href="/member">
              MEMBER
            </Nav.Link>
            <Nav.Link className={styles.navText} href="/activity">
              ACTIVITY
            </Nav.Link> */}

            <Nav.Link className={styles.navText} href="/recruitment">
              RECRUITMENT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
