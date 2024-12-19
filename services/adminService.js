import axios from "axios";

const API_URL = "http://localhost:3000/api";

// Fonction pour créer un administrateur
function createAdmin(username, email, password) {
  return axios
    .post(`${API_URL}/CreateAdmin`, { username, email, password })
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Erreur lors de la création :",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    });
}

// Fonction pour se connecter en tant qu'administrateur
function loginAdmin(email, password) {
  return axios
    .post(`${API_URL}/loginAdmin`, { email, password })
    .then((response) => {
      if (response.data && response.data.token) {
        return {
          token: response.data.token,
          user: response.data.admin,
        };
      } else {
        throw new Error("Authentification échouée");
      }
    })
    .catch((error) => {
      console.error(
        "Erreur lors de la connexion :",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    });
}

// Fonction pour vérifier si l'utilisateur est un administrateur
function isAdmin() {
  return localStorage.getItem("isAdmin") === "true";
}

// Fonction pour récupérer tous les utilisateurs
function getAllCustomers() {
  const adminToken = localStorage.getItem("adminToken");
  if (!adminToken) {
    return Promise.reject("Token manquant");
  }
  return axios
    .get(`${API_URL}/allCustomers`, {
      headers: { Authorization: `Bearer ${adminToken}` },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Erreur lors de la récupération des utilisateurs :",
        error.response?.data || error.message
      );
      throw error.response?.data || error.message;
    });
}

// Exportation des fonctions
export default {
  createAdmin,
  loginAdmin,
  isAdmin,
  getAllCustomers,
};
