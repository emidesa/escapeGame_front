import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const axiosInstance = axios.create({
  baseURL: API_URL
});

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

function getAllReservations(userId) {
    return axiosInstance.get(`${API_URL}/userReservations/${userId}`);
  }

  function getReservation(id) {
    return axiosInstance.get(`${API_URL}/reservation/${id}`);
  }

function addReservation(reservationData) {
  return axiosInstance.post(`${API_URL}/addReservation`, reservationData);
}

function updateReservation(id, reservationData) {
  return axiosInstance.put(`${API_URL}/updateReservation/${id}`, reservationData);
}

function deleteReservation(id) {
  return axiosInstance.delete(`${API_URL}/deleteReservation/${id}`);
}

// Add this function to get available escape games
function getAvailableEscapeGames() {
  return axiosInstance.get(`${API_URL}/availableEscapeGames`);
}

export default {
getReservation,
getAllReservations,
addReservation,
updateReservation,
deleteReservation,
getAvailableEscapeGames,
}

