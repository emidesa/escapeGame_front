import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

function sendContact(data){
    return axios.post(`${API_URL}/contact`, data);
}

function getAllMessages() {
    return axios.get(`${API_URL}/AllContact`);
}

function deleteMessage(id) {
    return axios.delete(`${API_URL}/deleteContact/${id}`);
}

export default {
    deleteMessage,
    sendContact,
    getAllMessages,
}