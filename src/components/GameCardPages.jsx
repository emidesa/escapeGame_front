import { useNavigate } from "react-router-dom";
import '../GameCardPages.css';
const GameCardPages = ({ title, description, goal, imageSrc, priceTitle, priceDescription, buttonText }) => {
    const navigate = useNavigate();
    return <>
        <div style={styles.container}>
            {/* ma card principal */}
            <div style={styles.cardPrincipal}>
                <div style={styles.content}>
                    <h2 style={styles.title}>{title}</h2>
                    <p style={styles.description}>{description}</p>


                    {goal && <p style={styles.goal}>{goal}</p>}
                </div>
                <button className="button" onClick={() => navigate('/reservation')}>{buttonText}</button>
                </div>

            {/* tarifs */}
            <div style={styles.cardImageContainer}>
                <img src={imageSrc} alt={title} style={styles.cardImage} />
                <div style={styles.tariffsSection}>
                    <h3 style={styles.tariffsTitle}>{priceTitle}</h3>
                    <p style={styles.tariffsDescription}>{priceDescription}</p>
                </div>
            </div>
        </div>
    </>;
};

const styles = {
    container: {
        paddingTop: '400px',
        position: 'relative',
        width: '900px',
        margin: '50px auto',
    },
    cardPrincipal: {
        backgroundColor: '#AAA1C8',
        borderRadius: '30px',
        padding: '30px',
        paddingTop: '30px',
        paddingLeft: '350px', // fait de l'espace à gauche pour l'image
        boxShadow: '23px 20px 24px rgba(0, 0, 0, 0.7)',
        zIndex: 1,
        position: 'relative',
        height: '400px',
    },
    content: {
        color: '#1A0A53',
    },
    title: {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    description: {

        fontSize: '1rem',
        color: '#1A0A53',
        fontWeight: 'bold',
        marginTop: '20px', 
    },
    goal: {
        lineHeight: '1.5',
        fontSize: '1rem',
    },
    cardImageContainer: {
        position: 'absolute',
        top: '150px',
        left: '15px',
        zIndex: 2,
        textAlign: 'center',
    },
    cardImage: {
        width: '320px',
        height: '450px',
        borderRadius: '40px',
        objectFit: 'cover',
        boxShadow: '-4px -4px 8px rgba(0, 0, 0, 0.5)',
    },
    tariffsSection: {
        marginTop: '20px',
        backgroundColor: '#AAA1C8',
        padding: '15px',
        borderRadius: '10px',
        width: '220px',
        margin: '0 auto',
        textAlign: 'center',
    },
    tariffsTitle: {
        fontWeight: 'bold',
        fontSize: '1.1rem',
        marginBottom: '10px',
        color: '#192942',
    },
    tariffsDescription: {
        fontSize: '0.9rem',
        color: '#192942',
    },
};

export default GameCardPages;