import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        {/* logo */}
        <Navbar.Brand href="/">E-COPS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* menu */}
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
        <Nav className="ml-auto">
          <Nav.Link href="/program">Program</Nav.Link>
          <Nav.Link href="/member">Member</Nav.Link>
          <Nav.Link href="/activity">Activity</Nav.Link>
          <Nav.Link href="/recruitment">Recruitment</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;