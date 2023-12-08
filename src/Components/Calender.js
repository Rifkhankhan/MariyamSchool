import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]
function Calender() {
	const [value, onChange] = useState(new Date())
	console.log(value);
	return (
		<div style={{width:"100%"}}>
			<Calendar onChange={onChange} value={value}  />
		</div>
	)
}

export default Calender
