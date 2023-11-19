import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { getShops } from "../../../Actions/ShopAction";
import { createBlog } from '../../Actions/BlogAction'
import ImageUploader from '../../Components/ImageUploader/ImageUploader'
import './CreateFruitComponent.css'
const CreateShopComponent = () => {
	const [name, setName] = useState()
	const [parent, setParent] = useState()
	const [child, setChild] = useState()
	const [desc, setDesc] = useState()
	const [titleValid, setTitleValid] = useState(false)
	const [descValid, setDescValid] = useState(false)
	const [parentValid, setParantValid] = useState(false)
	const [childValid, setChildValid] = useState(false)
	const [imageValid, setImageValid] = useState(false)
	const [formValid, setFormValid] = useState(true)
	const [loading, setLoading] = useState(false)

	const [validation, setValidation] = useState(false)
	const dispatch = useDispatch()
	const [selectedFile, setSelectedFile] = useState()
	const userData = useSelector(state => state.auth.authData)
	// const isLoading = useSelector(state => state.shopUi.isLoading)
	// const shops = useSelector(state => state.shop.shops)

	const parant = ['News', 'Sports', 'Technology', 'Animals']

	const childs = [
		'Cricket',
		'Football',
		'Chess',
		'VollyBall',
		'Carrom',
		'politics',
		'health',
		'education',
		'apple',
		'huawei',
		'sumsung',
		'elephant',
		'lion',
		'tiger',
		'monkey'
	]

	const nameHandler = e => {
		setTitleValid(e.target.value !== '')
		setName(e.target.value)
	}
	const parentHandler = e => {
		setParantValid(e.target.value !== '')

		setParent(e.target.value)
	}
	const childHandler = e => {
		setChildValid(e.target.value !== '')

		setChild(e.target.value)
	}

	const descHandler = e => {
		setDescValid(e.target.value !== '')
		setDesc(e.target.value)
	}

	const formSubmitHandler = async e => {
		e.preventDefault()

		setFormValid(
			titleValid && descValid && parentValid && childValid && imageValid
		)

		console.log(
			titleValid && descValid && parentValid && childValid && imageValid
		)

		let image
		const formData = new FormData()
		formData.append('file', selectedFile)
		formData.append('fileName', selectedFile?.name)
		formData.append('upload_preset', 'homedelivery')

		if (titleValid && descValid && parentValid && childValid && imageValid) {
			console.log('valid')
			setLoading(true)
			try {
				await axios
					.post(
						'https://api.cloudinary.com/v1_1/homedelivery/image/upload',
						formData
					)
					.then(res => {
						image = res.data.secure_url
						dispatch(
							createBlog({
								title: name,
								parent: parent,
								child: child,
								desc: desc,
								image: image,
								user: { id: userData?._id, name: userData?.name }
							})
						)
					})
			} catch (error) {
				alert(error)
			}
		} else {
			console.log('invalid')
		}
	}

	const catchFileDataHandler = e => {
		setImageValid(e.name !== '')
		setSelectedFile(e)
	}

	return (
		<div className="CreateFruitComponent">
			{!formValid && (
				<h3 className="validation-message">Please Fill the Form properly</h3>
			)}
			<form onSubmit={formSubmitHandler} className="CreateFruitComponent-form">
				<div className="CreateFruitComponent-form-group">
					<label>Title</label>
					{!loading && (
						<input
							type="text"
							defaultValue={name}
							onChange={nameHandler}
							placeholder="Enter Title"></input>
					)}
					{loading && (
						<input
							type="text"
							defaultValue={name}
							onChange={nameHandler}
							placeholder="Enter Title"
							disabled></input>
					)}
				</div>

				<div className="CreateFruitComponent-form-group">
					<label>Parent</label>
					{!loading && (
						<select onChange={parentHandler} className="parent-select">
							<option value="">Select Parent Category</option>
							{parant.map(shop => (
								<option key={shop} value={shop}>
									{shop}
								</option>
							))}
						</select>
					)}
					{loading && (
						<select onChange={parentHandler} className="parent-select" disabled>
							<option value="">Select Parent Category</option>
							{parant.map(shop => (
								<option key={shop} value={shop}>
									{shop}
								</option>
							))}
						</select>
					)}
					{/* <input defaultValue={category} placeholder="Enter Fruit Category"  onChange={categoryHandler}></input> */}
				</div>

				<div className="CreateFruitComponent-form-group">
					<label>Child</label>
					{!loading && (
						<select onChange={childHandler}>
							<option value="">Select Child Category</option>

							{childs.map(shop => (
								<option key={shop} value={shop}>
									{shop}
								</option>
							))}
						</select>
					)}
					{loading && (
						<select onChange={childHandler} disabled>
							<option value="">Select Child Category</option>

							{childs.map(shop => (
								<option key={shop} value={shop}>
									{shop}
								</option>
							))}
						</select>
					)}
					{/* <input defaultValue={category} placeholder="Enter Fruit Category"  onChange={categoryHandler}></input> */}
				</div>

				<div className="CreateFruitComponent-form-group">
					<label>Description</label>
					{!loading && (
						<textarea
							onChange={descHandler}
							value={desc}
							placeholder="Enter Description"
						/>
					)}
					{loading && (
						<textarea
							onChange={descHandler}
							value={desc}
							placeholder="Enter Description"
							disabled
						/>
					)}
				</div>

				<div className="CreateFruitComponent-form-group">
					<label>Upload Image</label>
					<ImageUploader onInput={catchFileDataHandler} loading={loading} />
				</div>

				<div className="CreateFruitComponent-form-btn">
					{!loading && (
						<button type="submit" className="submit-btn notLoading-btn">
							Submit
						</button>
					)}
					{loading && (
						<button className="submit-btn loading-btn " disabled={true}>
							Loading
						</button>
					)}
				</div>
			</form>
		</div>
	)
}

export default CreateShopComponent
