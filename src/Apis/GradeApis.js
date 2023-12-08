import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000/' })
// const API = axios.create({ baseURL: 'https://blog-backend-7kvy.onrender.com' });

export const createGrade = formData => API.post('/grade', formData)
export const getGrade = () => API.get('/grade/:id')
export const getGrades = () => API.get('/grade')
export const updateGrade = (id, formData) => API.put('/grade/:id', formData)
