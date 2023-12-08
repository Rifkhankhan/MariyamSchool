import React, { useEffect } from 'react'
import styles from './Teachers.module.css'

import { Add } from '@material-ui/icons'
import Calender from '../Calender'

import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

const Teachers = () => {
	const [year, setYear] = useState()

	const navigate = useNavigate()

	const years = [2015, 2016, 2018, 2019, 2020, 2021, 2022, 2023]
	const batch = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'O/L', 'A/L']
	const teams = ['Discipline', 'Band', 'Scoud', 'Grath']

	const yearHandler = batch => {
		setYear(batch)
		// navigate(`/admin/students/batch`, { state: batch })
	}

	const batchHandler = batch => {
		navigate(`/admin/students/batch`, { state: { year: year, batch: batch } })
	}
	return (
		<div className={styles.rootContainer}>
			<section className={styles.container}>
				<h2
					style={{
						textAlign: 'left',
						paddingInline: '1rem',
						paddingTop: '1rem',
						paddingBottom: '.5rem',
						color: ' rgb(28, 6, 75)'
					}}>
					Teachers Batch
				</h2>
				<div className={styles.innerContainer}>
					{years.map(year => (
						<div
							className={styles.card}
							onClick={() => {
								yearHandler(year)
							}}>
							<h2>{year}</h2>
						</div>
					))}
				</div>
			</section>

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
							<h2 style={{ fontFamily: 'times', color: 'blue' }}>Today</h2>
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
					Teacher Groups
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
				</div>
			</section>
		</div>
	)
}

export default Teachers
