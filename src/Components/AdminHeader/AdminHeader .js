/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styles from './AdminHeader.module.css'
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

const AdminHeader = props => {
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
	const [height, setHeight] = useState()

	useEffect(() => {
		const handleResize = () => {
			setHeight(window.scrollY)
		}

		window.addEventListener('scroll', handleResize)

		return () => window.removeEventListener('scroll', handleResize)
	}, [height])

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
		<section className={styles.header_nav}>
			<div className={styles.header_logo}></div>
			<div className={styles.header_menus}>
				<Link to="/" className={styles.menu}>
					Home
				</Link>
				<Link to="/teachers" className={styles.menu}>
					Teachers
				</Link>
				<Link to="/students" className={styles.menu}>
					Students
				</Link>

				<Link to="/news" className={styles.menu}>
					Events
				</Link>
				<Link to="/news" className={styles.menu}>
					Activities
				</Link>
				{isAuthenticated && (
					<Link
						to="/profile"
						className={`${styles.menu} ${styles.profile_btn}`}>
						<img src={profile} alt="profile" />
					</Link>
				)}
				{!isAuthenticated && (
					<Link to="/login" className={`${styles.menu} ${styles.profile_btn}`}>
						<img src={login} alt="login" />
					</Link>
				)}
				<a
					href="javascript:void(0);"
					className={styles.icon}
					onClick={myFunction}>
					&#9776;
				</a>
				<div className={styles.responsived_card} id="responsived-card">
					<img className={styles.arrow} src={arrow} alt="" />
					<Link to="/" className={styles.menu}>
						Home
					</Link>
					<Link to="/sports" className={styles.menu}>
						Sports
					</Link>
					<Link to="/technology" className={styles.menu}>
						Technology
					</Link>
					<Link to="/animals" className={styles.menu}>
						Animals
					</Link>
					<Link to="/news" className={styles.menu}>
						News
					</Link>

					{isAuthenticated && (
						<Link
							to="/profile"
							className={`${styles.menu}, ${styles.profile_btn}`}>
							<img src={profile} alt="profile" />
						</Link>
					)}
					{!isAuthenticated && (
						<Link
							to="/login"
							className={`${styles.menu}, ${styles.profile_btn}`}>
							<img src={login} alt="login" />
						</Link>
					)}
				</div>
			</div>
			<div></div>
		</section>
	)
}

export default AdminHeader
