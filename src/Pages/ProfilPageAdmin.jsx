import React, { useState, useEffect } from 'react';
import '../App.css';
import customerService from '../../services/customerService';

const ProfilPageAdmin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await customerService.getAllCustomers(); // Endpoint pour récupérer tous les utilisateurs
        setUsers(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      }
    };
    fetchUsers();
  }, []);

  const handleUpdate = async () => {
    if (!selectedUser) return;
    try {
      const updatedData = {
        first_name: selectedUser.first_name,
        last_name: selectedUser.last_name,
        email: selectedUser.email,
        phone: selectedUser.phone,
      };
      const response = await customerService.updateCustomer(`{selectedUser.id_customer}`, updatedData);
      alert('Utilisateur modifié avec succès !');
      // Rafraîchissez la liste des utilisateurs
      setUsers((prev) =>
        prev.map((user) =>
          user.id_customer === selectedUser.id_customer ? { ...user, ...updatedData } : user
        )
      );
    } catch (error) {
      console.error('Erreur lors de la modification :', error);
      alert('Une erreur est survenue lors de la modification.');
    }
  };

  const handleDelete = async (id_customer) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      try {
        await api.delete(`/api/customers/${id_customer}`);
        alert('Utilisateur supprimé avec succès !');
        // Supprimez l'utilisateur de la liste locale
        setUsers((prev) => prev.filter((user) => user.id_customer !== id_customer));
      } catch (error) {
        console.error('Erreur lors de la suppression :', error);
        alert('Une erreur est survenue lors de la suppression.');
      }
    }
  };

  const handleChange = (field, value) => {
    if (!selectedUser) return;
    setSelectedUser((prevUser) => ({ ...prevUser, [field]: value }));
  };

  return (
    <div style={{ backgroundColor: '#9F8FBF', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#29205E', marginBottom: '40px' }}>
        Gestion des profils
      </h1>

      {/* Liste des utilisateurs */}
      <div>
        <h2 style={{ color: '#29205E' }}>Liste des utilisateurs</h2>
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
                    borderRadius: '5px',
                  }}
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(user.id_customer)}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: '#29205E',
                    color: 'white',
                    borderRadius: '5px',
                  }}
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Formulaire de modification */}
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
          <form>
            <div style={{ marginBottom: '10px' }}>
              <label>Nom</label>
              <input
                type="text"
                value={selectedUser.last_name}
                onChange={(e) => handleChange('last_name', e.target.value)}
                style={{ width: '100%', padding: '5px', borderRadius: '5px' }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>Prénom</label>
              <input
                type="text"
                value={selectedUser.first_name}
                onChange={(e) => handleChange('first_name', e.target.value)}
                style={{ width: '100%', padding: '5px', borderRadius: '5px' }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>Email</label>
              <input
                type="email"
                value={selectedUser.email}
                onChange={(e) => handleChange('email', e.target.value)}
                style={{ width: '100%', padding: '5px', borderRadius: '5px' }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>Téléphone</label>
              <input
                type="text"
                value={selectedUser.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                style={{ width: '100%', padding: '5px', borderRadius: '5px' }}
              />
            </div>
            <button
              type="button"
              onClick={handleUpdate}
              style={{
                padding: '10px 20px',
                backgroundColor: '#6A2C9B',
                color: 'white',
                borderRadius: '5px',
              }}
            >
              Sauvegarder
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfilPageAdmin;
