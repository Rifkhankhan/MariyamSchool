import axios from 'axios'
import React, { useEffect, useState } from 'react'

import styles from './Form.module.css'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { useLocation } from 'react-router-dom'
import { createStudent } from '../../Actions/StudentAction'
import { useDispatch } from 'react-redux'
const Form = ({ data }) => {
	const location = useLocation()
	const {batch} = location.state
	console.log(batch);
	const dispatch = useDispatch()
	const [inputs, setInputs] = useState({
		fname: { value: data ? data?.fname : '', isValid: true },
		dob: { value: data ? data?.dob : '', isValid: true },
		parent: { value: data ? data?.parent : '', isValid: true },
		lname: { value: data ? data?.lname : '', isValid: true },
		class: { value: batch ? batch.className : '', isValid: true },
		entrollDate: {
			value: data ? data?.entrollDate.toISOString().slice(0, 10) : '',
			isValid: true
		}
	})

	const formValid =
		inputs.fname.isValid &&
		inputs.lname.isValid &&
		inputs.dob.isValid &&
		inputs.parent.isValid &&
		inputs.class.isValid &&
		inputs.entrollDate.isValid

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
			fname: inputs.fname.value.trim(),
			lname: inputs.lname.value.trim(),
			dob: inputs.dob.value,
			parent: inputs.parent.value.trim(),
			class: inputs.class.value.trim(),
			entrollDate: inputs.entrollDate.value
		}

		const fnameValid = data.fname.length > 0
		const lnameValid = data.lname?.length > 0
		const dobValid = data.dob.length > 0 
		const entrollDateValid = data.entrollDate.length > 0
		const gradeValid = data.class.length > 0
		const parentValid = data.parent.length > 0

		if (
			!fnameValid ||
			!lnameValid ||
			!dobValid ||
			!entrollDateValid ||
			!gradeValid ||
			!parentValid
		) {
			setInputs(currentInputs => {
				return {
					fname: { value: currentInputs.fname.value, isValid: fnameValid },
					lname: {
						value: currentInputs.lname.value,
						isValid: lnameValid
					},
					dob: { value: currentInputs.dob.value, isValid: dobValid },
					parent: { value: currentInputs.parent.value, isValid: parentValid },
					class: { value: currentInputs.class.value, isValid: gradeValid },
					entrollDate: {
						value: currentInputs.entrollDate.value,
						isValid: entrollDateValid
					}
				}
			})

			return
		}

		dispatch(createStudent({data:data,batch:batch}))
	}

	return (
		<div className={styles.container}>
			{!formValid && (
					<div className={styles.errorMessageContainer}>
						<p className={styles.errorMessage}>Invalid Data Please check!</p>
					</div>
				)}
				<div>
					<h2 style={{textAlign:'left',paddingBlock:'1rem'}}>Create Student for {batch.className} in {batch.year}</h2>
				</div>
			<form onSubmit={submitHandler} className={styles.form}>
				<div className={styles.inputRow}>
					<Input
						label="First Name"
						inValid={!inputs.fname.isValid}
						defaultValue={inputs.fname.value}
						textInputConfig={{
							onChange: e => inputTextChangeHandler('fname', e.target.value),
							placeholder: 'First Name'
						}}
					/>
				</div>
				<div className={styles.inputRow}>
					<Input
						label="Last Name"
						inValid={!inputs.lname.isValid}
						defaultValue={inputs.lname.value}
						textInputConfig={{
							onChange: e => inputTextChangeHandler('lname', e.target.value)
						}}
					/>
				</div>

				<div className={styles.inputRow}>
					<Input
						label="Date of birth"
						inValid={!inputs.dob.isValid}
						defaultValue={inputs.dob.value}
						textInputConfig={{
							onChange: e => inputTextChangeHandler('dob', e.target.value),
							placeholder: 'YYYY - MM - DD',
							type: 'date'
						}}
					/>
				</div>

				<div className={styles.inputRow}>
					<Input
						label="Class"
						inValid={!inputs.class.isValid}
						defaultValue={inputs.class.value}
						textInputConfig={{
							onChange: e => inputTextChangeHandler('class', e.target.value),
							placeholder:inputs.class.value,
							disabled:true
						}}
					/>
				</div>

				<div className={styles.inputRow}>
					<Input
						label="Parent Name"
						inValid={!inputs.parent.isValid}
						defaultValue={inputs.parent.value}
						textInputConfig={{
							onChange: e => inputTextChangeHandler('parent', e.target.value)
						}}
					/>
				</div>
				<div className={styles.inputRow}>
					<Input
						label="Entrolled Date"
						inValid={!inputs.entrollDate.isValid}
						defaultValue={inputs.entrollDate.value}
						textInputConfig={{
							onChange: e => inputTextChangeHandler('entrollDate', e.target.value),
							type: 'date'
						}}
					/>
				</div>
				
				<div className={`${styles.inputRow} ${styles.buttonContainer}`}>
					<button type="submit" className={styles.button}>
						Submit
					</button>
				</div>
			</form>
		</div>
	)
}

export default Form
