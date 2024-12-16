import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const axiosInstance = axios.create({
    baseURL: API_URL
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        console.log('Token utilisé dans la requête:', token);

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor de réponse pour gérer les erreurs globalement
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Rediriger l'utilisateur vers la page de connexion si token est invalide ou expiré
            console.log("Token invalide ou expiré. Redirection vers la page de connexion.");
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            window.location.href = '/login'; // Redirection vers la page de login
        }
        return Promise.reject(error);
    }
);

function login(email, password) {
    console.log('Tentative de connexion avec email:', email);
    return axiosInstance.post('/login', { email, password })
        .then(response => {
            console.log('Réponse du serveur:', response.data);
            if (response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
                console.log('Token stocké dans localStorage:', response.data.token);
            }
            return response;
        });
}

function getAllCustomers() {
    return axiosInstance.get('/allCustomers');
}

function getCustomer(id_customer) {
    console.log('Récupération des données pour l\'utilisateur:', id_customer);
    return axiosInstance.get(`/customer/${id_customer}`);
}

function addCustomer(customerData) {
    return axiosInstance.post('/addCustomer', customerData);
}

function updateCustomer(id_customer, customerData) {
    return axiosInstance.put(`/updateCustomer/${id_customer}`, customerData);
}

function deleteCustomer(id_customer) {
    return axiosInstance.delete(`/deleteCustomer/${id_customer}`);
}

export default {
    login,
    getAllCustomers,
    getCustomer,
    addCustomer,
    updateCustomer,
    deleteCustomer,
}

