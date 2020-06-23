import axios from 'axios';

const api = axios.create({
    baseURL: 'https://covid-dashboard-backend-rilton.herokuapp.com/'
});

export default api;