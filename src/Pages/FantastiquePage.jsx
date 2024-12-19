import Banner from "../components/Banner";
import backgroundImage from '../assets/bannièrefantastique.jpeg';
import backgroundImage2 from '../assets/gameofthronesdragon.jpg';
import Equipe7Souvenirs from "../assets/carouselGOF1.webp";
import Equipe8Souvenirs from "../assets/carouselGOF2.avif";
import CustomCarousel from '../components/Carousel';
import { useNavigate } from "react-router-dom";
import ChallengeBadge from "../components/ChallengeBadge";
import BookingPanel from "../components/BookingPanel";
import GameCardPages from "../components/GameCardPages";
import GamePlaceholderCard from "../components/GamePlaceholderCard";

const Fantastique = () => {
    const navigate = useNavigate();

    const carouselImages = [
        { src: Equipe7Souvenirs, alt: "Carousel Image 1" },
        { src: Equipe8Souvenirs, alt: "Carousel Image 2" },
    ];

    return <>
        <Banner
            backgroundImage={backgroundImage}
            title="Le Trône de Fer"
        />
        <div style={{ margin: '30px auto', padding: '0 20px', maxWidth: '1200px' }}>
            <GameCardPages
                title="Plongez dans les intrigues de Westeros !"
                description="Vous êtes des prétendants au Trône de Fer. Plongez dans les intrigues de Westeros en tant
que prétendants au Trône de Fer. Résolvez des énigmes,
déjouez des complots et trouvez le chemin vers le trône
pour revendiquer votre droit au pouvoir."
                goal="Objectif Final : Conquérir le Trône de Fer en surmontant
les obstacles et en résolvant les énigmes dans un décor
inspiré de Game of Thrones. Le temps presse, l'hiver
arrive. Êtes-vous prêt à jouer le jeu?"
                imageSrc={backgroundImage2}
                priceTitle="Tarifs"
                priceDescription="A partir de 20 euros par/pers (10 joueurs.max)"
                buttonText="Réservez ici !"
            />


            <ChallengeBadge stars={3} duration="60 min" />

            <BookingPanel />

            <CustomCarousel images={carouselImages} />

            <GamePlaceholderCard />
        </div>

    </>;
}

export default Fantastique;