import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../App.css'; 
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Banner from "../components/Banner";
import EscapeGameCards from '../components/EscapeGameCards';
import MemoriesSection from '../components/MemoriesSection';
import NewsLetterSection from '../components/NewsLetterSection';
import backgroundImage from '../assets/HomePageBanner.webp'

const HomePage = () => {
  const games = [
    { image: "/path/to/image1.jpg", title: "Escape Game 1" },
    { image: "/path/to/image2.jpg", title: "Escape Game 2" },
    { image: "/path/to/image3.jpg", title: "Escape Game 3" },
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
      
      <Container fluid style={{ backgroundColor: "#1A0A53", padding: '0', maxWidth: '100%' }}>
        <EscapeGameCards games={games} />
        <MemoriesSection memories={memories}/>
        <NewsLetterSection />
      </Container>

    </>;
}
 
export default HomePage;