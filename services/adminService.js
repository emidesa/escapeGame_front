import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const adminService = {
  // Créer un administrateur
  createAdmin: async (username, email, password) => {
    try {
      const response = await axios.post(`${API_URL}/CreateAdmin`, {
        username,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création :', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },


    loginAdmin: async (email, password) => {
      try {
        const response = await axios.post(`${API_URL}/loginAdmin`, {
          email,
          password,
        });
        
        if (response.data && response.data.token) {
          
          return {
            token: response.data.token,
            user: response.data.admin
          };
        } else {
          throw new Error('Authentification échouée');
        }
      } catch (error) {
        console.error('Erreur lors de la connexion :', error.response?.data || error.message);
        throw error.response?.data || error.message;
      }
    },
    
    // Ajoutez une méthode pour vérifier si l'utilisateur est un admin
    isAdmin: () => {
      return localStorage.getItem('isAdmin') === 'true';
    },

    // Récupérer tous les utilisateurs
    getAllUsers: async () => {
      const adminToken = localStorage.getItem('adminToken');
      if (!adminToken) {
        throw new Error('Token manquant');
      }
      try {
        const response = await axios.get(`${API_URL}/allCustomers`, {
  headers: {
    Authorization: `Bearer ${adminToken}`, // Utilisez 'adminToken' en minuscule
  },
});

        return response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error.response?.data || error.message);
        throw error.response?.data || error.message;
      }
    },
  };
  


export default adminService;

