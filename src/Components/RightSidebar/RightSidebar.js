import React, { useEffect, useState } from 'react'
import styles from './RightSidebar.module.css'
import cr7 from './../../images/cr7.jpg'
import animal from './../../images/whiteTiger.jpg'
import leo from './../../images/leo.jpg'
import CreateBlog from './../AddPostModel/CreateBlog'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { getComments } from '../../Actions/BlogAction'
import datas from '../../Data/blogs'

// need to sort blogs
// need  to sort with likes
// comments
// archives

function RightSidebar(props) {
	const [modalOpen, setModalOpen] = useState(false)
	let blogs = useSelector(state => state.blog.blogs)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const modelHandler = () => {
		setModalOpen(true)
	}

	const onClickHandler = id => {
		navigate(`/blogs/${id}`)
	}

	const archivedHandler = (date) => {
		props.archiveActivatedHandler(date)
	}

	const reverseBlogs = [...blogs].reverse()

	const dates = blogs.map(blog => moment(blog.createdAt).format('MM-DD-YYYY'))
	const datesFromDatas = datas.map(blog => moment(blog.createdAt).format('MM-DD-YYYY'))

	const uniqueDates = [...new Set(dates)]
	const uniqueDatesFromDatas = [...new Set(datesFromDatas)]

	// get popular posts
	console.log(blogs);

	// const sortedBlogs = blogs.slice().sort((a,b) => a.likes.length - b.likes.length)

	// const sortedIndices = blogs.map((ele,index) => index).sort((a,b) => a.likes?.length - b.likes?.length)
	// const sortedArray = sortedIndices.map(index => blogs[index])
	// console.log(sortedArray);
	
	return (
		<div
			className={props.color ? styles.rightSideBar_color : styles.rightSideBar}>
			<div className={styles.searchSection}>
				<h3>Search</h3>
				<div>
					<input type="text" name="Search" value="Enter" />
					<button onClick={modelHandler}>Search</button>
				</div>
			</div>

			<div className={styles.latestPosts}>
				<h1>Latest Post</h1>
				{reverseBlogs.length > 0 ? reverseBlogs.map(blog => (
					<div
						className={styles.parentDiv}
						onClick={() => onClickHandler(blog._id)}>
						<img src={blog.image} alt="" />
						<div>
							<p className={styles.title}>{blog.title}</p>
							<p className={styles.date}>
								{moment(blog.createdAt).format('MM-DD-YYYY')}
							</p>
						</div>
					</div>
				)) :
				datas.map(blog => (
					<div
						className={styles.parentDiv}
						onClick={() => onClickHandler(blog._id)}>
						<img src={blog.image} alt="" />
						<div>
							<p className={styles.title}>{blog.title}</p>
							<p className={styles.date}>
								{moment(blog.createdAt).format('MM-DD-YYYY')}
							</p>
						</div>
					</div>
				))
				}
			</div>

			<div className={styles.latestPosts}>
				<h1>Popular Post</h1>
				{reverseBlogs.length > 0 ? reverseBlogs.map(blog => (
					<div
						className={styles.parentDiv}
						onClick={() => onClickHandler(blog._id)}>
						<img src={blog.image} alt="" />
						<div>
							<p className={styles.title}>{blog.title}</p>
							<p className={styles.date}>
								{moment(blog.createdAt).format('MM-DD-YYYY')}
							</p>
						</div>
					</div>
				)) :
				datas.map(blog => (
					<div
						className={styles.parentDiv}
						onClick={() => onClickHandler(blog._id)}>
						<img src={blog.image} alt="" />
						<div>
							<p className={styles.title}>{blog.title}</p>
							<p className={styles.date}>
								{moment(blog.createdAt).format('MM-DD-YYYY')}
							</p>
						</div>
					</div>
				))
				}
			</div>

			{props.detail && props.blog?.comments?.length > 0 && (
				<div className={styles.latestPosts}>
					<h1>Latest Comments</h1>
					<div className={styles.commentBox}>
						{props.blog?.comments?.map(comment => <p>{comment.value}</p>)}
						
					</div>
				</div>
			)}

			{!props.id && <div className={styles.latestPosts}>
				<h1>Archives</h1>
				{uniqueDates.length > 0 ? uniqueDates.map(date => (
					<p
					onClick={() => archivedHandler(date)}
						className={styles.archivedDates}>
						{date}
					</p>
				)) :
				uniqueDatesFromDatas.map(date => (
					<p
						onClick={() => archivedHandler(date)}
						className={styles.archivedDates}>
						{date}
					</p>
				))
				}
			</div>}
		</div>
	)
}

export default RightSidebar
