
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
          <NavDropdown title="Nos Escapes Game en salle" id="basic-nav-dropdown" >
          <NavDropdown.Item href="#magie"  onClick={() => navigate('/magie')}>Magie</NavDropdown.Item>
              <NavDropdown.Item href="#science" onClick={() => navigate('/sciencefiction')}>Science-fiction</NavDropdown.Item>
              <NavDropdown.Item href="#fantasque"  onClick={() => navigate('/fantastique')}>Fantastique</NavDropdown.Item>
             <NavDropdown.Item href="#horror" onClick={() => navigate('/horreur')}>Horreur</NavDropdown.Item>
              <NavDropdown.Item href="#postapocalyptic" onClick={() => navigate('/post-apocalyptique')}>Post-Apocalyptique</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Nos Escapes Game à domicile" id="basic-nav-dropdown" >
          <NavDropdown.Item href="#wow" onClick={() => navigate('/wowpage')}>WoW (World of Wafcraft)</NavDropdown.Item>
              <NavDropdown.Item href="#lol" onClick={() => navigate('/lolpage')}>LoL (League of Legends)</NavDropdown.Item>
              <NavDropdown.Item href="#mystere" onClick={() => navigate('/mysterepage')}>Mystère</NavDropdown.Item>
              <NavDropdown.Item href="#mecanique" onClick={() => navigate('/mecaniquepage')}>Mécanique</NavDropdown.Item> 
             
              <NavDropdown.Item href="#enquete" onClick={() => navigate('enquetepage')}>Enquête</NavDropdown.Item>
          </NavDropdown>
            
            <Nav.Link href="#mini-games" style={{ color: '#FFF', margin: '0 10px' }} onClick={() => navigate('/mini-game')}>Mini-jeux</Nav.Link>
            <Nav.Link href="#contact" style={{ color: '#FFF', margin: '0 10px' }} onClick={() => navigate('/contact')}>Contact</Nav.Link>
           
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