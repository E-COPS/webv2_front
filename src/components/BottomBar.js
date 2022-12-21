import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './BottomBar.module.css';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";


function BottomBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className={styles.navStyle}>
      <Container className='px-0'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* icons */}
          <Nav className="me-auto align-items-center">
            <Nav.Link className={styles.navText} href='https://www.instagram.com/ecops_ewha/'>
              <FaInstagram/>
            </Nav.Link>
            <Nav.Link className={styles.navText} href='https://github.com/E-COPS'>
              <FaGithub/>
            </Nav.Link>
            <Nav.Link className={styles.navText} href='https://blog.naver.com/ecopsecops'>
              <FaRegEnvelope/>
            </Nav.Link>
            <Nav.Link className={styles.navText} href='https://forms.gle/57wwA6rc2FGFsjK79'>
              <img src='../images/blog-icon.png' className={styles.iconImg}/>
            </Nav.Link>
            <Nav.Link className={styles.navText} href='https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=ewha.ecops@gmail.com'>
              <img src='../images/feedback-icon.png' className={styles.iconImg}/>
            </Nav.Link>
          </Nav>
          {/* text link */}
          <Nav className='align-items-center'>
            <Nav.Link className={styles.navText} href="#" style={{fontSize: 13}}>☑️ E-COPS와 함께하기 위해 꼭 지켜주세요.</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BottomBar;