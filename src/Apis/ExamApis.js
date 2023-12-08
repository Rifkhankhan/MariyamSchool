import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000/' })
// const API = axios.create({ baseURL: 'https://blog-backend-7kvy.onrender.com' });

// export const getUser = (userId) => API.get(`user/${userId}`);

export const createExam = formData => API.post('/exam', formData)
export const getExams = formData => API.get('/exam',)

