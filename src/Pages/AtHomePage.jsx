import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css'; 


const AtHomePage = () => {
    return <>
      <div style={{ backgroundColor: '#1A0A53', color: 'white', padding: '20px' }}>
      {/* Banner Section */}
      <section style={{ textAlign: 'center', marginBottom: '50px' }}>
        <img
          src="/path/to/banner.jpg" // Remplacez par le chemin de l'image de la bannière
          alt="L’Énigme de l’inspecteur disparu"
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
        />
        <h1 style={{ position: 'relative', top: '-50px', fontSize: '3em' }}>
        L’Énigme de l’inspecteur disparu
        </h1>
      </section>

      {/* Content Section */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          padding: '30px',
          backgroundColor: '#29205E',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Text Content */}
        <div style={{ width: '60%', marginRight: '20px' }}>
          <h2>Entrez dans la peau d’un détective et résolvez un crime qui semble impossible ...</h2>
          <p style={{ lineHeight: '1.6', margin: '20px 0' }}>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500...
          </p>

          <h3>Tarifs</h3>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression...
          </p>
        </div>

        {/* Image Section */}
        <div style={{ flexShrink: 0 }}>
          <img
            src="/path/to/image.jpg" // Remplacez par le chemin de l'image
            alt="Post-apocalyptic scene"
            style={{ borderRadius: '15px', width: '300px', height: '400px', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Difficulty Section */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#29205E',
          padding: '20px',
          margin: '40px auto',
          borderRadius: '15px',
          maxWidth: '600px',
        }}
      >
        <h3 style={{ margin: 0 }}>Difficulté :</h3>
        <div>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              style={{
                fontSize: '2em',
                color: index < 3 ? '#FFD700' : '#A49DBF',
              }}
            >
              ★
            </span>
          ))}
        </div>
        <div
          style={{
            backgroundColor: '#A49DBF',
            padding: '10px 20px',
            borderRadius: '30px',
            color: '#1A0A53',
            fontWeight: 'bold',
          }}
        >
          Durée
        </div>
      </section>

      {/* Reservation Section */}
      <section
        style={{
          textAlign: 'center',
          backgroundColor: '#6A2C9B',
          padding: '40px',
          borderRadius: '15px',
          margin: '50px auto',
          maxWidth: '800px',
        }}
      >
        <h3>Vous souhaitez réserver ?</h3>
        <p>
          Vous pouvez consulter les disponibilités dès maintenant et réserver en cliquant sur le bouton ci-dessous.
        </p>
        <div
          style={{
            backgroundColor: '#29205E',
            margin: '20px auto',
            width: '100%',
            maxWidth: '600px',
            height: '200px',
            borderRadius: '15px',
          }}
        ></div>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#6A2C9B',
            color: 'white',
            fontSize: '1em',
            borderRadius: '30px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            marginTop: '20px',
          }}
        >
          Réserver
        </button>
      </section>

      {/* Vos Souvenirs Section */}
      <section style={{ textAlign: 'center', margin: '50px 0' }}>
        <h2>Vos Souvenirs</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '30px',
          }}
        >
          <div>
            <img
              src="/path/to/souvenir1.jpg" // Remplacez par le chemin de l'image 1
              alt="Souvenir 1"
              style={{ borderRadius: '15px', width: '300px', height: '200px' }}
            />
          </div>
          <div>
            <img
              src="/path/to/souvenir2.jpg" // Remplacez par le chemin de l'image 2
              alt="Souvenir 2"
              style={{ borderRadius: '15px', width: '300px', height: '200px' }}
            />
          </div>
        </div>
      </section>
     


  
    <Container className="delivery-details">
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Détails livraison</Card.Title>
              <Card.Text>
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Instructions pour la configuration</Card.Title>
              <ol>
                <li>Déballage: Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</li>
                <li>Installation: Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</li>
                <li>Amusez-vous ! Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Assistance en ligne</Card.Title>
              <Card.Text>
                Si vous avez besoin d'aide supplémentaire, n'hésitez pas à nous contacter.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Resident Evil</Card.Title>
              <Card.Text>
                Pour plus d'informations sur Resident Evil, visitez notre site web.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>



    </div>
    
    </>;
}
 
export default AtHomePage;