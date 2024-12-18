import Banner from "../components/Banner";
import backgroundImage from '../assets/Equipe-escape-game-horreur.jpg'
import Equipe1Souvenirs from "../assets/Equipe_1_souvenirs.jpg";
import Equipe2Souvenirs from "../assets/Equipe_2_souvenirs.jpg";
import CustomCarousel from '../components/Carousel';
import { useNavigate } from "react-router-dom";
import ChallengeBadge from "../components/ChallengeBadge";
import BookingPanel from "../components/BookingPanel";
import GameCardPages from "../components/GameCardPages";






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
    <div style={{ margin: '30px auto', padding: '0 20px', maxWidth:'1200px'}}>
      <GameCardPages
        title="Sauvez ce qu'il reste de l'humanité !"
        description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page..."
        imageSrc={backgroundImage}
        priceTitle="Tarifs"
        priceDescription="Les tarifs commencent à partir de 20€/personne."
        buttonText="Réservez ici !"
      />

    <ChallengeBadge stars={3} duration="60 min" />

    <BookingPanel />

    <CustomCarousel images={carouselImages} />
    </div>
  </>;
}

export default HorreurPage;