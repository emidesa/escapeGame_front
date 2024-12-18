import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css'; 
import { useNavigate } from 'react-router-dom';
import CustomCarousel from "../components/Carousel";
import Equipe1Souvenirs from "../assets/equipe_6_souvenirs.jpg";
import Equipe2Souvenirs from "../assets/Equipe_7_souvenirs.webp";



const EnquetePage = () => {
    const navigate = useNavigate();
    
    const carouselImages = [
        { src : Equipe1Souvenirs, alt: "Carousel Image 3" },
        { src : Equipe2Souvenirs, alt: "Carousel Image 4" },
      ];

    return <>
    <div style={{ backgroundColor: '#1A0A53', color: 'white', padding: '20px' }}>
      {/* Banner Section */}
      <section style={{ textAlign: 'center', marginBottom: '50px' }}>
        <img
          src="src\assets\Equipe_escape_game_investigation.jpg" // Remplacez par le chemin de l'image de la bannière
          alt="L’Énigme de l’inspecteur disparu"
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
        />
        <h1 style={{ position: 'relative', top: '-250px', fontSize: '3em' }}>
        L’Énigme de l’inspecteur disparu
        </h1>
      </section>

      {/* Content Section */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          padding: '20px',
          backgroundColor: '#29205E',
          borderRadius: '15px',
          boxShadow: '30px 30px 10px -15px rgba(0, 0, 0, 0.25)',
        }}
        
      >
        {/* Text Content */}
        <div style={{ width: '60%', marginRight: '20px' }}>
          <h2>Entrez dans la peau d’un détective et résolvez un crime qui semble impossible ...</h2>
          <p style={{ lineHeight: '1.6', margin: '20px 0' }}>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500...
          </p>

          
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression...
          </p>
        </div>

        {/* Image Section */}
        <div style={{ flexShrink: 0 }}>
          <img
            src="src\assets\equipe-escape-game_illustration_enquete.jpg" // Remplacez par le chemin de l'image
            alt="Detective scene"
            style={{ borderRadius: '40px', width: '350px', height: '350px', boxShadow: '30px 30px 10px -15px rgba(0, 0, 0, 0.25)', position: 'relative', top: '-100px'}}
          /><h3>Tarifs 180€ à domicile</h3>
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
          120min 
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
          boxShadow: '-25px -5px 4px 0 rgba(0, 0, 0, 0.25)',
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
            height: '250px',
            borderRadius: '15px',
          }}
        ><i class="bi bi-calendar3" style={{ fontSize: '10rem' }}></i></div>
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
          }} onClick={() => navigate('/reservation')}>
          Réserver
        </button>
      </section>

      {/* Vos Souvenirs Section */}
      <section style={{ textAlign: 'center', margin: '50px 0' }}>
        <h2>Vos Souvenirs</h2>

        <CustomCarousel images={carouselImages} />
       
      </section>
   

      {/* Section : Détails Livraison */}
      <Container fluid className="py-5" style={{ color: "white" }}>
      {/* Section Détails livraison */}
      <Row className="justify-content-center mb-5">
        <Col md={10} className="p-4 rounded" style={{ backgroundColor: "#D3C5E5", color: "#1E0D3F", height:"400px" }}>
          <h2 className="fw-bold">Détails livraison</h2>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
          </p>
          <p>
            Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son
            contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset
            contenant des passages du Lorem Ipsum...
          </p>

          <h3 className="fw-bold mb-4 d-flex justify-content-center">Instructions pour la configuration</h3>
        </Col>
      </Row>

      {/* Section Instructions */}
      <Row className="text-center mb-5">
        

        {/* Première Card */}
        <Col md={4} className="d-flex justify-content-center mb-3">
          <Card
            className="p-4"
            style={{
              backgroundColor: "#5C23A5",
              color: "white",
              borderRadius: "15px",
              boxshadow: "15px -10px 4px rgba(0, 0, 0, 0.25)",
              position: "relative",
              top:"-60px"
            }}
          >
            <Card.Title className="fw-bold mb-3">1. Déballage</Card.Title>
            <Card.Text style={{ fontStyle: "italic" }}>
              <strong>
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                Le Lorem Ipsum est le faux texte standard de l'imprimerie.
              </strong>
            </Card.Text>
          </Card>
        </Col>

        {/* Deuxième Card */}
        <Col md={4} className="d-flex justify-content-center mb-3">
          <Card
            className="p-4"
            style={{
              backgroundColor: "#5C23A5",
              color: "white",
              borderRadius: "15px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Card.Title className="fw-bold mb-3">2. Installation</Card.Title>
            <Card.Text style={{ fontStyle: "italic" }}>
              <strong>
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                Le Lorem Ipsum est le faux texte standard de l'imprimerie.
              </strong>
            </Card.Text>
          </Card>
        </Col>

        {/* Troisième Card */}
        <Col md={4} className="d-flex justify-content-center mb-3">
          <Card
            className="p-4"
            style={{
              backgroundColor: "#5C23A5",
              color: "white",
              borderRadius: "15px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Card.Title className="fw-bold mb-3">3. Amusez-vous !</Card.Title>
            <Card.Text style={{ fontStyle: "italic" }}>
              <strong>
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                Le Lorem Ipsum est le faux texte standard de l'imprimerie.
              </strong>
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>

      {/* Section : Assistance en ligne */}
      <Container className="text-center my-4">
        <h5 className="fw-bold mb-3" style={{color: '#fff'}}>Assistance en ligne</h5>
        <Button
          variant="primary"
          style={{
            borderRadius: "20px",
            padding: "10px 40px",
            backgroundColor: "#A58DB3",
            border: "none",
          }}
        > <i className="bi bi-headset" style={{ fontSize: '1rem' }}></i> Horaire : 9H 12H – 14H 00H</Button>
      </Container>
     </div>
    </>;
}
 
export default EnquetePage;