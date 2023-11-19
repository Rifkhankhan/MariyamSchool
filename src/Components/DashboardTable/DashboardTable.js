import React from 'react'
import styles from './DashboardTable.module.css'
import {  useNavigate } from 'react-router-dom'

function DashboardTable({blogs,title}) {
	const navigate = useNavigate()
	const clickHandler = (id) => {
		navigate(`/blog/${id}`)
	} 

	return (
    <div className={styles.container}>
  <table className={styles.table}>
          <tr ><td>{title}</td></tr>
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Image</th>
						{/* <th>Description</th> */}
						<th>Likes</th>
						<th>Comments</th>
						<th>Dislikes</th>
					</tr>
					{blogs.map( blog => <tr onClick={() => clickHandler(blog._id)}>
						<td>{blogs.indexOf(blog)+1}</td>
						<td className={styles.title}>{blog?.title}</td>
						<td>
							<img src={blog?.image} alt="image" />
						</td>
						{/* <td className={styles.desc}>
							{blog?.desc}
						</td> */}
						<td>{blog.likes?.length}</td>
						<td>{blog.comments?.length}</td>
						<td>{blog.dislike?.length}</td>
					</tr>)}
         
		
				</table>
    </div>
  
  )
}

export default DashboardTable
