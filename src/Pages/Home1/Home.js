import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import cr7 from './../../images/cr7.jpg'
import animal from './../../images/whiteTiger.jpg'
import leo from './../../images/leo.jpg'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../../Actions/BlogAction'
import { useNavigate } from 'react-router-dom'
// import AddPostModel from '../../Components/AddPostModel/AddPostModel'
import moment from 'moment'
import datas from './../../Data/blogs.js'
import HomeBlogCard from '../../Components/HomeBlogCard/HomeBlogCard.js'

const Home = () => {
	const blogs = useSelector(state => state.blog.blogs)
	const navigate = useNavigate()
	const [modalOpen, setModalOpen] = useState(false)
	const dispatch = useDispatch()
	const [archiveActivated,setArchivedActivated] = useState(false)
	const [date,setDate] = useState()

	const clickHandler = id => {
		navigate(`/blogs/${id}`)
	}
	// const date = moment(blog[0]?.createdAt).format('MM-DD-YYYY');

	useEffect(() => {
		dispatch(getBlogs())
	}, [])

	// archiveActivatedHandler
	const archiveActivatedHandler = (date) => {
		setDate(date)
		setArchivedActivated(true)
	}

	// get archived blogs based in the date
	const archivedBlogs = blogs.filter(blog => moment(blog.createdAt).format('MM-DD-YYYY') === date)

	const headingHandler = () => {
		setArchivedActivated(false)
	}
	return (
		<div className={styles.container}>
			<section className={styles.homeImage}></section>
			<section className={styles.blogs_colomns}>
				{!archiveActivated && <div className={styles.blogs}>
					{blogs.length > 0
						? blogs?.map(blog => (
							<HomeBlogCard blog={blog}/>
						  ))
						: datas?.map(blog => (
								<HomeBlogCard blog={datas} />
						  ))}
				</div>}

				{archiveActivated && <div className={styles.archivedBlogs}>
					<h3 className={styles.archivedHeading} onClick={headingHandler}>{date}</h3>
					<div className={styles.blogs}>
					{archivedBlogs.length > 0
						? archivedBlogs?.map(blog => (
							<HomeBlogCard blog={blog}/>
						  ))
						: datas?.map(blog => (
								<HomeBlogCard blog={datas} />
						  ))}
				</div>
				</div>}

				<RightSidebar archiveActivatedHandler={archiveActivatedHandler} />
			</section>
		</div>
	)
}

export default Home
