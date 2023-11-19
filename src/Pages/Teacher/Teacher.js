import React, { useEffect, useState } from 'react'
import styles from './Teacher.module.css'

import { useDispatch, useSelector } from 'react-redux'

import { netflixAuthActions } from '../../Redux/netflixAuthSlice'

import HomeImageCrousel from '../../Components/HomeImageCrousel/HomeImageCrousel'

function Teacher() {
	const dispatch = useDispatch()

	const [model, setModel] = useState(false)

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
					<table>
						<tr>
							<th>#</th>
							<th>Year</th>
							<th>Teachers</th>
							<th>Other Staffs</th>
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

						<tr>
							<td>1</td>
							<td>1998</td>
							<td>152</td>
							<td>15</td>
						</tr>
					</table>
				</section>
			</div>
		</>
	)
}

export default Teacher
