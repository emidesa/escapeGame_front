const GamePlaceholderCard = () => {
    const styles = {
        container: {
            backgroundColor: '#AAA1C8',
            borderRadius: '15px',
            padding: '20px',
            boxShadow: '-15px -4px 30px rgba(0, 0, 0, 0.7)',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '30px auto',
            marginBottom: '150px',
        },
        title: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#192942',
            marginBottom: '10px',
        },
        description: {
            fontSize: '1rem',
            color: '#1A0A53',
            marginBottom: '20px',
        },
        placeholder: {
            backgroundColor: '#D1C4E9',
            height: '300px',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#6A5B93',
            fontSize: '1.2rem',
            fontStyle: 'italic',
        },
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.title}>Jeu en cours de développement</h3>
            <p style={styles.description}>
                Découvrez prochainement un tout nouveau défi captivant pour tester vos talents de détective !
            </p>
            <div style={styles.placeholder}>
                <p>Emplacement du futur jeu</p>
            </div>
        </div>
    );
};

export default GamePlaceholderCard;
