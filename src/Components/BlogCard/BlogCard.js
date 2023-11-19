import React from 'react'
import styles from './BlogCard.module.css'
import vk from './../../images/vk.jpg'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

function BlogCard({ blog }) {
	const navigate = useNavigate()
	const clickHandler = (id) => {
		navigate(`/blog/${id}`)
	} 
	return (
		<div className={styles.container} onClick={() => clickHandler(blog._id)}>
            <p className={styles.date}>{moment(blog?.createdAt).format('MM-DD-YYYY')}</p>
			<img src={blog?.image} alt="image" className={styles.image} />
			<div className={styles.content}>
				<h2 className={styles.title}>{blog?.title}</h2>
				<p className={styles.desc}>
					{blog?.desc}
				</p>
			</div>
		</div>
	)
}

export default BlogCard
