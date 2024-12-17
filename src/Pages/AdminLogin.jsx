import React, { useEffect, useState } from 'react';
import adminService from '../../services/adminService';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/AdminLogin');
    } 
  }, [navigate]);

  const handleCreateAdmin = async () => {
    try {
      console.log('Création d\'un administrateur avec les données :', { username, email, password });
      const response = await adminService.createAdmin(username, email, password);
      
      console.log('Réponse de la création :', response);
      alert(response.message);
      
      setUsername('');
      setEmail('');
      setPassword('');
      navigate('/profilPageAdmin');
      
    } catch (error) {
      console.error('Erreur lors de la création :', error);
      alert(error.message);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      console.log('Connexion avec les données :', { email, password });
      const response = await adminService.loginAdmin(email, password);
      
      console.log('Réponse de la connexion :', response);
      if (response.token) {
        localStorage.setItem('token', response.token);
        console.log('Token stocké avec succès');
      }
      
      // Vérifiez si l'utilisateur est inclus dans la réponse
      if (response.user) {
        console.log('Utilisateur récupéré :', response.user);
        // Ajoutez ici le code pour gérer l'utilisateur
      } else {
        console.error('Aucun utilisateur trouvé dans la réponse');
      }
      
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
    }
  };
  

  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log('Utilisateur déconnecté');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f3f4f6', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
        <h1 style={{ textAlign: 'center', fontSize: '1.5rem', color: '#333' }}>Gestion des administrateurs</h1>
        
        {isLoginMode ? (
          <div>
            <h2 style={{ fontSize: '1.2rem', color: '#555' }}>Connexion</h2>
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
              onClick={() => handleLogin(email, password)}
              style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
              Se connecter
            </button>
            <p style={{ textAlign: 'center', cursor: 'pointer', color: '#007bff' }} onClick={() => setIsLoginMode(false)}>Créer un compte</p>
          </div>
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

export default AdminPage;
