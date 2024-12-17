import Banner from "../components/Banner";
import backgroundImage from '../assets/Equipe-escape-game-horreur.jpg'
import Equipe1Souvenirs from "../assets/Equipe_1_souvenirs.jpg";
import Equipe2Souvenirs from "../assets/Equipe_2_souvenirs.jpg";
import { useNavigate } from "react-router-dom";



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

      {/* Content Section */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          padding: '30px',
          backgroundColor: '#29205E',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Text Content */}
        <div style={{ width: '60%', marginRight: '20px' }}>
          <h2>Oserez-vous explorer ce manoir hanté et échapper aux secrets qui y rôdent ? </h2>
          <p style={{ lineHeight: '1.6', margin: '20px 0' }}>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500...
          </p>

          <h3>Tarifs</h3>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression...
          </p>
        </div>

        {/* Image Section */}
        <div style={{ flexShrink: 0 }}>
          <img
            src="/path/to/image.jpg" // Remplacez par le chemin de l'image
            alt="Post-apocalyptic scene"
            style={{ borderRadius: '15px', width: '300px', height: '400px', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Difficulty Section */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#29205E',
          padding: '20px',
          margin: '40px auto',
          borderRadius: '15px',
          maxWidth: '600px',
        }}
      >
        <h3 style={{ margin: 0 }}>Difficulté :</h3>
        <div>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              style={{
                fontSize: '2em',
                color: index < 3 ? '#FFD700' : '#A49DBF',
              }}
            >
              ★
            </span>
          ))}
        </div>
        <div
          style={{
            backgroundColor: '#A49DBF',
            padding: '10px 20px',
            borderRadius: '30px',
            color: '#1A0A53',
            fontWeight: 'bold',
          }}
        >
          Durée
        </div>
      </section>

      {/* Reservation Section */}
      <section
        style={{
          textAlign: 'center',
          backgroundColor: '#6A2C9B',
          padding: '40px',
          borderRadius: '15px',
          margin: '50px auto',
          maxWidth: '800px',
        }}
      >
        <h3>Vous souhaitez réserver ?</h3>
        <p>
          Vous pouvez consulter les disponibilités dès maintenant et réserver en cliquant sur le bouton ci-dessous.
        </p>
        <div
          style={{
            backgroundColor: '#29205E',
            margin: '20px auto',
            width: '100%',
            maxWidth: '600px',
            height: '200px',
            borderRadius: '15px',
          }}
        ></div>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#6A2C9B',
            color: 'white',
            fontSize: '1em',
            borderRadius: '30px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            marginTop: '20px',
          }} onClick={() => navigate('/reservation')}>
          Réserver
        </button>
      </section>

      {/* Vos Souvenirs Section */}
      <section style={{ textAlign: 'center', margin: '50px 0' }}>
        <h2>Vos Souvenirs</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '30px',
          }}
        >
          <div>
            <img
              src="/path/to/souvenir1.jpg" // Remplacez par le chemin de l'image 1
              alt="Souvenir 1"
              style={{ borderRadius: '15px', width: '300px', height: '200px' }}
            />
          </div>
          <div>
            <img
              src="/path/to/souvenir2.jpg" // Remplacez par le chemin de l'image 2
              alt="Souvenir 2"
              style={{ borderRadius: '15px', width: '300px', height: '200px' }}
            />
          </div>
        </div>
      </section>
  
    
    </>;
}
 
export default HorreurPage;