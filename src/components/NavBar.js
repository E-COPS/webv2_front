import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" className={styles.NavStyle}>
      <Container>
        {/* logo */}
        <Navbar.Brand href="/">E-COPS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* menu */}
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
        <Nav className="ml-auto align-items-center">
          <Nav.Link className='mx-3' href="/program">PROGRAM</Nav.Link>
          <Nav.Link className='mx-3' href="/member">MEMBER</Nav.Link>
          <Nav.Link className='mx-3' href="/activity">ACTIVITY</Nav.Link>
          <Nav.Link className='mx-3' href="/recruitment">RECRUITMENT</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;