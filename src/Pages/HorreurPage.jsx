import Banner from "../components/Banner";
import backgroundImage from '../assets/Equipe-escape-game-horreur.jpg';
import backgroundImage2 from '../assets/equipe-escape-game_illustration-horreur2.jpg';
import Equipe1Souvenirs from "../assets/equipe_4_souvenirs.png";
import Equipe2Souvenirs from "../assets/equipe_5_souvenirs.png";
import CustomCarousel from '../components/Carousel';
import { useNavigate } from "react-router-dom";
import ChallengeBadge from "../components/ChallengeBadge";
import BookingPanel from "../components/BookingPanel";
import GameCardPages from "../components/GameCardPages";
import GamePlaceholderCard from "../components/GamePlaceholderCard";



const HorreurPage = () => {
  const navigate = useNavigate();

  const carouselImages = [
    { src: Equipe1Souvenirs, alt: "Carousel Image 1" },
    { src: Equipe2Souvenirs, alt: "Carousel Image 2" },
  ];

  return <>
    <Banner
      backgroundImage={backgroundImage}
      title="Le Manoir de l'épouvante"
    />
    <div style={{ margin: '30px auto', padding: '0 20px', maxWidth: '1200px' }}>
      <GameCardPages
        title="Oserez-vous explorer ce manoir hanté et échapper aux secrets qui y rôdent ?  !"
        description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
        goal="Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
        imageSrc={backgroundImage2}
        priceTitle="Tarifs"
        priceDescription="A partir de 25 euros par/pers (10 joueurs.max)"
        buttonText="Réservez ici !"
      />


      <ChallengeBadge stars={3} duration="90 min" />

      <BookingPanel />

      <CustomCarousel images={carouselImages} />

      <GamePlaceholderCard />
    </div>
  </>;
}

export default HorreurPage;