import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../App.css'; 
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const HomePage = () => {
    return <>

    <h1>EN COURS ..</h1>

    <div>
      {/* Section bannière */}
      <div className="banner" style={{ backgroundImage: 'url(/path/to/banner-image.jpg)' }}>
        <div className="overlay">
          <h1>Enigmes Évadées</h1>
          <p>L'Énigme de l'inspecteur disparu</p>
        </div>
      </div>

      {/* Section des cartes */}
      <Container className="text-center my-5">
        <Row>
          <Col md={4}>
            <Card className="game-card">
              <Card.Img src="/path/to/image1.jpg" alt="La Dernière Colonie" />
              <Card.Body>
                <Card.Title>La Dernière Colonie</Card.Title>
              </Card.Body>
            </Card>
            {/* Bouton en dehors de la carte */}
            <div className="outside-button-container">
              <Button variant="primary" className="btn-pill mt-3">Voir plus</Button>
            </div>
          </Col>
          <Col md={4}>
            <Card className="game-card">
              <Card.Img src="/path/to/image2.jpg" alt="Le Manoir de l'épouvante" />
              <Card.Body>
                <Card.Title>Le Manoir de l'épouvante</Card.Title>
              </Card.Body>
            </Card>
            {/* Bouton en dehors de la carte */}
            <div className="outside-button-container">
              <Button variant="primary" className="btn-pill mt-3">Voir plus</Button>
            </div>
          </Col>
          <Col md={4}>
            <Card className="game-card">
              <Card.Img src="/path/to/image3.jpg" alt="Mystère inconnu" />
              <Card.Body>
                <Card.Title>Une Enquête Mystérieuse</Card.Title>
              </Card.Body>
            </Card>
            {/* Bouton en dehors de la carte */}
            <div className="outside-button-container">
              <Button variant="primary" className="btn-pill mt-3">Voir plus</Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Section texte avec statistiques */}
      <div className="stats-section py-5 text-center" style={{ backgroundColor: '#1A0A53', color: '#FFF' }}>
        <Container>
          <h2>Nos Escape Games</h2>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
          </p>
          <Row className="mt-4">
            <Col md={4}>
              <h3>18%</h3>
              <p>Lorem Ipsum</p>
            </Col>
            <Col md={4}>
              <h3>120</h3>
              <p>Lorem Ipsum</p>
            </Col>
            <Col md={4}>
              <h3>54</h3>
              <p>Lorem Ipsum</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    
    
    </>;
}
 
export default HomePage;