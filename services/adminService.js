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

  // Authentifier un administrateur
  loginAdmin: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/loginAdmin`, {
        email,
        password,
      });
      const { token, user } = response.data;  // Extraire seulement les informations nécessaires
      return { token, user };  // Retourner uniquement les données essentielles
    } catch (error) {
      console.error('Erreur lors de la connexion :', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
  

  // Récupérer le tableau de bord (requête protégée)
  getAdminDashboard: async (token) => {
    try {
      const response = await axios.get(`${API_URL}/dashboardAdmin`, {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de l\'accès au tableau de bord :', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  },
};

export default adminService;
