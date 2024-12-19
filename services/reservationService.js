import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Intercepteur de requête pour ajouter le token à l'en-tête
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Fonction pour récupérer toutes les réservations
function getAllReservations() {
  return axiosInstance
    .get('/AllReservations/')
    .catch((error) => {
      console.error('Error reservations:', error);
      throw error;  
    });
}

// Fonction pour récupérer les réservations d'un utilisateur
function getReservation(userId) {
  return axiosInstance
    .get(`/userReservations/${userId}`)
    .catch((error) => {
      console.error(`Error reservations for user ${userId}:`, error);
      throw error;
    });
}

// Fonction pour ajouter une nouvelle réservation
function addReservation(reservationData) {
  return axiosInstance
    .post('/addReservation', reservationData)
    .catch((error) => {
      console.error('Error adding reservation:', error);
      throw error;
    });
}

// Fonction pour mettre à jour une réservation existante
function updateReservation(id, reservationData) {
  return axiosInstance
    .put(`/updateReservation/${id}`, reservationData)
    .catch((error) => {
      console.error(`Error updating reservation with id ${id}:`, error);
      throw error;
    });
}

// Fonction pour supprimer une réservation
function deleteReservation(id) {
  return axiosInstance
    .delete(`/deleteReservation/${id}`)
    .catch((error) => {
      console.error(`Error deleting reservation with id ${id}:`, error);
      throw error;
    });
}

// Fonction pour récupérer les jeux d'évasion disponibles
function getAvailableEscapeGames() {
  return axiosInstance
    .get('/availableEscapeGames')
    .catch((error) => {
      console.error('Error fetching available escape games:', error);
      throw error;
    });
}

// Exporter les fonctions
export default {
  getReservation,
  getAllReservations,
  addReservation,
  updateReservation,
  deleteReservation,
  getAvailableEscapeGames,
};
