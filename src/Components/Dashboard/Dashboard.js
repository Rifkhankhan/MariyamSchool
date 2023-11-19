import React, { useEffect } from 'react'
// import FruitsList from "../../Components/Fruits/FruitsList";
import styles from './Dashboard.module.css'
// import { getFruits, getProducts } from "../../../Actions/FruitAction";
import { useDispatch, useSelector } from 'react-redux'
import like from './../../images/positive-vote.png'
import dislike from './../../images/dislike.png'
import comments from './../../images/comments.png'
import blog from './../../images/blog.png'
import DashboardTable from '../DashboardTable/DashboardTable'
import Card from '../Card/Card'
import { getBlogs } from '../../Actions/BlogAction'
import datas from '../../Data/blogs'

const Dashboard = () => {
	const dispatch = useDispatch()
  const blogs = useSelector(state => state.blog.blogs)
  const user = useSelector(state => state.auth.authData)

    useEffect(() => {
      dispatch(getBlogs())
  },[])


	//get my blogs   
	const myBlogs = blogs.filter(blog => blog.user.id === user?._id)

	//get the length of all comments
	let commentsLength = myBlogs?.reduce(function(accumulator,current){
		return accumulator + current.comments.length
	},0)

	//get blogs i liked
	 const myLikedBlogs = blogs.filter(blog => blog.likes.includes(user?._id))

	//  get blogs i commented
	const mycommentedBlogs = blogs.filter(blog => blog.comments.includes(blog.comments.some(comment => comment.user.id === user?._id)))
	// console.log(mycommentedBlogs);


	return (
		<div className={styles.Dashboard}>
			<section className={styles.section1}>
				<Card img={like} count={11} text="likes i got"/>
				<Card img={blog} count={myBlogs?.length} text="My blogs"/>
				<Card img={comments} count={commentsLength} text="Comments i got"/>
				<Card img={dislike} count={56} text="Dislikes i got"/>
			</section>
      		{myBlogs.length > 0 ?  <DashboardTable  blogs={myBlogs} title="My Blogs"/> : <DashboardTable  blogs={datas} title="My Blogs"/>}
      		{myLikedBlogs.length > 0 ?  <DashboardTable  blogs={myLikedBlogs} title="Blogs i liked"/> : <DashboardTable  blogs={datas} title="Blogs i liked"/>}
      		{/* {mycommentedBlogs.length > 0 ?  <DashboardTable  blogs={mycommentedBlogs} title="Blogs i commented"/> : <DashboardTable  blogs={datas} title="Blogs i commented"/>} */}

	
		</div>
	)
}

export default Dashboard
