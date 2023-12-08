import React, { useState } from 'react'
import styles from './StudentsComponent.module.css'
import { useNavigate } from 'react-router-dom'
import Calender from '../Calender'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getYears } from '../../Actions/YearAction'
import { getClasses } from '../../Actions/ClassAction'

function StudentsComponent() {
	const [year, setYear] = useState()
	const years = useSelector(state => state.year.years)
	const classes = useSelector(state => state.class.classes)
	const dispatch = useDispatch()
	
	const displayClasses = classes.filter(clas => clas.year === year)

	useEffect(() => {
		dispatch(getYears())
		dispatch(getClasses())
	}, [])

	const navigate = useNavigate()

	const batch = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'O/L', 'A/L']
	const teams = ['Prefects', 'Band', 'Scoud', 'Grath']

	const yearHandler = batch => {
		console.log(batch)
		setYear(batch.year)
		// navigate(`/admin/students/batch`, { state: batch })
	}

	const batchHandler = batch => {
		navigate(`/admin/students/batch`, { state: {   batch } })
	}
	const addBatch = batch => {
		navigate('/admin/students/batch/add')
	}

	const addClass = year => {
		console.log(year);
		navigate('/admin/students/class/add',{state:{year:year}})
	}

	return (
		<div className={styles.rootContainer}>
			{!year && (
				<section className={styles.container}>
					<h2
						style={{
							textAlign: 'left',
							paddingInline: '1rem',
							paddingTop: '1rem',
							paddingBottom: '.5rem',
							color: ' rgb(28, 6, 75)'
						}}>
						Students Batch
					</h2>
					<div className={styles.innerContainer}>
						{years.map(year => (
							<div
								className={styles.card}
								onClick={() => {
									yearHandler(year)
								}}>
								<h2>{year.year}</h2>
							</div>
						))}
						<div
							className={styles.card}
							onClick={() => {
								addBatch()
							}}>
							<h2 style={{ fontSize: '35px' }}>+</h2>
						</div>
					</div>
				</section>
			)}

			{year && (
				<section className={styles.container}>
					<h2
						style={{
							textAlign: 'left',
							paddingInline: '1rem',
							paddingTop: '1rem',
							paddingBottom: '.5rem',
							color: ' rgb(28, 6, 75)'
						}}>
						{year} Classes
					</h2>
					<div className={styles.innerContainer}>
						{displayClasses.map(year => (
							<div
								className={styles.card}
								onClick={() => {
									batchHandler(year)
								}}>
								<h2>{year.className}</h2>
							</div>
						))}
						<div
							className={styles.card}
							onClick={() => {
								addClass(year)
							}}>
							<h2 style={{ fontSize: '35px' }}>+</h2>
						</div>
					</div>
				</section>
			)}

			{/* table of students */}
			{/* no,index,pransent days,total days,persantge,last semester position, */}

			{/* attedance */}
			<section className={styles.attendanceContainer}>
				<h2
					style={{
						textAlign: 'left',
						paddingInline: '1rem',
						paddingBottom: '.5rem',
						color: ' rgb(28, 6, 75)'
					}}>
					Attendance
				</h2>
				<div className={styles.attendanceInnerContainer}>
					<div className={styles.attendancePersantage}>
						<div className={`${styles.attendancePersantageCircle} border:`}>
							<h2 className={styles.attendancePersantageamount}>
								<span>75</span>%
							</h2>
							<h2 style={{ fontFamily: 'times' }}>Today</h2>
						</div>
					</div>
					<div className={styles.attendanceCalender}>
						<Calender />
					</div>
				</div>
			</section>

			{/* teams */}

			<section className={styles.container}>
				<h2
					style={{
						textAlign: 'left',
						paddingInline: '1rem',
						paddingTop: '1rem',
						paddingBottom: '.5rem',
						color: ' rgb(28, 6, 75)'
					}}>
					Student Groups
				</h2>
				<div className={styles.innerContainer}>
					{teams.map(year => (
						<div
							className={styles.card}
							onClick={() => {
								yearHandler(year)
							}}>
							<h2>{year}</h2>
						</div>
					))}
					<div
						className={styles.card}
						onClick={() => {
							yearHandler(year)
						}}>
						<h2 style={{ fontSize: '35px' }}>+</h2>
					</div>
				</div>
			</section>
		</div>
	)
}

export default StudentsComponent
