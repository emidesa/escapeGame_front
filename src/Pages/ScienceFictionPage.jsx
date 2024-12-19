import Banner from "../components/Banner";
import backgroundImage from '../assets/360_F_896013358_Ix4lmCWCDf1hapIxdCpTIqFHZsAlzzV2.jpg';
import backgroundImage2 from '../assets/intérieur vaisseau star wars.jpg';
import Equipe5Souvenirs from "../assets/carouselStarwars1.jpg";
import Equipe6Souvenirs from "../assets/carouselStarWars2.jpg";
import CustomCarousel from '../components/Carousel';
import { useNavigate } from "react-router-dom";
import ChallengeBadge from "../components/ChallengeBadge";
import BookingPanel from "../components/BookingPanel";
import GameCardPages from "../components/GameCardPages";
import GamePlaceholderCard from "../components/GamePlaceholderCard";

const ScienceFiction = () => {
    const navigate = useNavigate();

    const carouselImages = [
        { src: Equipe5Souvenirs, alt: "Carousel Image 1" },
        { src: Equipe6Souvenirs, alt: "Carousel Image 2" },
    ];

    return <>
        <Banner
            backgroundImage={backgroundImage}
            title="La Quête du Jedi"
        />
        <div style={{ margin: '30px auto', padding: '0 20px', maxWidth: '1200px' }}>
            <GameCardPages
                title="L'avenir de la galaxie dépend de votre succès !"
                description="Vous êtes recrutés par la Rébellion pour accomplir une
mission cruciale dans la lutte contre l'Empire Galactique.
Votre destinée vous conduit à travers des planètes
lointaines et des vaisseaux spatiaux emblématiques.
L'avenir de la galaxie dépend de votre succès."
                goal="Objectif Final :
Accomplir la Quête du Jedi en résolvant des énigmes
intergalactiques, en évitant les pièges de l'Empire, et en
maîtrisant la Force. Que la Force soit avec vous dans cette
aventure palpitante à travers l'univers de Star Wars."
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

export default ScienceFiction;