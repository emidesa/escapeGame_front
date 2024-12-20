import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css'; 
import { useNavigate } from 'react-router-dom';
import CustomCarousel from "../components/Carousel";
import Equipe1Souvenirs from "../assets/equipe_6_souvenirs.jpg";
import Equipe2Souvenirs from "../assets/Equipe_7_souvenirs.webp";


const LolPage  = () => {
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
              src="src\assets\Lol2.png" 
              alt="La Légende de l'Arène"
              style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
            />
            <h1 style={{ position: 'relative', top: '-250px', fontSize: '3em' }}>
            La Légende de l'Arène
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
              <h2>Explorez l’univers fascinant de League of Legends et déjouez les énigmes pour accomplir votre mission dans cet escape game épique !</h2>
              <p style={{ lineHeight: '1.6', margin: '20px 0' }}>
              Vous êtes invoqués dans l'arène mythique de Runeterra, où les champions de différentes factions se battent pour la suprématie. Les mystères de l'Arène et les défis des champions vous attendent. Votre mission :
                prouver votre valeur et devenir une légende.
              </p>
    
              
              <p>
              Affronter des épreuves stratégiques, résoudre des énigmes liées aux pouvoirs des champions, et surmonter les obstacles des différentes voies de l'Arène. Seul un groupe coordonné et puissant peut
espérer émerger en tant que légende de League of Legends. Êtes-vous prêt à relever le défi?
              </p>
            </div>
    
            {/* Image Section */}
            <div style={{ flexShrink: 0 }}>
              <img
                src="src\assets\Lol1.jpg" 
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
                    color: index < 4 ? '#FFD700' : '#A49DBF',
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
              90min 
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
              Réservez ici !
            </button>
          </section>
    
          {/* Vos Souvenirs Section */}
          <section style={{ textAlign: 'center', margin: '50px 0' }}>
    
            <CustomCarousel images={carouselImages} />
           
          </section>
       
    
          {/* Section : Détails Livraison */}
          <Container fluid className="py-5" style={{ color: "white" }}>
          {/* Section Détails livraison */}
          <Row className="justify-content-center mb-5">
            <Col md={10} className="p-4 rounded" style={{ backgroundColor: "#D3C5E5", color: "#1E0D3F", height:"500px", boxShadow: "-40px -15px 4px rgba(0, 0, 0, 0.25)", }}>
              <h2 className="fw-bold">Détails livraison</h2>
              <p> Votre escape game à domicile est conçu pour être facilement livré et prêt à jouer.
              Voici les informations concernant la livraison :</p>
    
              <ul>
                    <li><strong>Mode de livraison :</strong> Livraison à domicile via transporteur sécurisé ou retrait en point relais.</li>
                    <li><strong>Contenu de la boîte :</strong>
                      <ul>
                        <li>1. Instructions pour le déroulement du jeu.</li>
                        <li>2. Accessoires nécessaires (cartes, énigmes, décorations).</li>
                        <li>3. Support numérique (QR codes, liens web ou clé USB avec vidéos/audios).</li>
                      </ul>
                    </li>
                    <p></p>
                    <li><strong>Délai de livraison :</strong> Entre 3 à 5 jours ouvrés après la commande.</li>
                    <li><strong>Contact en cas de problème :</strong> Une assistance est disponible via un numéro de téléphone ou un e-mail dédié.</li>
                  </ul>
    
              <h3 className="fw-bold mb-4 d-flex justify-content-center" style={{color:"#192942"}}>Instructions pour la configuration</h3>
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
                  width:"350px",
                  height:"350px",
                  boxShadow: "15px -10px 4px rgba(0, 0, 0, 0.25)",
                  position: "relative",
                  top:"-150px",
                  marginLeft:"30px"
                }}
              >
                <Card.Title className="fw-bold mb-3" style={{color: '#fff'}}>1. Déballage</Card.Title>
                <Card.Text style={{ fontStyle: "italic" }}>
                  <strong>
                  Ouvrez soigneusement la boîte et vérifiez que tous les éléments listés dans le guide d'inventaire sont présents. Consultez le guide d’installation inclus pour avoir une vue d’ensemble des étapes à suivre.
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
                  width:"350px",
                  height:"350px",
                  boxShadow: "15px -10px 4px rgba(0, 0, 0, 0.25)",
                   position: "relative",
                  top:"-150px",
                  marginLeft:"30px"
                }}
              >
                <Card.Title className="fw-bold mb-3" style={{color: '#fff'}}>2. Installation</Card.Title>
                <Card.Text style={{ fontStyle: "italic" }}>
                  <strong>
                  Choisissez votre espace de jeu. Positionnez les accessoires, cachez les indices et thématisez la pièce avec les décorations incluses. Testez les énigmes avant l’arrivée des joueurs.
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
                  width:"320px",
                  height:"350px",
                  boxShadow: "15px -10px 4px rgba(0, 0, 0, 0.25)",
                   position: "relative",
                  top:"-150px"
                }}
              >
                <Card.Title className="fw-bold mb-3" style={{color: '#fff'}}>3. Amusez-vous !</Card.Title>
                <Card.Text style={{ fontStyle: "italic" }}>
                  <strong>
                  Accueillez vos joueurs et démarrez l’escape game. Suivez le guide pour donner des indices si besoin, et partagez un moment convivial avec vos proches !
                  </strong>
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
    
          {/* Section : Assistance en ligne */}
          <Container className="text-center my-4 mb-5">
            <h5 className="fw-bold mb-3" style={{color: '#fff'}}>Assistance en ligne</h5>
            <Button
              variant="primary"
              style={{
                borderRadius: "20px",
                padding: "10px 40px",
                backgroundColor: "#A58DB3",
                border: "none",
              }}
              onClick={() => navigate('/contact')}
            > <i className="bi bi-headset" style={{ fontSize: '1rem' }} ></i> Horaire : 9H 12H – 14H 00H</Button>
          </Container>
         </div>
        </>;
}
 
export default LolPage;