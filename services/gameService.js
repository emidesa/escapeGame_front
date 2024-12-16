import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

function getAllGames(){
    return axios.get(`${API_URL}/allGames`);
}

function addGame() {
    return axios.post(`${API_URL}/addGame`);
}

function updateGame() {
    return axios.put(`${API_URL}/updateGame`);
}

function deleteGame() {
    return axios.delete(`${API_URL}/deleteGame`);
}

export default {
    getAllGames,
    addGame,
    updateGame,
    deleteGame,
}