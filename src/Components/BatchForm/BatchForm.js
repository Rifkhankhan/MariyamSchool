import axios from 'axios'
import React, { useEffect, useState } from 'react'

import styles from './BatchForm.module.css'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { createYear } from './../../Actions/YearAction'
const BatchForm = ({ data }) => {
	const [year, setYear] = useState(0)
	const [isValid, setIsValid] = useState(true)
	const [formValid, setFormValid] = useState(false)
	const dispatch = useDispatch()
	const isLoading = useSelector(state => state.ui.isLoading)
	const requestFinished = useSelector(state => state.ui.requestFinished)

	const inputTextChangeHandler = e => {
		setYear(e.target.value)

		if (e.target.value > 0) {
			setIsValid(true)
		}
	}

	const submitHandler = e => {
		e.preventDefault()

		if (year > 0) {
			setYear(0)
			setIsValid(true)
			setFormValid(true)

			dispatch(createYear({ year: year }))
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
					Create Batch
				</h2>
			</div>
			<form onSubmit={submitHandler} className={styles.form}>
				<div className={styles.inputRow}>
					<Input
						label="Year"
						inValid={!isValid}
						defaultValue={year}
						textInputConfig={{
							type: 'Number',
							onChange: inputTextChangeHandler,
							disabled: isLoading,
							placeholder:"Enter"
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

export default BatchForm
