import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

function sendContact(data){
    return axios.post(`${API_URL}/contact`, data);
}


export default {
    sendContact,
}