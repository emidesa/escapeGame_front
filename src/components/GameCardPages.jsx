const GameCardPages = ({ title, description, imageSrc, priceTitle, priceDescription, buttonText }) => {
    return <>
        <div style={styles.container}>
            {/* carte avec l'image */}
            <div style={styles.cardImage}>
                <img src={imageSrc} alt={title} style={styles.image} />
            </div>

            {/* carte principale */}
            <div style={styles.cardPrincipal}>
                <div style={styles.textContainer}>
                    <h3 style={styles.priceTitle}>{priceTitle}</h3>
                    <p style={styles.priceDescription}>{priceDescription}</p>
                    <h2 style={styles.title}>{title}</h2>
                    <p style={styles.description}>{description}</p>
                    <button style={styles.button}>{buttonText}</button>
                </div>
            </div>
        </div>
    </>;
};

const styles = {
    container: {
        position: 'relative', // container des deux cartes
        width: '600px',
        margin: '100px auto',
        height: '350px',
    },
    cardImage: {
        position: 'absolute',
        top: '-20px', // décalage vers le haut
        left: '-40px', // chevauchement au niveau du coin gauche
        zIndex: 2, // la carte secondaire passe AU-DESSUS de la carte principale
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    },
    image: {
        width: '150px',
        height: '220px',
        borderRadius: '15px',
        objectFit: 'cover',
    },
    cardPrincipal: {
        backgroundColor: '#B08DFF',
        borderRadius: '20px',
        padding: '30px',
        paddingLeft: '150px', // décale mon texte à droite pour s'adapter à l'image
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        zIndex: 1, // en dessous de ma carte image
        position: 'relative',
        height: '100%',
    },
    textContainer: {
        color: '#1A0A53',
    },
    priceTitle: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    priceDescription: {
        fontSize: '0.9rem',
        marginBottom: '20px',
    },
    title: {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    description: {
        lineHeight: '1.5',
        marginBottom: '20px',
    },
    button: {
        backgroundColor: '#6A2C9B',
        color: '#FFF',
        border: 'none',
        borderRadius: '30px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '1rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    },
};


export default GameCardPages;
