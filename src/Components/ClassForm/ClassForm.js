import axios from 'axios'
import React, { useEffect, useState } from 'react'

import styles from './ClassForm.module.css'

import Input from '../Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { createYear } from '../../Actions/YearAction'
import { createClass } from '../../Actions/ClassAction'
import { useLocation, useParams } from 'react-router-dom'
const ClassForm = () => {
	const [className,setClassName] = useState('')
	const [isValid, setIsValid] = useState(true)
	const [formValid, setFormValid] = useState(false)
	const dispatch = useDispatch()
	const isLoading = useSelector(state => state.ui.isLoading)
	const requestFinished = useSelector(state => state.ui.requestFinished)
	const params = useLocation()
	const year = params.state.year

	// const year = params.year

	const inputTextChangeHandler = e => {
		setClassName(e.target.value.trim())

		if (e.target.value > 0) {
			setIsValid(true)
		}
	}

	const submitHandler = e => {
		e.preventDefault()

		if (className.length > 0) {
			setIsValid(true)
			setFormValid(true)
			dispatch(createClass({ year: year,className:className }))
		} else {
			setIsValid(false)
		}
	}

	return (
		<div className={styles.container}>
			{!isValid && (
				<div className={styles.errorMessageContainer}>
					<p className={styles.errorMessage}>Invalid Data Please check!</p>
				</div>
			)}

			<div>
				<h2 style={{ textAlign: 'left', paddingBlock: '1rem' }}>
					Create Class for {year}
				</h2>
			</div>
			
			<form onSubmit={submitHandler} className={styles.form}>
				<div className={styles.inputRow}>
					<Input
						label="Year"
						defaultValue={year}
						textInputConfig={{
							type: 'Number',
							disabled: true,
							placeholder:year
						
						}}
					/>
				</div>

				<div className={styles.inputRow}>
					<Input
						label="ClassName"
						inValid={!isValid}
						defaultValue={className}
						textInputConfig={{
							onChange: inputTextChangeHandler,
							disabled: isLoading,
						}}
					/>
				</div>
				<div className={`${styles.inputRow} ${styles.buttonContainer}`}>
					<button type="submit" className={styles.button}>
						{!isLoading ? 'Submit' : 'Loading'}
					</button>
				</div>
			</form>
		</div>
	)
}

export default ClassForm
