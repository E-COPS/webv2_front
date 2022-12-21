import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className={styles.navStyle}>
      <Container className='px-0'>
        {/* logo */}
        <Navbar.Brand href="/">E-COPS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* menu */}
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
        <Nav className="ml-auto align-items-center">
          <Nav.Link className={styles.navText} href="/program">PROGRAM</Nav.Link>
          <Nav.Link className={styles.navText} href="/member">MEMBER</Nav.Link>
          <Nav.Link className={styles.navText} href="/activity">ACTIVITY</Nav.Link>
          <Nav.Link className={styles.navText} href="/recruitment">RECRUITMENT</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;