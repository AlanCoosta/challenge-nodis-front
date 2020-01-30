import axios from 'axios';

const api = axios.create({
  baseURL: 'https://frontend-challenge-beginner.herokuapp.com/',
});

export default api;
