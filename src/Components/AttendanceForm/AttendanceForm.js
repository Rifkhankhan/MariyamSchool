import axios from 'axios'
import React, { useEffect, useState } from 'react'

import styles from './AttendanceForm.module.css'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { current } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { getYears } from '../../Actions/YearAction'
import { getClasses } from '../../Actions/ClassAction'
import { Label } from '@material-ui/icons'
import { getAttendances, getAttendancesForYYYYMM, getStudents, pushAttendance ,pullAttendance} from '../../Actions/StudentAction'
import { useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'

const AttendanceForm = ({ data }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const years = useSelector(state => state.year.years)
	const classNames = useSelector(state => state.class.classes)
	const isLoading = useSelector(state => state.ui.isLoading)
	const [showTable, setShowTable] = useState(false)
	const attendance = useSelector(state => state.attendance.studentsAttendances)
	const [makeRequest,setMakeRequest] = useState(false)
	

	const [inputs, setInputs] = useState({
		year: { value: '', isValid: true },

		class: { value: '', isValid: true },
		date: { value: '', isValid: true }
	})
	useEffect(() => {
		dispatch(getYears())
		dispatch(getClasses())
		dispatch(getStudents())
		
	}, [])

	useLayoutEffect(() => {
		console.log('attendance working');
		dispatch(getAttendances({date:inputs.date.value})) 

		return () => {

		}
	},[inputs.date.value])

	

	const displayClasses = classNames.filter(
		clas => clas.year.toString() === inputs.year.value
	)
	const selectClassstudents = classNames.find(
		clas => clas._id === inputs.class.value
	)

	const formValid =
		inputs.year.isValid && inputs.class.isValid && inputs.date.isValid

	const inputTextChangeHandler = (inputType, enteredValue) => {
		setInputs(currentInputValue => {
			return {
				...currentInputValue,
				[inputType]: { value: enteredValue, isValid: true }
			}
		})
	}
	const submitHandler = e => {
		e.preventDefault()
		const data = {
			year: inputs.year.value,
			class: inputs.class.value,
			date: inputs.date.value
		}

		const yearValid = data.year.length > 0
		const classValid = data.class?.length > 0
		const dateValid = data.date?.length > 0

		if (!yearValid || !classValid || !dateValid) {
			setInputs(currentInputs => {
				return {
					year: { value: currentInputs.year.value, isValid: yearValid },
					class: {
						value: currentInputs.class.value,
						isValid: classValid
					},
					date: {
						value: currentInputs.date.value,
						isValid: dateValid
					}
				}
			})

			console.log(inputs)

			return
		}
		setMakeRequest(curr => !curr)

		setShowTable(current => !current)
		// onSubmitHandler(data)
	}

	const selectStudentHandler = id => {
		navigate(`/admin/students/${id}`)
	}
	const  attendanceMarkhandler =  (id, type) => {
		setMakeRequest(curr => !curr)
		if (type === 'push') {
			dispatch(pushAttendance(id, {date:inputs.date.value}))
		} else {
			dispatch(pullAttendance(id, {date:inputs.date.value}))
		}
	}
	return (
		<div className={styles.container}>
			{!formValid && (
				<div className={styles.errorMessageContainer}>
					<p className={styles.errorMessage}>Invalid Data Please check!</p>
				</div>
			)}
			<form onSubmit={submitHandler} className={styles.form}>
				<div className={styles.inputSelectRow}>
					<label>Year</label>
					<select
						onChange={e => inputTextChangeHandler('year', e.target.value)}
						disabled={showTable}>
						<option>Select Year</option>
						{years?.map(data => (
							<option key={data._id} value={data.year}>
								{data.year}
							</option>
						))}
					</select>
				</div>
				<div className={styles.inputSelectRow}>
					<label>className</label>
					<select
						onChange={e => inputTextChangeHandler('class', e.target.value)}
						disabled={showTable}>
						<option>Select class</option>

						{displayClasses?.map(data => (
							<option key={data._id} value={data._id}>
								{data.className}
							</option>
						))}
					</select>
				</div>

				<div className={styles.inputRow}>
					<Input
						label="Date"
						inValid={!inputs.date.isValid}
						defaultValue={inputs.date.value}
						textInputConfig={{
							onChange: e => inputTextChangeHandler('date', e.target.value),
							disabled: showTable,
							type: 'date'
						}}
					/>
				</div>

				<div className={`${styles.inputRow} ${styles.buttonContainer}`}>
					<button type="submit" className={styles.button}>
						{!showTable ? 'Submit' : 'Change Data'}
					</button>
				</div>
			</form>

			{showTable && formValid && (
				<div className={styles.tableContainer}>
					<table className={styles.table}>
						<thead>
							<tr>
								<th>#</th>
								<th>Index</th>
								<th>Name</th>
								<th>Present</th>

								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{selectClassstudents?.students.map(student => (
								<tr key={student._id}>
									<td>{selectClassstudents?.students.indexOf(student) + 1}</td>
									<td>{student.indexNumber}</td>
									<td>
										{student.firstName} {student.lastName}
									</td>
									<td>
										{attendance[0]?.students?.some(stud => stud._id === student._id)
											? 'Present'
											: 'Absent'}
									</td>

									<td>
										{attendance[0]?.students?.some(stud => stud._id === student._id) ? (
											<button
												type="button"
												onClick={() =>
													attendanceMarkhandler(student._id, 'pull')
												}
												style={{
													padding: '10px',
													border: 'none',
													backgroundColor: 'red',
													color: 'white',
													borderRadius: '5px',
													marginInline: '0.5rem',
													cursor: 'pointer'
												}}>
												Absent
											</button>
										) : (
											<button
												type="button"
												onClick={() =>
													attendanceMarkhandler(student._id, 'push')
												}
												style={{
													padding: '10px',
													border: 'none',
													backgroundColor: 'green',
													color: 'white',
													borderRadius: '5px',

													marginInline: '0.5rem',
													cursor: 'pointer'
												}}>
												Present
											</button>
										)}

										<button
											type="button"
											onClick={() => selectStudentHandler(student._id)}
											style={{
												padding: '10px',
												border: 'none',
												backgroundColor: 'blue',
												color: 'white',
												borderRadius: '5px',

												marginInline: '0.5rem',
												cursor: 'pointer'
											}}>
											View
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	)
}

export default AttendanceForm
