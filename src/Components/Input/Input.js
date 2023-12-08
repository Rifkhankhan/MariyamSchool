import React from 'react'
import styles from './Input.module.css'

function Input({ label, inValid, style, textInputConfig }) {
	const inputStyles = [styles.input]

	if (inValid) {
		inputStyles.push(styles.errorInput)
	}

	if (textInputConfig && textInputConfig.multiline) {
		inputStyles.push(styles.inputMultiline)
	}

	return (
		<div className={`${styles.container} ${style}`}>
			{/* <p className={[styles.label, inValid && styles.error]}>{label}</p> */}
			<p className={styles.label}>{label}</p>
			<input className={styles.input} {...textInputConfig}/>
		</div>
	)
}

export default Input
