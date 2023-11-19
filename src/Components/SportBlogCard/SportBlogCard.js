import React from 'react'
import styles from './SportBlogCard.module.css'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

function SportBlogCard({blog}) {
	const navigate = useNavigate()

    const clickHandler = id => {
		navigate(`/blogs/${id}`)
	}

  return (
    <div
    className={styles.blog}
    onClick={() => clickHandler(blog._id)}>
    <img src={blog.image} alt="" className={styles.image} />
    <div>
        <h1 className={styles.title}>{blog.title}</h1>

        <p>{blog.desc}</p>
        <div className={styles.details}>
            <p className={styles.auther}>{blog?.user?.name}</p>
            <p className={styles.date}>
                {moment(blog.createdAt).format('MM-DD-YYYY')}
            </p>
            <p className={styles.date}>{blog.child}</p>
        </div>
    </div>
</div>
  )
}

export default SportBlogCard
