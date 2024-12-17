import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

function getAllGames() {
    return axios.get(`${API_URL}/allGames`);
}

function addGame(gameData) {
    return axios.post(`${API_URL}/addGame`, gameData);
}

function updateGame(id, gameData) {
    return axios.put(`${API_URL}/updateGame/${id}`, gameData);
}

function deleteGame(id) {
    return axios.delete(`${API_URL}/deleteGame/${id}`);
}

export default {
    getAllGames,
    addGame,
    updateGame,
    deleteGame,
}

