import React, { useEffect } from 'react'
import styles from './Students.module.css'
import { Add } from '@material-ui/icons'

import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../../Actions/MovieAction'
import { getStudents } from '../../Actions/StudentAction'

const Students = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const location = useLocation()
	const students = useSelector(state =>state.student.students)
	const {batch} = location.state
	const addHandler = e => {
		e.preventDefault()
		navigate('/admin/students/add',{state:{batch}})
	}

	useEffect(() => {
		dispatch(getItems())
		dispatch(getStudents())
	}, [dispatch])

	const headers = ['No',"Index", 'First Name',"Last Name", 'Class',"Date of birth"]
	console.log(students);
	const displayStudents = students.filter(student => student.enrolledClass.some(clas => clas._id === batch._id))
	console.log(displayStudents);
 
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h2>
					{batch.year} {batch.className} Students
				</h2>
				<Add className="addbtn" onClick={addHandler} />
			</div>
			<div className="netflix-profile-Content-container">
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
							<th style={{ textTransform: 'capitalize' }} key={header}>{header}</th>
						))}
					</tr>
				</thead>

				<tbody>
					{displayStudents.map(data => (
						<tr  key={data._id}>
							<td>{displayStudents.indexOf(data) + 1}</td>
							<td>{data.indexNumber}</td>
							<td>{data.firstName}</td>
							<td> {data.lastName}</td>
							<td>
								{data?.enrolledClass[data.enrolledClass.length -1]?.className}
							</td>
							<td>{data.dob}</td>
						</tr>
					))}
				</tbody>
			</table>
				
			</div>
		</div>
	)
}

export default Students
