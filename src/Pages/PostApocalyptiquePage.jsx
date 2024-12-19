import Banner from "../components/Banner";
import backgroundImage from '../assets/depositphotos_63554907-stock-illustration-abstract-biohazard-symbol-dark-red.jpg';
import backgroundImage2 from '../assets/equipe-escape-game_illustration-apocalypse.jpg';
import Equipe3Souvenirs from "../assets/equipe_3_souvenirs.jpg";
import Equipe4Souvenirs from "../assets/equipe_3_souvenirs.webp";
import CustomCarousel from '../components/Carousel';
import ChallengeBadge from "../components/ChallengeBadge";
import BookingPanel from "../components/BookingPanel";
import GameCardPages from "../components/GameCardPages";
import GamePlaceholderCard from "../components/GamePlaceholderCard";


const PostApocalyptiquePage = () => {

    const carouselImages = [
        { src: Equipe3Souvenirs, alt: "Carousel Image 1" },
        { src: Equipe4Souvenirs, alt: "Carousel Image 2" },
    ];
    return <>
        <Banner
            backgroundImage={backgroundImage}
            title="La Dernière Colonie"
        />
        <div style={{ margin: '30px auto', padding: '0 20px', maxWidth: '1200px' }}>
            <GameCardPages
                title="Sauvez ce qu’il reste de l’humanité !"
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

export default PostApocalyptiquePage;