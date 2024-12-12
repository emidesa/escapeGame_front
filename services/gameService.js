import axios from 'axios';

const API_URL = 'https://localhost:3000/api';

function getALLGames(){
    return axios.get('/allGames');
}

function addGame() {
    return axios.post('/addGame');
}

function updateGame() {
    return axios.post('/updateGame');
}

function deleteGame() {
    return axios.post('/deleteGame');
}

export default {
    getALLGames,
    addGame,
    updateGame,
    deleteGame,
}