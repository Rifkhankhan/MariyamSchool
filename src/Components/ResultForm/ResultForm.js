import axios from 'axios'
import React, { useEffect, useState } from 'react'

import styles from './ResultForm.module.css'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { current } from '@reduxjs/toolkit'
const ResultForm = ({ data }) => {
	const [inputs, setInputs] = useState({
		year: { value: '', isValid: true },

		batch: { value: '', isValid: true },
		subject: { value: '', isValid: true },
		examName: { value: '', isValid: true }
	})
	const [showTable, setShowTable] = useState(false)
	const [marks, setMarks] = useState(0)
	const [index, setIndex] = useState()
	const [results, setResults] = [
		[{
			id: 1,
			index: 542,
			name: 'Mohammed Rifkhan',
			marks: null,
			result: null
		},
		{
			id: 2,
			index: 786,
			name: 'Mohammed Rifsan',
			marks: 90,
			result: 'A+'
		},
		{
			id: 3,
			index: 78786,
			name: 'Mohammed btbs',
			marks: null,
			result: null
		},
		{
			id: 4,
			index: 7686,
			name: 'Mohammed Riffwefsan',
			marks: null,
			result: null
		},
		{
			id: 5,
			index: 687,
			name: 'Mohammed fes',
			marks: null,
			result: null
		}]
	]

	console.log(results);
	const formValid =
		inputs.year.isValid &&
		inputs.batch.isValid &&
		inputs.subject.isValid &&
		inputs.examName.isValid

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
		console.log(inputs)
		const data = {
			year: inputs.year.value.trim(),
			batch: inputs.batch.value.trim(),
			subject: inputs.subject.value.trim(),
			examName: inputs.examName.value.trim()
		}

		const yearValid = data.year.length > 0
		const batchValid = data.batch?.length > 0
		const subjectValid = data.subject?.length > 0
		const examNameValid = data.examName?.length > 0

		if (!yearValid || !batchValid || !subjectValid || !examNameValid) {
			setInputs(currentInputs => {
				return {
					year: { value: currentInputs.year.value, isValid: yearValid },
					batch: {
						value: currentInputs.batch.value,
						isValid: batchValid
					},
					subject: {
						value: currentInputs.subject.value,
						isValid: subjectValid
					},
					examName: {
						value: currentInputs.examName.value,
						isValid: examNameValid
					}
				}
			})

			console.log(inputs)

			return
		}

		setShowTable(current => !current)
		// onSubmitHandler(data)
	}

	// checkMarksHandler
	const checkMarksHandler = ({ id, marks, result }) => {}

	// convertMarksToResult
	const convertMarksToResult = marks => {
		if (+marks >= 90) {
			return 'A+'
		} else if (+marks < 90 && +marks >= 75) {
			return 'A'
		} else if (+marks < 70 && +marks >= 65) {
			return 'B+'
		} else if (+marks < 65 && +marks >= 55) {
			return 'B'
		} else if (+marks < 55 && +marks >= 45) {
			return 'C'
		} else if (+marks < 45 && +marks >= 35) {
			return 'S'
		}
		return 'W'
	}

	// selectStudentHandler

	const selectStudentHandler = id => {
		const selectStudent = results.find(result => result.id === id)
	}

	// marksHandler
	const marksHandler = e => {
		console.log(e.target.value)

		if (e.target.value > 100) {
			setMarks(100)
		} else if (e.target.value < 0) {
			setMarks(0)
		} else {
			setMarks(e.target.value)
		}
	}

	// marksAddHandler
	const marksAddHandler = () => {
		const result = convertMarksToResult(marks)

		const selectStudent = results.find(result => result.id === +index)
		const indexStudent = results.indexOf(selectStudent)

		selectStudent.marks = marks
		selectStudent.result = result

		results[indexStudent] = selectStudent

		// setResults(results)
	}

	useEffect(() => {}, [results])

	return (
		<div className={styles.container}>
			{!formValid && (
				<div className={styles.errorMessageContainer}>
					<p className={styles.errorMessage}>Invalid Data Please check!</p>
				</div>
			)}
			<form onSubmit={submitHandler} className={styles.form}>
				<div className={styles.inputRow}>
					<Input
						label="Year"
						inValid={!inputs.year.isValid}
						defaultValue={inputs.year.value}
						textInputConfig={{
							onChange: e => inputTextChangeHandler('year', e.target.value),
							disabled: showTable
						}}
					/>
				</div>

				<div className={styles.inputRow}>
					<Input
						label="Class"
						inValid={!inputs.batch.isValid}
						defaultValue={inputs.batch.value}
						textInputConfig={{
							onChange: e => inputTextChangeHandler('batch', e.target.value),
							disabled: showTable
						}}
					/>
				</div>
				<div className={styles.inputRow}>
					<Input
						label="Subject"
						inValid={!inputs.subject.isValid}
						defaultValue={inputs.subject.value}
						textInputConfig={{
							onChange: e => inputTextChangeHandler('subject', e.target.value),
							disabled: showTable
						}}
					/>
				</div>

				<div className={styles.inputRow}>
					<Input
						label="Exam Name"
						inValid={!inputs.examName.isValid}
						defaultValue={inputs.examName.value}
						textInputConfig={{
							onChange: e => inputTextChangeHandler('examName', e.target.value),
							disabled: showTable
						}}
					/>
				</div>

				<div className={`${styles.inputRow} ${styles.buttonContainer}`}>
					<button
						type="submit"
						className={styles.button}
						// disabled={formValid}
					>
						{!showTable ? 'Show Students' : 'Edit Form'}
					</button>
				</div>
			</form>
			{showTable && formValid && (
				<div className={styles.tableContainer}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							flexWrap: 'wrap',
							alignItems: 'flex-end'
						}}>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								backgroundColor: 'aqua',
								margin: '1rem'
							}}>
							<label style={{ padding: '0.3rem' }}>Index</label>
							<select
								style={{ padding: '0.3rem' }}
								onChange={e => setIndex(e.target.value)}>
								{results?.map(result => (
									<option value={result.id}>{result.index}</option>
								))}
							</select>
						</div>

						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								backgroundColor: 'aqua',
								margin: '1rem'
							}}>
							<label>Marks</label>
							<input
								type="number"
								onChange={marksHandler}
								defaultValue={marks}
								min={0}
								max={100}
							/>
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								backgroundColor: 'aqua',
								margin: '1rem'
							}}>
							<button onClick={marksAddHandler}>Submit</button>
						</div>
					</div>
				</div>
			)}
			{showTable && formValid && (
				<div className={styles.tableContainer}>
					<table className={styles.table}>
						<thead>
							<tr>
								<th>#</th>
								<th>Index</th>
								<th>Name</th>
								<th>Marks</th>
								<th>Result</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{results.map(result => (
								result.result && <tr
									key={result.id}
									onClick={() => selectStudentHandler(result.id)}>
									<td>{result.id}</td>
									<td>{result.index}</td>
									<td>{result.name}</td>
									<td>
										{!result.marks ? (
											<input
												type="number"
												name=""
												value=""
												style={{
													padding: '0.2rem',
													border: 'none',
													display: 'flex',
													flex: 1
												}}
											/>
										) : (
											result.marks
										)}
									</td>
									<td>
										{result.marks ? convertMarksToResult(result.marks) : ''}
									</td>
									<td>
										<button
											type="button"
											onClick={() =>
												checkMarksHandler({
													id: result.id,
													marks: result.marks,
													result: convertMarksToResult(result.marks)
												})
											}
											style={{
												padding: '10px',
												border: 'none',
												backgroundColor: 'green',
												color: 'white',
												borderRadius: '5px'
											}}>
											Check
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

export default ResultForm
