import React from 'react'
import styles from './Button.module.css'

function Button({ btnColor, title, color, onPress }) {
	const extraStyles = {
		backgroundColor: btnColor,
		color: color
	}

	const mergeStyles = {
		...extraStyles,
		...styles
	}
	return <div className={mergeStyles}>{title}</div>
}

export default Button

{
}
// className={[styles.examplecomponentstyle, "pa5"].join(" ")};
