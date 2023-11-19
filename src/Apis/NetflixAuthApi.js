import axios from 'axios'

const API = axios.create({ baseURL: 'http://44.226.145.213:5000/netflixAuth' })

export const logIn = formData => API.post('/login', formData)
export const signUp = formData => API.post('/logup', formData)
// export const autoLogin = (token) => API.get(`/user/userData/${token}`)
export const getUsers = token => API.get(`/users/${token}`)
