import Banner from "../components/Banner";
import backgroundImage from '../assets/bannerEpreuvedesSorciers.jpeg';
import backgroundImage2 from '../assets/poudlard.avif';
import Equipe9Souvenirs from "../assets/carouselHarryPotter1.jpg";
import Equipe10Souvenirs from "../assets/carouselHarryPotter2.jpg";
import Equipe11Souvenirs from "../assets/carouselHarryPotter3.avif";
import CustomCarousel from '../components/Carousel';
import { useNavigate } from "react-router-dom";
import ChallengeBadge from "../components/ChallengeBadge";
import BookingPanel from "../components/BookingPanel";
import GameCardPages from "../components/GameCardPages";
import GamePlaceholderCard from "../components/GamePlaceholderCard";

const Magie = () => {
    const navigate = useNavigate();

    const carouselImages = [
        { src: Equipe9Souvenirs, alt: "Carousel Image 1" },
        { src: Equipe10Souvenirs, alt: "Carousel Image 2" },
        { src: Equipe11Souvenirs, alt: "Carousel Image 3" },
    ];

    return <>
        <Banner
            backgroundImage={backgroundImage}
            title="L'Epreuve des Sorciers"
        />
        <div style={{ margin: '30px auto', padding: '0 20px', maxWidth: '1200px' }}>
            <GameCardPages
                title="Les mystères et la magie de l'école de
sorcellerie Poudlard vous attendent!"
                description="Vous recevez une lettre d'acceptation à
Poudlard et êtes convoqués pour participer à l'Épreuve
des Sorciers. Les mystères et la magie de l'école de
sorcellerie vous attendent, mais attention aux dangers qui
guettent dans l'ombre"
                goal="Objectif Final : Découvrir les secrets cachés de Poudlard,
maîtriser des sortilèges complexes, résoudre des énigmes
magiques, et échapper aux embûches qui se dressent sur
votre chemin. Affrontez l'Épreuve des Sorciers pour
prouver que vous êtes digne de faire partie du monde
magique de Harry Potter."
                imageSrc={backgroundImage2}
                priceTitle="Tarifs"
                priceDescription="A partir de 30 euros par/pers (10 joueurs.max)"
                buttonText="Réservez ici !"
            />


            <ChallengeBadge stars={3} duration="90 min" />

            <BookingPanel />

            <CustomCarousel images={carouselImages} />

            <GamePlaceholderCard />
        </div>

    </>;
}

export default Magie;