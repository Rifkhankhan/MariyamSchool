import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000/' })
// const API = axios.create({ baseURL: 'https://blog-backend-7kvy.onrender.com' });

export const createClass = formData => API.post('/class', formData)
export const getClass = () => API.get('/class/:id')
export const getClasses = () => API.get('/class')
export const updateClass = (id, formData) => API.put('/class/:id', formData)
