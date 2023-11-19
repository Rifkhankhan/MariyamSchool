import React, { useEffect, useState } from 'react'
import styles from './Students.module.css'

import { useDispatch, useSelector } from 'react-redux'

import { netflixAuthActions } from '../../Redux/netflixAuthSlice'

import HomeImageCrousel from '../../Components/HomeImageCrousel/HomeImageCrousel'

function Students() {
	const dispatch = useDispatch()
	const [table1,setTable1] = useState('')
	const [table2,setTable2] = useState('')
	const [model, setModel] = useState(false)


	const table1ClicHandler = (year) => {
		setTable1(year)
	}

	const table2ClicHandler = (batch) => {
		setTable2(batch)
	}
	useEffect(() => {
		console.log('autologin')
		dispatch(netflixAuthActions.autoLogin())
	}, [])

	// useEffect(()=> {
	//   dispatch(getItems())
	//   dispatch(getCategories())
	// },[dispatch])

	// useEffect(() => {

	// },[model])
	// const searchHandler = (e) => {
	// 	setQuery(e)
	// 	setSearchItems(items?.filter(item => item.name.toLowerCase().includes(e.toLowerCase())))
	// }

	// useEffect(() => {},[query])

	useEffect(() => {
		return () => {
			document.documentElement.style.overflow = 'scroll'
			document.body.scroll = 'yes'
			setModel(false)
		}
	}, [])

	return (
		<>
			{/* <Topbar searchHandler={searchHandler} setModel={setModel} /> */}
			<div className={styles.container}>
				<HomeImageCrousel />
				<section className={styles.teacher_table}>
					{!table1 && !table2 &&<table >
						
						<tr>
							<th>#</th>
							<th>Year</th>
							<th>Students</th>
							<th>Other Staffs</th>
						</tr>
						<tr onClick={() => table1ClicHandler(1998)}>
							<td>1</td>
							<td>1998</td>
							<td>152</td>
							<td>15</td>
						</tr>
						<tr>
							<td>1</td>
							<td>1998</td>
							<td>152</td>
							<td>15</td>
						</tr>

						<tr>
							<td>1</td>
							<td>1998</td>
							<td>152</td>
							<td>15</td>
						</tr>

						<tr>
							<td>1</td>
							<td>1998</td>
							<td>152</td>
							<td>15</td>
						</tr>

						<tr>
							<td>1</td>
							<td>1998</td>
							<td>152</td>
							<td>15</td>
						</tr>
					</table>}

					{(table1 && !table2) && <div className={styles.table_container}><h1>{table1}</h1>
						<table >
						<tr>
							<th>#</th>
							<th>Batch</th>
							<th>Girls</th>
							<th>Boys</th>
						</tr>
					
						<tr onClick={() => table2ClicHandler("O/L")}>
							<td>1</td>
							<td>O/L</td>
							<td>152</td>
							<td>15</td>
						</tr>

						<tr>
							<td>1</td>
							<td>A/L</td>
							<td>152</td>
							<td>15</td>
						</tr>

						<tr>
							<td>1</td>
							<td>1998</td>
							<td>152</td>
							<td>15</td>
						</tr>

						<tr>
							<td>1</td>
							<td>1998</td>
							<td>152</td>
							<td>15</td>
						</tr>
					</table></div>}

					{table1 && table2 && <div className={styles.table_container}>
						<h1>{`${table1} ${table2}`}</h1>

						<table >
						<tr>
							<th>#</th>
							<th>Batch</th>
							<th>Girls</th>
							<th>Boys</th>
						</tr>
					
						<tr onClick={table2ClicHandler}>
							<td>1</td>
							<td>O/L</td>
							<td>152</td>
							<td>15</td>
						</tr>

						<tr>
							<td>1</td>
							<td>A/L</td>
							<td>152</td>
							<td>15</td>
						</tr>

						<tr>
							<td>1</td>
							<td>1998</td>
							<td>152</td>
							<td>15</td>
						</tr>

						<tr>
							<td>1</td>
							<td>1998</td>
							<td>152</td>
							<td>15</td>
						</tr>
					</table>
					</div>}
				
				</section>
			</div>
		</>
	)
}

export default Students
