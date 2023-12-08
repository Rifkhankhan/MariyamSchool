import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });
// const API = axios.create({ baseURL: 'https://blog-backend-7kvy.onrender.com' });

// export const getUser = (userId) => API.get(`user/${userId}`);

export const createStudent = formData => API.post('/student', formData)
export const getStudent = () => API.get('/student/:id')
export const getStudents = () => API.get('/student', )
export const updateStudent = (id,formData) => API.put('/student/:id', formData)

export const pushGrade = (id,formData) => API.put('/student/:id', formData)
export const pushAttendance = (id,formData) => API.put(`/student/attendance/${id}`, formData)
export const pullAttendance = (id,formData) => API.put(`/student/pullAttendance/${id}`, formData)
export const getAttendancesForYYYYMM = (formData) => API.post('/student/getAttendancesForYYYYMM',formData)
export const getAttendances = (formData) => API.post('/student/getAttendances',formData)