import React, { useEffect, useState } from 'react'
import styles from './Login.module.css'
import logo from './../../Images/profile.png'
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../Redux/authSlice'
// import Google from '../../google'

import { logIn, signUp, forgotPassword, googleLogin, googleSignup } from './../../Actions/userAction'
// import { GoogleOAuthProvider } from '@react-oauth/google'

function Login() {
	const [login, setLogin] = useState(true)
	const isLoading = useSelector(state => state.auth.isLoading)
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [data, setData] = useState({ name: '', email: '', password: '' })
	const [forgot, setForgot] = useState(false)
	const [email, setEmail] = useState('')
	const [credential,setCredantial] = useState()
	const [userData,setUserData] = useState()
	useEffect(() => {}, [isLoading])
	const btnHandler = e => {
		setForgot(false)

		setLogin(current => !current)
	}


	
	

	const [validation, setValidation] = useState({
		name: '',
		email: '',
		password: ''
	})

	const handleChange = e => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	if (isAuthenticated) {
		navigate('/profile')
	}

	const handleSubmit = e => {
		// page will not redirect default
		e.preventDefault()
		if (forgot) {
			dispatch(authActions.changeLoading())

			dispatch(forgotPassword({ email: email }))
		} else {
			dispatch(authActions.changeLoading())

			if (login) {
				dispatch(logIn(data))
			} else {
				dispatch(signUp(data))
			}
		}
	}
	const checkValidation = () => {
		if (
			data.name.length > 0 &&
			data.email.includes('@') &&
			data.password.length >= 8
		) {
			setValidation(true)
		} else {
			setValidation(false)
		}
	}

	useEffect(() => {
		checkValidation()
	}, [data])

	const forgotPasswordHandler = () => {
		setForgot(true)
	}

	const emailhandleChange = e => {
		setEmail(e.target.value)
	}

	// decode token

	const decodeToken = (token) => {
		try{
			const decoded = atob(token.split('.')[1])
			setUserData(JSON.parse(decoded))
			return JSON.parse(decoded)
		}	
		catch(err) {
			console.log(err);
		}
}	
	const responseHandler = (e) => {
		setCredantial(e)
		if(e.credential) {
			const decodedToken = decodeToken(e.credential)
			setUserData(decodedToken)
			if(login) {
				console.log('login');

				dispatch(googleLogin(decodedToken))
			}
			else {
				console.log('logup');
				dispatch(googleSignup(decodedToken))

			}
		}
	}


	
	return (
		<div className={styles.container}>
			<section className={styles.title}>
				{forgot && <p>Forgot Password</p>}
				{!forgot && login && <p>Login</p>}
				{!forgot && !login && <p>Register</p>}
			</section>
			<section className={styles.form_container}>
				<form onSubmit={handleSubmit}>
					<img src={logo} alt="logo" />

					{!forgot && !login && (
						<input
							type="text"
							name="name"
							defaultValue={data.name}
							onChange={handleChange}
							placeholder="Enter User Name"
							required
						/>
					)}
					{!forgot && (
						<input
							type="email"
							name="email"
							defaultValue={data.email}
							onChange={handleChange}
							placeholder="Enter Email"
							required
						/>
					)}
					{forgot && (
						<input
							type="email"
							name="email"
							defaultValue={email}
							onChange={emailhandleChange}
							placeholder="Enter Email"
							required
						/>
					)}
					{!forgot && (
						<input
							type="password"
							name="password"
							defaultValue={data.password}
							onChange={handleChange}
							placeholder="Enter Password"
							required
						/>
					)}

					{!isLoading &&
						!forgot &&
						(login ? (
							<button
								disabled={
									!(data.email.includes('@') && data.password.length >= 8)
								}>
								LOG IN
							</button>
						) : (
							<button disabled={!validation}>REGISTER</button>
						))}
					{!isLoading && forgot && (
						<button disabled={!email.includes('@')}>Send Email</button>
					)}
					{isLoading && (
						<button
							style={{ background: 'green', color: 'white' }}
							disabled={true}>
							LOADING...
						</button>
					)}

					<div>
						<p onClick={forgotPasswordHandler}>FORGOT PASSWORD</p>
						{login ? (
							<p onClick={btnHandler}>NEW USER? REGISTER</p>
						) : (
							<p onClick={btnHandler}>ALREADY HAVE? LOG IN</p>
						)}
					</div>
					<div className={styles.logos}>
						{/* <img src={google} alt="" onClick={googleLogin} /> */}
						{/* <GoogleOAuthProvider clientId="302827218911-03vd01vqg3l19b48ge2uus3sh8r792pv.apps.googleusercontent.com"> */}
							<div style={{display:'flex !important',flexDirection:'column !important',marginTop:'-1.5rem'}}>
								{/* <Google  setCredantial={setCredantial} responseHandler={responseHandler}/> */}
							</div>
						{/* </GoogleOAuthProvider> */}
					
						{/* <img src={fb} alt="" />
						<img src={linkedin} alt="" /> */}
					</div>
				</form>
			</section>
		</div>
	)
}

export default Login
