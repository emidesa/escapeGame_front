import React, { useEffect, useState } from 'react';
import adminService from '../../services/adminService';
import { useNavigate, useLocation } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const isAdmin = localStorage.getItem('isAdmin');
    if (token && isAdmin === 'true' && location.pathname === '/AdminLogin') {
      navigate('/profilPageAdmin');
    }
  }, [navigate, location]);

  const handleCreateAdmin = async () => {
    if (!username || !email || !password) {
      alert('Tous les champs sont requis pour créer un administrateur.');
      return;
    }

    try {
      console.log('Création d\'un administrateur avec les données :', { username, email, password });
      const response = await adminService.createAdmin(username, email, password);

      console.log('Réponse de la création :', response);
      alert(response.message || 'Compte administrateur créé avec succès.');

      setUsername('');
      setEmail('');
      setPassword('');
      setIsLoginMode(true);
    } catch (error) {
      console.error('Erreur lors de la création :', error);
      alert(error.response?.data?.message || 'Une erreur est survenue lors de la création.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
        alert('Veuillez renseigner votre email et votre mot de passe.');
        return;
    }

    try {
        console.log('Connexion avec les données :', { email, password });
        const response = await adminService.loginAdmin(email, password);

        console.log('Réponse de la connexion :', response);
        if (response.token) {
            localStorage.setItem('adminToken', response.token); // Assurez-vous que cela est bien exécuté
            localStorage.setItem('isAdmin', 'true');
            localStorage.setItem('adminUser', JSON.stringify(response.admin || {}));

            console.log('Token et informations de l\'admin stockés avec succès.');
            navigate('/profilPageAdmin');
        } else {
            alert('Erreur de connexion: Aucun token trouvé.');
        }
    } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        alert(error.response?.data?.message || 'Une erreur est survenue lors de la connexion.');
    }
};


  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f3f4f6', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
        <h1 style={{ textAlign: 'center', fontSize: '1.5rem', color: '#333' }}>Gestion des administrateurs</h1>
        
        {isLoginMode ? (
          <form onSubmit={handleLogin}>
            <h2 style={{ fontSize: '1.2rem', color: '#555' }}>Connexion</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
              required
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
              required
            />
            <button
              type="submit"
              style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
              Se connecter
            </button>
            <p style={{ textAlign: 'center', cursor: 'pointer', color: '#007bff' }} onClick={() => setIsLoginMode(false)}>Créer un compte</p>
          </form>
        ) : (
          <div>
            <h2 style={{ fontSize: '1.2rem', color: '#555' }}>Créer un administrateur</h2>
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
            />
            <button
              onClick={handleCreateAdmin}
              style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
              Créer
            </button>
            <p style={{ textAlign: 'center', cursor: 'pointer', color: '#007bff' }} onClick={() => setIsLoginMode(true)}>Déjà un compte ? Se connecter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;