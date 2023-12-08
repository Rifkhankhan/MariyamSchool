import React, { useEffect, useState } from 'react'
import styles from './Dashboard.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, getItems } from '../../Actions/MovieAction'
import { netflixAuthActions } from '../../Redux/netflixAuthSlice'
import DashboardCountCard from '../../Components/DashboardCountCard/DashboardCountCard'
import jfn_logo from '../../Images/jfn_logo.png'
import StudentTable from '../../Components/StudentTable/StudentTable'
import FeesTable from '../../Components/FeesTable/FeesTable'
import Calender from '../../Components/Calender'
function Dashboard() {
	const dispatch = useDispatch()
	const [query, setQuery] = useState('')
	const [searchItems, setSearchItems] = useState()
	const [model, setModel] = useState(false)
	const categories = useSelector(state => state.netflixAuth.category)
	const items = useSelector(state => state.netflixAuth.items)
	const authData = useSelector(state => state.netflixAuth.authData)

	useEffect(() => {
		console.log('autologin')
		dispatch(netflixAuthActions.autoLogin())
	}, [])

	useEffect(() => {
		dispatch(getItems())
		dispatch(getCategories())
	}, [dispatch])

	useEffect(() => {}, [model])
	const searchHandler = e => {
		setQuery(e)
		setSearchItems(
			items?.filter(item => item.name.toLowerCase().includes(e.toLowerCase()))
		)
	}

	useEffect(() => {}, [query])

	useEffect(() => {
		return () => {
			document.documentElement.style.overflow = 'scroll'
			document.body.scroll = 'yes'
			setModel(false)
		}
	}, [])

	return (
		<>
			<div className={styles.admin_dashboard_page_container}>
				{/* <img src={jfn_logo} alt="" className='jfn_logo'/> */}
				<DashboardCountCard />
				{/* attendance */}

				<section className={styles.attendanceInnerContainer}>
					<div className={styles.attendancePersantage}>
						<div className={`${styles.attendancePersantageCircle} border:`}>
							<h2 className={styles.attendancePersantageamount}>
								<span>75</span>%
							</h2>
							<h2 style={{ fontFamily: 'times' }}>Students</h2>
						</div>
					</div>
					<div className={styles.attendancePersantage}>
						<div className={`${styles.attendancePersantageCircle} border:`}>
							<h2 className={styles.attendancePersantageamount}>
								<span>85</span>%
							</h2>
							<h2 style={{ fontFamily: 'times' }}>Teachers</h2>
						</div>
					</div>
				</section>
				{/* students table */}
				<StudentTable
					backgroundColor="lightblue"
					color="white"
					headColor="rgb(4, 4, 52)"
				/>
				<StudentTable
					backgroundColor="lightblue"
					color="white"
					headColor="rgb(4, 4, 52)"
				/>
				{/* teachers table */}
				{/* fees table */}
				{/* <FeesTable backgroundColor='lightblue' color='white' headColor='rgb(4, 4, 52)' /> */}
				{/* exam table */}
				{/* Attendance */}
			</div>
		</>
	)
}

export default Dashboard
