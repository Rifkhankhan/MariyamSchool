import React, { useEffect } from 'react'
import styles from './Attendance.module.css'
import { Add } from '@material-ui/icons'

import { useNavigate } from 'react-router-dom'

import Calender from '../Calender'
import { useState } from 'react'

// get days
import { getDaysInMonth, getDaysInYear } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'
import { getYears } from '../../Actions/YearAction'
import { getClasses } from '../../Actions/ClassAction'
import { getAttendancesForYYYYMM } from '../../Actions/StudentAction'

const Attendance = () => {
	const [year, setYear] = useState()
	const [days, setDays] = useState()
	const [day, setDay] = useState()
	const [className, setClassName] = useState()
	const [month, setMonth] = useState()
	const [date, setDate] = useState()
	const dispatch = useDispatch()
	const years = useSelector(state => state.year.years)
	const batches = useSelector(state => state.class.classes)
	const studentsAttendances = useSelector(
		state => state.attendance.studentsAttendances
	)
	const displayAttendances = studentsAttendances.filter(atte =>
		atte.students.find(student => student.enrolledClass.includes(className))
	)
	console.log(displayAttendances)
	console.log(className)
	console.log(batches)

	const navigate = useNavigate()

	const displayClasses = batches.filter(batch => batch.year === year)
	console.log(displayClasses)
	const teams = ['Prefects', 'Band', 'Scoud', 'Grath']

	useEffect(() => {
		dispatch(getYears())
		dispatch(getClasses())
	}, [])

	useEffect(() => {
		dispatch(
			getAttendancesForYYYYMM({ date: `${year}-${months.indexOf(month) + 1}` })
		)
	}, [month])

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	]

	const yearHandler = batch => {
		setYear(batch)
		// navigate(`/admin/students/batch`, { state: batch })
	}

	const classHandler = batch => {
		console.log(batch)
		setClassName(batch)
		// navigate(`/admin/students/batch`, { state: { year: year, batch: batch } })
	}
	const addBatch = batch => {
		console.log(batch)

		navigate('/admin/students/batch/add')
	}

	const monthHandler = month => {
		const Month = months.indexOf(month)
		const days = getDaysInMonth(new Date(year, Month))

		setDays(days)
		setMonth(month)
	}
	const dayHandler = day => {
		setDay(day)
	}
	// const getDaysOfMonth = (year,month) => {
	// 	const Month = months.indexOf(month)
	// 	const days = getDaysInMonth(new Date(year,Month))
	// 	console.log(days);
	// 	setDays(days)
	// }
	//

	// initialize headers and datas

	const headers = ['no', 'date', 'presants', 'total students', 'average']

	const studentHeaders = ['No', 'First Name', 'Last Name', 'Type', 'Action']

	// selectDateHandler
	const selectDateHandler = date => {
		setDate(date)
	}

	const onPressHandler = () => {
		navigate(`/admin/students/${45}`)
	}

	const createNewAttandance = () => {
		navigate('/admin/attendance/create')
	}
	return (
		<div className={styles.rootContainer}>
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
					<div className={styles.col1}>
						<div className={`${styles.attendancePersantageCircle}`}>
							<h2 className={styles.attendancePersantageamount}>
								<span>75</span>%
							</h2>
							<h2 style={{ fontFamily: 'times' }}>Students</h2>
						</div>
					</div>

					<div className={styles.col2}>
						<Calender />
					</div>
					<div className={styles.col3}>
						<div className={`${styles.attendancePersantageCircle} border:`}>
							<h2 className={styles.attendancePersantageamount}>
								<span>85</span>%
							</h2>
							<h2 style={{ fontFamily: 'times' }}>Teachers</h2>
						</div>
					</div>
				</div>
			</section>

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
						<div
							className={styles.card}
							onClick={() => {
								createNewAttandance()
							}}>
							<h2 style={{ fontSize: '35px' }}>+</h2>
						</div>
					</div>
				</section>
			)}

			{year && !className && (
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
						{displayClasses.map(batch => (
							<div
								key={batch._id}
								className={styles.card}
								onClick={() => {
									classHandler(batch._id)
								}}>
								<h2>{batch.className}</h2>
							</div>
						))}
					</div>
				</section>
			)}
			{year && className && !month && (
				<section className={styles.container}>
					<h2
						style={{
							textAlign: 'left',
							paddingInline: '1rem',
							paddingTop: '1rem',
							paddingBottom: '.5rem',
							color: ' rgb(28, 6, 75)'
						}}>
						{year} {displayClasses.find(cls => cls._id === className).className}
					</h2>
					<div className={styles.innerContainer}>
						{months.map(mon => (
							<div
								key={mon}
								className={styles.card}
								onClick={() => {
									monthHandler(mon)
								}}>
								<h2>{mon}</h2>
							</div>
						))}
					</div>
				</section>
			)}

			{year && className && month && !date && (
				<section className={styles.container}>
					<h2
						style={{
							textAlign: 'left',
							paddingInline: '1rem',
							paddingTop: '1rem',
							paddingBottom: '.5rem',
							color: ' rgb(28, 6, 75)'
						}}>
						{year} {month} Class{' '}
						{displayClasses.find(cls => cls._id === className).className}
					</h2>
					<div className={styles.innerContainer}>
						<table
							className={styles.student_table}
							style={{ backgroundColor: 'lightblue' }}>
							<thead>
								<tr
									className={styles.table_head}
									style={{
										backgroundColor: 'darkblue',
										color: 'white'
									}}>
									{headers.map(header => (
										<th style={{ textTransform: 'capitalize' }} key={header}>
											{header}
										</th>
									))}
								</tr>
							</thead>

							<tbody>
								{displayAttendances.map(atte => (
									<tr
										onClick={() => selectDateHandler(atte.date)}
										key={atte._id}>
										<td>{displayAttendances.indexOf(atte) + 1}</td>
										<td>{atte.date.slice(0, 10)}</td>
										<td>
											{
												atte.students.filter(student =>
													student.enrolledClass.includes(className)
												).length
											}
										</td>
										{/* <td>{data.age}</td> */}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>
			)}

			{/* student details */}

			{year && className && month && date && (
				<section className={styles.container}>
					<h2
						style={{
							textAlign: 'left',
							paddingInline: '1rem',
							paddingTop: '1rem',
							paddingBottom: '.5rem',
							color: ' rgb(28, 6, 75)'
						}}>
						{date} (Class : {className})
					</h2>
					<div className={styles.innerContainer}>
						<table
							className={styles.student_table}
							style={{ backgroundColor: 'lightblue' }}>
							<thead>
								<tr
									className={styles.table_head}
									style={{
										backgroundColor: 'darkblue',
										color: 'white'
									}}>
									{studentHeaders.map(header => (
										<th style={{ textTransform: 'capitalize' }} key={header}>
											{header}
										</th>
									))}
								</tr>
							</thead>

							<tbody>
								{/* {students.map(data => (
									<tr onClick={() => onPressHandler(data.id)} key={data.id}>
										<td>{students.indexOf(data) + 1}</td>
										<td>{data['First Name']}</td>
										<td>{data['Last Name']}</td>
										<td>
											{displayAttendances
												.find(atte => atte.date === date)
												.students.some(student => student.id === data.id)
												? 'P'
												: 'A'}
										</td>
										<td>
											 {
												data.students.filter(
													student =>
														student.class === className.toString()
												).length
											} 
										</td>
										<td>{data.age}</td>
									</tr>
								))} */}
							</tbody>
						</table>
					</div>
				</section>
			)}

			{/* <section className={styles.container}>
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
							key={year}
							className={styles.card}
							onClick={() => {
								yearHandler(year._id)
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
			</section> */}
		</div>
	)
}

export default Attendance
