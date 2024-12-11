
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "../NavBar.css";



const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" style={{ background: 'linear-gradient(90deg, #1A0A53, #4C1C94)', padding: '10px' }}>
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="src\assets\Design_sans_titre3.png" 
            alt="Logo"
            width="50"
            height="50"
            style={{ marginLeft: '-20px' }}
          />
          
        </Navbar.Brand>

        {/* Bouton de menu pour mobile */}
        <Navbar.Toggle aria-controls="navbar-content" />

        {/* Contenu */}
        <Navbar.Collapse id="navbar-content">
          {/* Liens au centre */}
          <Nav className="mx-auto">
            <Nav.Link href="#horror" style={{ color: '#FFF', margin: '0 10px' }}>Horreur</Nav.Link>
            <Nav.Link href="#postapocalyptic" style={{ color: '#FFF', margin: '0 10px' }}>Post-Apocalyptique</Nav.Link>
            <Nav.Link href="#home" style={{ color: '#FFF', margin: '0 10px' }}>A domicile</Nav.Link>
            <Nav.Link href="#mini-games" style={{ color: '#FFF', margin: '0 10px' }}>Mini-jeux</Nav.Link>
            <Nav.Link href="#contact" style={{ color: '#FFF', margin: '0 10px' }}>Contact</Nav.Link>
          </Nav>

          {/* Boutons à droite */}
          <div className="d-flex align-items-center">
            <Button variant="outline-light" style={{ marginRight: '10px' }}>Sign in</Button>
            <Button variant="outline-light" style={{ marginRight: '10px' }}>Register</Button>
            <Button variant="light" style={{
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              color: '#4C1C94'
            }}>
              P
            </Button>
           
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}

export default NavBar;