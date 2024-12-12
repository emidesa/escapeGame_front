import axios from 'axios';

const API_URL = 'https://localhost:3000/api';

function getAllCustomers() {
    return axios.get('/allCustomers');
}

function addCustomer() {
    return axios.post('/addCustomer');
}

function updateCustomer() {
    return axios.post('/updateCustomer');
}

function deleteCustomer() {
    return axios.post('/deleteCustomer');
}

export default {
    getAllCustomers,
    addCustomer,
    updateCustomer,
    deleteCustomer,
}