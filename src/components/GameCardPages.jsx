const GameCardPages = ({  title,  description,  imageSrc,  priceTitle, tariffsText,  buttonText }) => {
    return <>
        <div style={styles.container}>
            {/* Card principale */}
            <div style={styles.cardPrincipal}>
                <div style={styles.content}>
                    <h2 style={styles.title}>{title}</h2>
                    <p style={styles.description}>{description}</p>
                </div>

                {/* Bouton en bas à droite */}
                <button style={styles.button}>{buttonText}</button>
            </div>

            {/* Card image avec section tarifs */}
            <div style={styles.cardImageContainer}>
                <img src={imageSrc} alt={title} style={styles.cardImage} />
                <div style={styles.tariffsSection}>
                    <h3 style={styles.tariffsTitle}>{priceTitle}</h3>
                    <p style={styles.tariffsDescription}>{tariffsText}</p>
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
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
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
        lineHeight: '1.5',
        fontSize: '1rem',
    },
    button: {
        backgroundImage: 'linear-gradient(to right, #9929BD, #701E8A, #461357)', // backgroundImage dans la page.jsx ne fonctionne pas si on veut un dégradé de pluieurs couleurs
        color: '#FFF8F0',
        border: 'none',
        borderRadius: '10px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '1rem',
        position: 'absolute',
        bottom: '-20px', // pour que mon bouton soit à moitié dehors de ma card principale
        left: '60%', // pour placer mon bouton comme je le souhaite
        transform: 'translateX(-50%)', // vient ajuster mon bouton
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
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
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
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