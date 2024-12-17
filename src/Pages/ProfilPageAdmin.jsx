import React, { useState, useEffect } from 'react';
import customerService from '../../services/customerService';
import contactService from '../../services/contactService';
import gameService from '../../services/gameService';
import '../App.css';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [contactMessages, setContactMessages] = useState([]);
  const [escapeGames, setEscapeGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [activeTab, setActiveTab] = useState('users');

  useEffect(() => {
    fetchUsers();
    fetchContactMessages();
    fetchEscapeGames();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await customerService.getAllCustomers();
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
    }
  };

  const fetchContactMessages = async () => {
    try {
      const response = await contactService.getAllMessages();
      setContactMessages(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des messages :', error);
    }
  };

  const fetchEscapeGames = async () => {
    try {
      const response = await gameService.getAllGames();
      setEscapeGames(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des escape games :', error);
    }
  };

  const handleUserUpdate = async () => {
    if (!selectedUser) return;
    try {
      await customerService.updateCustomer(selectedUser.id_customer, selectedUser);
      alert('Utilisateur modifié avec succès !');
      fetchUsers();
      setSelectedUser(null);
    } catch (error) {
      console.error('Erreur lors de la modification :', error);
      alert('Une erreur est survenue lors de la modification.');
    }
  };

  const handleUserDelete = async (id_customer) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      try {
        await customerService.deleteCustomer(id_customer);
        alert('Utilisateur supprimé avec succès !');
        fetchUsers();
      } catch (error) {
        console.error('Erreur lors de la suppression :', error);
        alert('Une erreur est survenue lors de la suppression.');
      }
    }
  };

  const handleGameUpdate = async () => {
    if (!selectedGame) return;
    try {
      await gameService.updateGame(selectedGame.id_escapeGame, selectedGame);
      alert('Escape game modifié avec succès !');
      fetchEscapeGames();
      setSelectedGame(null);
    } catch (error) {
      console.error('Erreur lors de la modification :', error);
      alert('Une erreur est survenue lors de la modification.');
    }
  };

  const handleGameDelete = async (id_escapeGame) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet escape game ?')) {
      try {
        await gameService.deleteGame(id_escapeGame);
        alert('Escape game supprimé avec succès !');
        fetchEscapeGames();
      } catch (error) {
        console.error('Erreur lors de la suppression :', error);
        alert('Une erreur est survenue lors de la suppression.');
      }
    }
  };

  const handleGameAdd = async () => {
    const newGame = {
      name: 'Nouveau jeu',
      description: 'Description du nouveau jeu',
      price_per_person: 0,
      max_players: 6,
      duration: 60,
    };
    try {
      await gameService.addGame(newGame);
      alert('Nouvel escape game ajouté avec succès !');
      fetchEscapeGames();
    } catch (error) {
      console.error('Erreur lors de l\'ajout :', error);
      alert('Une erreur est survenue lors de l\'ajout.');
    }
  };

  return (
    <div style={{ backgroundColor: '#9F8FBF', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#29205E', marginBottom: '40px' }}>
        Page d'administration
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <button
          onClick={() => setActiveTab('users')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'users' ? '#6A2C9B' : '#29205E',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            marginRight: '10px',
            cursor: 'pointer',
          }}
        >
          Utilisateurs
        </button>
        <button
          onClick={() => setActiveTab('messages')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'messages' ? '#6A2C9B' : '#29205E',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            marginRight: '10px',
            cursor: 'pointer',
          }}
        >
          Messages
        </button>
        <button
          onClick={() => setActiveTab('games')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'games' ? '#6A2C9B' : '#29205E',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Escape Games
        </button>
      </div>

      {activeTab === 'users' && (
        <div>
          <h2 style={{ color: '#29205E' }}>Gestion des utilisateurs</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {users.map((user) => (
              <li
                key={user.id_customer}
                style={{
                  padding: '10px',
                  margin: '5px 0',
                  backgroundColor: '#4A2B8C',
                  color: 'white',
                  borderRadius: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>
                  {user.first_name} {user.last_name} - {user.email}
                </span>
                <div>
                  <button
                    onClick={() => setSelectedUser(user)}
                    style={{
                      padding: '5px 10px',
                      marginRight: '5px',
                      backgroundColor: '#6A2C9B',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleUserDelete(user.id_customer)}
                    style={{
                      padding: '5px 10px',
                      backgroundColor: '#29205E',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    Supprimer
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {selectedUser && (
            <div
              style={{
                marginTop: '20px',
                padding: '20px',
                backgroundColor: '#4A2B8C',
                borderRadius: '10px',
                color: 'white',
              }}
            >
              <h3>Modifier l'utilisateur</h3>
              <form onSubmit={(e) => { e.preventDefault(); handleUserUpdate(); }}>
                <div style={{ marginBottom: '10px' }}>
                  <label>Nom</label>
                  <input
                    type="text"
                    value={selectedUser.last_name}
                    onChange={(e) => setSelectedUser({ ...selectedUser, last_name: e.target.value })}
                    style={{ width: '100%', padding: '5px', borderRadius: '5px' }}
                  />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label>Prénom</label>
                  <input
                    type="text"
                    value={selectedUser.first_name}
                    onChange={(e) => setSelectedUser({ ...selectedUser, first_name: e.target.value })}
                    style={{ width: '100%', padding: '5px', borderRadius: '5px' }}
                  />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label>Email</label>
                  <input
                    type="email"
                    value={selectedUser.email}
                    onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
                    style={{ width: '100%', padding: '5px', borderRadius: '5px' }}
                  />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label>Téléphone</label>
                  <input
                    type="text"
                    value={selectedUser.phone}
                    onChange={(e) => setSelectedUser({ ...selectedUser, phone: e.target.value })}
                    style={{ width: '100%', padding: '5px', borderRadius: '5px' }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#6A2C9B',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Sauvegarder
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {activeTab === 'messages' && (
        <div>
          <h2 style={{ color: '#29205E' }}>Messages de contact</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {contactMessages.map((message) => (
              <li
                key={message.id}
                style={{
                  padding: '10px',
                  margin: '5px 0',
                  backgroundColor: '#4A2B8C',
                  color: 'white',
                  borderRadius: '10px',
                }}
              >
                <p><strong>De :</strong> {message.name} ({message.email})</p>
                <p><strong>Date :</strong> {new Date(message.created_at).toLocaleString()}</p>
                <p><strong>Message :</strong> {message.message}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === 'games' && (
        <div>
          <h2 style={{ color: '#29205E' }}>Gestion des Escape Games</h2>
          <button
            onClick={handleGameAdd}
            style={{
              padding: '10px 20px',
              backgroundColor: '#6A2C9B',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              marginBottom: '20px',
              cursor: 'pointer',
            }}
          >
            Ajouter un nouveau jeu
          </button>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {escapeGames.map((game) => (
              <li
                key={game.id_escapeGame}
                style={{
                  padding: '10px',
                  margin: '5px 0',
                  backgroundColor: '#4A2B8C',
                  color: 'white',
                  borderRadius: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{game.name}</span>
                <div>
                  <button
                    onClick={() => setSelectedGame(game)}
                    style={{
                      padding: '5px 10px',
                      marginRight: '5px',
                      backgroundColor: '#6A2C9B',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleGameDelete(game.id_escapeGame)}
                    style={{
                      padding: '5px 10px',
                      backgroundColor: '#29205E',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    Supprimer
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {selectedGame && (
            <div
              style={{
                marginTop: '20px',
                padding: '20px',
                backgroundColor: '#4A2B8C',
                borderRadius: '10px',
                color: 'white',
              }}
            >
              <h3>Modifier l'Escape Game</h3>
              <form onSubmit={(e) => { e.preventDefault(); handleGameUpdate(); }}>
                <div style={{ marginBottom: '10px' }}>
                  <label>Nom</label>
                  <input
                    type="text"
                    value={selectedGame.name}
                    onChange={(e) => setSelectedGame({ ...selectedGame, name: e.target.value })}
                    style={{ width: '100%', padding: '5px', borderRadius: '5px' }}
                  />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label>Description</label>
                  <textarea
                    value={selectedGame.description}
                    onChange={(e) => setSelectedGame({ ...selectedGame, description: e.target.value })}
                    style={{ width: '100%', padding: '5px', borderRadius: '5px', minHeight: '100px' }}
                  />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label>Prix par personne</label>
                  <input
                    type="number"
                    value={selectedGame.price_per_person}
                    onChange={(e) => setSelectedGame({ ...selectedGame, price_per_person: parseFloat(e.target.value) })}
                    style={{ width: '100%', padding: '5px', borderRadius: '5px' }}
                  />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label>Nombre maximum de joueurs</label>
                  <input
                    type="number"
                    value={selectedGame.max_players}
                    onChange={(e) => setSelectedGame({ ...selectedGame, max_players: parseInt(e.target.value) })}
                    style={{ width: '100%', padding: '5px', borderRadius: '5px' }}
                  />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label>Durée (en minutes)</label>
                  <input
                    type="number"
                    value={selectedGame.duration}
                    onChange={(e) => setSelectedGame({ ...selectedGame, duration: parseInt(e.target.value) })}
                    style={{ width: '100%', padding: '5px', borderRadius: '5px' }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#6A2C9B',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Sauvegarder
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPage;

