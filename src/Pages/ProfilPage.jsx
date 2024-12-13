import React from 'react';
import '../App.css'; 



const ProfilPage = () => {
    return <>

    <div style={{ backgroundColor: '#aaa1c8', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#29205E', marginBottom: '60px' }}>Votre profil</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#29205E',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '2rem',
            marginBottom: '-40px',
            marginRight: '260px',
            border: '2px solid black',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
            position: 'absolute',
            top: '-20px',
          }}
        >
          E
        </div>

        {/* Profile Form */}
        <form
          style={{
            backgroundColor: '#4A2B8C',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
            width: '320px',
            marginTop: '40px',
          }}
        >
          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Nom</label>
            <input
              type="text"
              style={{
                width: '100%',
                padding: '8px 15px',
                borderRadius: '20px',
                border: 'none',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Prénom</label>
            <input
              type="text"
              style={{
                width: '100%',
                padding: '8px 15px',
                borderRadius: '20px',
                border: 'none',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Adresse</label>
            <input
              type="text"
              style={{
                width: '100%',
                padding: '8px 15px',
                borderRadius: '20px',
                border: 'none',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Téléphone</label>
            <input
              type="text"
              style={{
                width: '100%',
                padding: '8px 15px',
                borderRadius: '20px',
                border: 'none',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: 'white', display: 'block', marginBottom: '5px' }}>Email</label>
            <input
              type="email"
              style={{
                width: '100%',
                padding: '8px 15px',
                borderRadius: '20px',
                border: 'none',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <button
              type="button"
              style={{
                padding: '10px 20px',
                backgroundColor: '#6A2C9B',
                color: 'white',
                borderRadius: '20px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              }}
            >
              Modifier
            </button>

            <button
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#29205E',
                color: 'white',
                borderRadius: '20px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              }}
            >
              Sauvegarder
            </button>
          </div>
        </form>
      </div>
    </div>


    </>;
}
 
export default ProfilPage;