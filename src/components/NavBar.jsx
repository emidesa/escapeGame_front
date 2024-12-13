
import { Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "../NavBar.css";
import HorreurPage from '../Pages/HorreurPage';



const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" style={{ background: 'linear-gradient(90deg, #1A0A53, #3A16B9)', padding: '10px' }}>
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
            <Nav.Link href="#horror" style={{ color: '#FFF', margin: '0 10px' }} onClick={() => navigate('/horreur')}>Horreur</Nav.Link>
            <Nav.Link href="#postapocalyptic" style={{ color: '#FFF', margin: '0 10px' }} onClick={() => navigate('/post-apocalyptique')}>Post-Apocalyptique</Nav.Link>
            <Nav.Link href="#home" style={{ color: '#FFF', margin: '0 10px' }} onClick={() => navigate('/athome')}>A domicile</Nav.Link>
            <Nav.Link href="#mini-games" style={{ color: '#FFF', margin: '0 10px' }} onClick={() => navigate('/mini-game')}>Mini-jeux</Nav.Link>
            <Nav.Link href="#contact" style={{ color: '#FFF', margin: '0 10px' }} onClick={() => navigate('/contact')}>Contact</Nav.Link>
           <NavDropdown title="Escape" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#egype"  onClick={() => navigate('/egypteantique')}>Égypte antique</NavDropdown.Item>
              <NavDropdown.Item href="#science" onClick={() => navigate('/sciencefiction')}>Science-fiction</NavDropdown.Item>
              <NavDropdown.Item href="#voyage"  onClick={() => navigate('/voyagetemporel')}>Voyage temporel</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Magie</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fantastique</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mystère</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Aventure sous-marine</NavDropdown.Item>
              </NavDropdown>
              </Nav>
          
         

          {/* Boutons à droite */}
          <div className="d-flex align-items-center">
            <Button variant="outline-light" style={{ marginRight: '10px' }} onClick={() => navigate('/login')}>Connectez-vous</Button>
            <Button variant="outline-light" style={{ marginRight: '10px' }} onClick={() => navigate('/login')}>Inscription</Button>
            <Button variant="light" style={{
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              color: '#4C1C94'
            }} onClick={() => navigate('/Profil')}>
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