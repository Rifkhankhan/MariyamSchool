import React, { useEffect } from 'react'
import styles from './Result.module.css'
import { Add } from '@material-ui/icons'

import { useLocation, useNavigate, useRoutes } from 'react-router-dom'

import Calender from '../Calender'
import { useState } from 'react'

// get days
import { getDaysInMonth, getDaysInYear } from 'date-fns'
import TableComponent from '../TableComponent/TableComponent'
import { useDispatch, useSelector } from 'react-redux'
import { getYears } from '../../Actions/YearAction'
import { getClasses } from '../../Actions/ClassAction'
const Result = () => {
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

		
		
		</div>
	)
}

export default Result
