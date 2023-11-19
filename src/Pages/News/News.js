import React, { useEffect, useState } from 'react'
import styles from './News.module.css'
import SubHeader from '../../Components/SubHeader/SubHeader'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'

import moment from 'moment'

import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../../Actions/BlogAction'
import { useNavigate } from 'react-router-dom'
import SportBlogCard from '../../Components/SportBlogCard/SportBlogCard'
function News() {
	const headings = ['Education', 'Health', 'Politics']
	const blogs = useSelector(state => state.blog.blogs)
	const dispatch = useDispatch()
	const [game, setGame] = useState('')
	const navigate = useNavigate()

	const headHandler = head => {
		setGame(head)
	}
	useEffect(() => {
		dispatch(getBlogs())
	}, [])

	const clickHandler = id => {
		navigate(`/blogs/${id}`)
	}
	return (
		<div className={styles.sportsContainer}>
			<SubHeader headings={headings} headHandler={headHandler} />
			<section className={styles.blogs_colomn}>
				<div className={styles.blogs}>
					{game === ''
						? blogs
								?.filter(blog => blog.parent.toLowerCase() === 'news')
								.map(blog => (
									<SportBlogCard blog={blog} />
								))
						: blogs
								?.filter(
									blog => blog.child.toLowerCase() === game?.toLowerCase()
								)
								.map(blog => (
									<SportBlogCard blog={blog} />
								))}
				</div>
				<RightSidebar />
			</section>
		</div>
	)
}

export default News
