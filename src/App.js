import logo from './logo.svg'
import './App.css'
import Header from './Components/Header/Header'
import AdminHeader from './Components/AdminHeader/AdminHeader '
import Routers from './routers/Routers'
import { BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { autoLogin } from './Actions/AuthAction'

function App() {
	const dispatch = useDispatch()
	const token = localStorage.getItem('token')
	useEffect(() => {
		if (token !== 'null') {
			dispatch(autoLogin({ token: token }))
		}

		// dispatch(getBlogs())
	}, [])

	return (
		<div className="App">
			<BrowserRouter>
				{/* <Header /> */}
				<AdminHeader />
				<Routers />
			</BrowserRouter>
		</div>
	)
}

export default App
