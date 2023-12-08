import React, { useEffect } from 'react'
import styles from './Exam.module.css'
import { Add } from '@material-ui/icons'

import { useLocation, useNavigate, useRoutes } from 'react-router-dom'

import Calender from '../Calender'
import { useState } from 'react'

// get days
import { getDaysInMonth, getDaysInYear } from 'date-fns'
import TableComponent from '../TableComponent/TableComponent'
import { getAttendancesForYYYYMM } from '../../Actions/StudentAction'
import { getYears } from '../../Actions/YearAction'
import { getClasses } from '../../Actions/ClassAction'
import { useDispatch, useSelector } from 'react-redux'
import { getExams } from '../../Actions/ExamAction'
const Exam = () => {
	const [year, setYear] = useState()

	const [className, setClassName] = useState()

	const dispatch = useDispatch()
	const years = useSelector(state => state.year.years)
	const batches = useSelector(state => state.class.classes)
	const studentsAttendances = useSelector(
		state => state.attendance.studentsAttendances
	)
	const exams = useSelector(state => state.exam.exams)
	const displayAttendances = studentsAttendances.filter(atte =>
		atte.students.find(student => student.enrolledClass.includes(className))
	)

	const navigate = useNavigate()

	const displayExams = exams?.filter(
		exam => exam.date.slice(0, 4) === year?.toString()
	)

	const date = new Date().getFullYear()
	
	const displayCommingExams = exams.filter(exam => +exam.date.slice(0,4) >= date)

	useEffect(() => {
		dispatch(getYears())
		dispatch(getClasses())
		dispatch(getExams())
	}, [])

	const yearHandler = batch => {
		setYear(batch)
		// navigate(`/admin/students/batch`, { state: batch })
	}

	const classHandler = batch => {
		console.log(batch)
		setClassName(batch)
		// navigate(`/admin/students/batch`, { state: { year: year, batch: batch } })
	}

	const createExamHandler = () => {
		navigate('/admin/exams/add')
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
						{years?.map(yea => (
							<div
								className={styles.card}
								onClick={() => {
									yearHandler(yea.year)
								}}>
								<h2>{yea.year}</h2>
							</div>
						))}
						<div className={styles.card} onClick={createExamHandler}>
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
						{year} Exams
					</h2>
					<div className={styles.innerContainer}>
						{displayExams.map(exam => (
							<div
								key={exam._id}
								className={`${styles.examCard} ${styles.card}`}
								onClick={() => {
									classHandler(exam._id)
								}}>
								<h2>{exam.name}</h2>
								<p>{exam.date.slice(0, 10)}</p>
							</div>
						))}
					</div>
				</section>
			)}

			<section className={styles.container}>
				<h2
					style={{
						textAlign: 'left',
						paddingInline: '1rem',
						paddingTop: '1rem',
						paddingBottom: '.5rem',
						color: ' rgb(28, 6, 75)'
					}}>
					Comming Exams
				</h2>

				<div className={styles.sheduleContainer}>
					{displayCommingExams.map(exam => (
						<div className={styles.sheduleInnerContainer}>
							<h3>{exam.name}</h3>
							<p
								style={{
									display: 'flex',
									alignItems: 'flex-end',
									justifyContent: 'flex-end'
								}}>
								{exam.date.slice(0, 10)}
							</p>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}

export default Exam
