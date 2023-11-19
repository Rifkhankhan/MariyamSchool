import React, { useEffect, useState } from 'react'
// import FruitsList from "../../Components/Fruits/FruitsList";
import styles from './Personal.module.css'
// import { getFruits, getProducts } from "../../../Actions/FruitAction";
import { useDispatch, useSelector } from 'react-redux'
import BlogCard from '../BlogCard/BlogCard'
import { getBlogs } from '../../Actions/BlogAction'
import vk from '../../images/vk.jpg'

const Personal = () => {
	const dispatch = useDispatch()
	const blogs = useSelector(state => state.blog.blogs)
	const userData = useSelector(state => state.auth.authData)
	const myBlogs = blogs.filter(blog => blog.user.id === userData?._id)
	const [editMode, setEditMode] = useState(false)


	const [data, setData] = useState({
		phone: '',
		address: '',
		age:null,
		password: '',
		name:userData.name,
		email:userData.email,
	})

	useEffect(() => {
		dispatch(getBlogs())
	}, [])

	const [validation, setValidation] = useState({
		name:data.name,
		email:data.email,
		phone: data.phone,
		address: data.address,
		age: data.age,
		password: data.password
	})
	const handleChange = e => {
		setData({ ...data, [e.target.name]: e.target.value })
		console.log(data)
	}
	const submitHandler = e => {
		// page will not redirect default
		e.preventDefault()
	}

	const checkValidation = () => {
		if (
			
			data.name.length > 0 &&
			data.phone.length > 9 &&
			data.phone.length <= 10 &&
			data.age > 10 &&
			data.address.length > 0 &&
			data.email.includes('@') &&
			data.email.length > 0 &&
			data.password.length >= 8
		) {
			setValidation(true)
		} else {
			setValidation(false)
		}
	}

	useEffect(() => {
		checkValidation()
	}, [data])

	const editHandler = () => {
		setEditMode(true)
	}
	return (
		<div className={styles.container}>
			{userData?.profilePicture ? (
				<img src={userData.profilePicture} className={styles.propic} />
			) : (
				<img src={vk} alt="" className={styles.propic} />
			)}
			<hr />

			<div className={styles.personlDetailsContainer}>
				{editMode ? <h1>Edit The Details</h1> : <h1>Personal Details</h1>}
				<div className={styles.personalDatas}>
					<form onSubmit={submitHandler}>
						<div className={styles.formGroup}>
							<label>Name : </label>
							{editMode ? (
								<input
									placeholder="Enter Your Name"
									onClick={handleChange}
									name="name"
									defaultValue={data.name}
								/>
							) : (
								<input defaultValue={userData?.name} />
							)}
						</div>

					

						<div className={styles.formGroup}>
							<label>Age : </label>

							{editMode ? (
								<input
									placeholder="Enter Your age"
									onClick={handleChange}
									name="age"
									defaultValue={data.age}
								/>
							) : (
								<input type="number" defaultValue={userData?.age} placeholder="Enter Your age"/>
							)}
						</div>

						<div className={styles.formGroup}>
							<label>Address : </label>

							{editMode ? (
								<input
									placeholder="Enter Your Address"
									onClick={handleChange}
									name="address"
									defaultValue={data.address}
								/>
							) : (
								<input defaultValue={userData?.address} placeholder="Enter Your Address"/>
							)}
						</div>

						<div className={styles.formGroup}>
							<label>Phone number : </label>

							{editMode ? (
								<input
									placeholder="Enter Your Phone number"
									onClick={handleChange}
									name="phone"
									defaultValue={data.phone}
									type="number"
								/>
							) : (
								<input defaultValue={userData?.phone} placeholder="Enter Your Phone number"/>
							)}
						</div>
						<div className={styles.formGroup}>
							<label>Email : </label>

							{editMode ? (
								<input
									placeholder="Enter Your Email"
									type="email"
									onClick={handleChange}
									name="email"
									defaultValue={data.email}
								/>
							) : (
								<input defaultValue={userData?.email} placeholder="Enter Your Email" />
							)}
						</div>
						{editMode && (
							<div className={styles.formGroup}>
								<label>Password : </label>

								{editMode ? (
									<input
										placeholder="Enter Your Password"
										onClick={handleChange}
										type="password"
										name="password"
										defaultValue={data.password}
									/>
								) : (
									<input  	placeholder="Enter Your Password"/>
								)}
							</div>
						)}
						<div className={styles.formGroup}>
							{!editMode && <button onClick={editHandler}>Edit</button>}
							{editMode && (
								<button onClick={editHandler} disabled={!validation}>
									Update
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Personal
