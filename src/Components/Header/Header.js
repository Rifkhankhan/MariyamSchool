/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './Header.css'
import profile from '../../Images/profile.png'

import arrow from '../../Images/arrow-up (1).png'
import { useSelector } from 'react-redux'
import login from '../../Images/log-in.png'

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window
	return {
		width,
		height
	}
}

const Header = props => {
	const [settingIsOpen, setSettingIsOpen] = useState(false)
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
	const [height, setHeight] = useState()
	const navigate = useNavigate()

	useEffect(() => {
		const handleResize = () => {
			setHeight(window.scrollY)
		}

		window.addEventListener('scroll', handleResize)

		return () => window.removeEventListener('scroll', handleResize)
	}, [height])

	const handleClick = e => {
		e.preventDefault()

		document
			.getElementsByClassName('header-dropDown')[0]
			.classList.toggle('header-dropDown-show')
	}

	const showCardToggleHandler = () => {
		props.showCardToggleHandler()
	}

	const listOpenHandler = e => {
		e.preventDefault()
		if (settingIsOpen) {
			setSettingIsOpen(current => !current)
		}
		// setIsOpen(current => !current)
	}

	const humbergurGHandleClick = e => {
		e.preventDefault()
		// setIsOpen(current => !current)
		setSettingIsOpen(current => !current)
	}

	const profileHandler = e => {
		e.preventDefault()
		// setIsOpen(false)
		setSettingIsOpen(false)
		// navigate('/profile')
	}

	// responsive header setting
	const myFunction = () => {
		var x = document.getElementById('responsived-card')
		console.log(x)
		if (x.className === 'responsived-card') {
			x.className += ' show'
		} else {
			x.className = 'responsived-card'
		}
	}

	return (
		<section
			className={height <= 300 ? 'header-nav' : 'header-nav header-nav-change'}>
			<div className="header-logo"></div>
			<div className="header-menus">
				<Link to="/" className="menu">
					Home
				</Link>
				<Link to="/teachers" className="menu">
					Teachers
				</Link>
				<Link to="/students" className="menu">
					Students
				</Link>
				
				<Link to="/news" className="menu">
					Events
				</Link>
				<Link to="/news" className="menu">
					Activities
				</Link>
				{isAuthenticated && (
					<Link to="/profile" className="menu profile-btn">
						<img src={profile} alt="profile" />
					</Link>
				)}
				{!isAuthenticated && (
					<Link to="/login" className="menu profile-btn">
						<img src={login} alt="login" />
					</Link>
				)}
				<a href="javascript:void(0);" className="icon" onClick={myFunction}>
					&#9776;
				</a>
				<div className="responsived-card" id="responsived-card">
					<img className="arrow" src={arrow} alt="" />
					<Link to="/" className="menu">
						Home
					</Link>
					<Link to="/sports" className="menu">
						Sports
					</Link>
					<Link to="/technology" className="menu">
						Technology
					</Link>
					<Link to="/animals" className="menu">
						Animals
					</Link>
					<Link to="/news" className="menu">
						News
					</Link>

					{isAuthenticated && (
						<Link to="/profile" className="menu profile-btn">
							<img src={profile} alt="profile" />
						</Link>
					)}
					{!isAuthenticated && (
						<Link to="/login" className="menu profile-btn">
							<img src={login} alt="login" />
						</Link>
					)}
				</div>
			</div>
			<div></div>
		</section>
	)
}

export default Header
