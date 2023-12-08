import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000/' })
// const API = axios.create({ baseURL: 'https://blog-backend-7kvy.onrender.com' });

// export const getUser = (userId) => API.get(`user/${userId}`);

export const createYear = formData => API.post('/year', formData)
export const getYear = () => API.get('/year/:id')
export const getYears = () => API.get('/year')
export const updateYear = (id, formData) => API.put('/year/:id', formData)
