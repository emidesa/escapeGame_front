import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../App.css'; 
import { Container, Row, Col, Button } from 'react-bootstrap';
import Banner from "../components/Banner";
import EscapeGameCards from '../components/EscapeGameCards';
import gameCard1 from '../assets/Equipe-escape-game-postapocalyptique.jpg';
import gameCard2 from '../assets/Equipe-escape-game-horreur.jpg';
import gameCard3 from '../assets/Equipe_escape_game_investigation.jpg';
import MemoriesSection from '../components/MemoriesSection';
import NewsLetterSection from '../components/NewsLetterSection';
import backgroundImage from '../assets/HomePageBanner.webp'

const HomePage = () => {
  const games = [
    { image: gameCard1, title: "La Dernière Colonie" },
    { image: gameCard2, title: "Le Manoir de l'épouvante" },
    { image: gameCard3, title: "L'Enigme de l'inspecteur disparu" },
];

const memories = [
    { image: "/path/to/memory1.jpg", alt: "Souvenir 1" },
    { image: "/path/to/memory2.jpg", alt: "Souvenir 2" },
];
    return <>
      <Banner 
        backgroundImage={ backgroundImage}
        title="Enigmes Évadées"
        subtitle="Plongez dans l'aventure !"
      />
      
      <Container fluid style={{ backgroundColor: "#1A0A53",maxWidth: '100%' }}>
        <EscapeGameCards games={games} />
        <MemoriesSection memories={memories}/>
        <NewsLetterSection />
      </Container>

    </>;
}
 
export default HomePage;