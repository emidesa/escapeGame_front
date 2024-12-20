import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../App.css';
import '../StorytellingSection.css';
import CustomCarousel from '../components/Carousel';
import { Container } from 'react-bootstrap';
import Banner from "../components/Banner";
import EscapeGameCards from '../components/EscapeGameCards';
import gameCard1 from '../assets/Equipe-escape-game-postapocalyptique.jpg';
import gameCard2 from '../assets/Equipe-escape-game-horreur.jpg';
import gameCard3 from '../assets/Equipe_escape_game_investigation.jpg';
import NewsLetterSection from '../components/NewsLetterSection';
import backgroundImage from '../assets/HomePageBanner.webp'
import Equipe1Souvenirs from "../assets/Equipe_1_souvenirs.jpg";
import Equipe2Souvenirs from "../assets/Equipe_2_souvenirs.jpg";
import Equipe3Souvenirs from "../assets/equipe_3_souvenirs.jpg";
import Equipe4Souvenirs from "../assets/equipe_3_souvenirs.webp";
import Equipe5Souvenirs from "../assets/carouselStarwars1.jpg";
import Equipe6Souvenirs from "../assets/carouselStarWars2.jpg";
import Equipe7Souvenirs from "../assets/carouselGOF1.webp";
import Equipe8Souvenirs from "../assets/carouselGOF2.avif";
import Equipe9Souvenirs from "../assets/carouselHarryPotter1.jpg";
import Equipe10Souvenirs from "../assets/carouselHarryPotter2.jpg";
import Equipe11Souvenirs from "../assets/carouselHarryPotter3.avif";


const HomePage = () => {
  const games = [
    { image: gameCard1, title: "La Dernière Colonie", path:'/post-apocalyptique'},
    { image: gameCard2, title: "Le Manoir de l'épouvante", path:'/horreur'},
    { image: gameCard3, title: "L'Enigme de l'inspecteur disparu", path:'/enquetepage'},
  ];

  const carouselImages = [
    { src: Equipe1Souvenirs, alt: "Carousel Image 1" },
    { src: Equipe2Souvenirs, alt: "Carousel Image 2" },
    { src: Equipe3Souvenirs, alt: "Carousel Image 1" },
    { src: Equipe4Souvenirs, alt: "Carousel Image 2" },
    { src: Equipe5Souvenirs, alt: "Carousel Image 1" },
    { src: Equipe6Souvenirs, alt: "Carousel Image 2" },
    { src: Equipe7Souvenirs, alt: "Carousel Image 1" },
    { src: Equipe8Souvenirs, alt: "Carousel Image 2" },
    { src: Equipe9Souvenirs, alt: "Carousel Image 1" },
    { src: Equipe10Souvenirs, alt: "Carousel Image 2" },
    { src: Equipe11Souvenirs, alt: "Carousel Image 3" },
  ];

  return <>
    <Banner
      backgroundImage={backgroundImage}
      title="Enigmes Évadées"
      subtitle="Plongez dans l'aventure !"
    />

    <Container fluid className="p-0" style={{ backgroundColor: "#1A0A53", maxWidth: '100%' }}>
      <EscapeGameCards games={games} />

      <div className="storytelling-section">
        <h2 className="storytelling-title">Notre histoire, vos aventures !</h2>
        <div className="storytelling-text">
          <p className="storytelling-bonjour">Salut à toutes et à tous !</p>
          <br />Nous, c’est Théo et Pierre...
        </div>
        <br />Nous, c’est Théo et Pierre, deux meilleurs amis depuis... eh bien, depuis tellement longtemps qu’on a arrêté de compter !
        Notre amitié a grandi au fil des années autour de nos passions communes : les jeux vidéo comme League of Legends et World of Warcraft, les parties d’échecs interminables (bon, surtout pour Théo qui est incollable là-dessus), et les énigmes qui nous ont toujours fait cogiter jusqu’à pas d’heure.
        <br />Ici, chaque salle est une invitation à plonger dans un univers unique, à résoudre des mystères, et à repartir avec des souvenirs plein la tête. Mais aussi avec la possibilité inédite de vous évadez dans votre propre salon !
        <br /> Notre objectif ? Que vous vous amusiez autant que nous quand on crée ces aventures pour vous.
        <div className="storytelling-stats">
          <div className="storytelling-stat">
            <h3>72%</h3>
            <p>des joueurs d’escape game déclarent qu’ils reviennent pour l’expérience immersive unique qu’ils ne trouvent nulle part ailleurs.</p>
          </div>
          <div className="storytelling-stat">
            <h3>60 minutes </h3>
            <p>c’est le temps moyen nécessaire pour réussir un escape game... si vous êtes rapides !</p>
          </div>
          <div className="storytelling-stat">
            <h3>30%</h3>
            <p>des joueurs échouent dans les salles d'escape games, prouvant que la réflexion et la coopération sont essentielles !</p>
          </div>
        </div>
        <p className="storytelling-text">
          <br />Alors, prêt à relever le défi ? On vous attend avec impatience !
          <br />Théo & Pierre
          <br /> (si vous souhaitez en savoir plus sur nous)
        </p>
        <button className="storytelling-button">Cliquez-ici !</button>
      </div>

      <CustomCarousel images={carouselImages} />

      <NewsLetterSection />
    </Container >

  </>;
}

export default HomePage;