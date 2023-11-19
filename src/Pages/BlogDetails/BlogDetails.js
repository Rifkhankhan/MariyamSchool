import React, { useEffect, useRef, useState } from 'react'
import styles from './BlogDetails.module.css'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'
import cr7 from './../../images/vk.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { disLikeBlog, getBlogs, likeBlog, pushComment } from '../../Actions/BlogAction'
import datas from '../../Data/blogs'
import moment from 'moment'
import like from '../../images/heart.png'
import dislike from '../../images/dislike.png'
import comment from '../../images/speech-bubble.png'

// tinymce editi
import { Editor } from '@tinymce/tinymce-react'
// comment section
// like section

function BlogDetails() {
	const { id } = useParams()
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const blogs = useSelector(state => state.blog.blogs)
	const [reply, setReply] = useState()
	const userData  = useSelector(state => state.auth.authData)
	const isAuthenticated = useSelector(state =>state.auth.isAuthenticated)
	const [archiveActivated,setArchivedActivated] = useState(false)
	const [archivedDate,setDate] = useState()
	useEffect(() => {
		dispatch(getBlogs())
	}, [id])

	useEffect(() => {
		console.log('changed');
	}, [blogs])
	
	const blog = blogs?.filter(blog => blog._id === id)

	const date = moment(blog[0]?.createdAt).format('MM-DD-YYYY')

	const commentHandler = e => {
		setReply(e.target.value)
	}
	const user = {
		id: userData?._id,
		name: userData?.name,
	}

	const formSubmitHandler = e => {
		e.preventDefault()
		if(isAuthenticated) {
			const formData = {
				user: user,
				id: id,
				reply: reply
			}
			dispatch(pushComment(formData))
		} else{
			navigate("/login")
		}
		
	}

	const likeHandler = (e) => {
		e.preventDefault()
		const data = {
			userId:userData._id,
			blogId:id
		}

		dispatch(likeBlog(data))
	}

	const disLikeHandler = (e) => {
		e.preventDefault()

		const data = {
			userId:userData._id,
			blogId:id
		}
		dispatch(disLikeBlog(data))

	}

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
		<div className={styles.BlogDetails}>
			<section className={styles.blogs_colomn}>
				{blogs.length > 0 ?<div className={styles.blogs}>
					<img src={blog[0]?.image} alt="image" />
					<p className={styles.date}>{date}</p>
					<div className={styles.images}>
						<div>
							<img src={like} alt="" onClick={likeHandler}/>
							<span>{blog[0].likes?.length}</span>
						</div>
						<div>
							<img src={dislike} alt="" onClick={disLikeHandler}/>
							<span>{blog[0].dislike?.length}</span>
						</div>
						<div>
							<img src={comment} alt="" />
							<span>{blog[0].comments.length}</span>
						</div>
					</div>
					<h2>{blog[0]?.title}</h2>
					<p className={styles.desc}>{blog[0]?.desc}</p>
					<form
						onSubmit={formSubmitHandler}
						>
						<section className={styles.comments}>
							<textarea
								value={reply}
								onChange={commentHandler}
								placeholder="Reply for this blog"
							/>
							<button >Reply</button>
						</section>
					</form>
				</div> :
					<div className={styles.blogs}>
					<img src={datas[0]?.image} alt="image" />
					<p className={styles.date}>{date}</p>
					<h2>{datas[0]?.title}</h2>
					<p className={styles.desc}>{datas[0]?.desc}</p>
					<form
						onSubmit={formSubmitHandler}
						>
						<section className={styles.comments}>
							<textarea
								value={reply}
								onChange={commentHandler}
								placeholder="Reply for this blog"
							/>
							<button >Reply</button>
						</section>
					</form>
				</div>
				}
				<RightSidebar archiveActivatedHandler={archiveActivatedHandler} id={id} color="rgb(14, 75, 95)" detail={true} blog={blog[0] ? blog[0] : []} />
			</section>
		</div>
	)
}

export default BlogDetails
