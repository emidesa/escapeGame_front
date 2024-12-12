import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

function login(email, password) {
    return axios.post(`${API_URL}/login`, { email, password });
}

function getAllCustomers() {
    return axios.get(`${API_URL}/allCustomers`);
}

function addCustomer(customerData) {
    return axios.post(`${API_URL}/addCustomer`, customerData);
}

function updateCustomer() {
    return axios.post(`${API_URL}/updateCustomer`);
}

function deleteCustomer() {
    return axios.post(`${API_URL}/deleteCustomer`);
}

export default {
    login,
    getAllCustomers,
    addCustomer,
    updateCustomer,
    deleteCustomer,
}