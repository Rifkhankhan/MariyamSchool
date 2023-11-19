import React, { useEffect } from "react";
// import FruitsList from "../../Components/Fruits/FruitsList";
import styles from './Blog.module.css'
// import { getFruits, getProducts } from "../../../Actions/FruitAction";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../BlogCard/BlogCard";
import { getBlogs } from "../../Actions/BlogAction";

const Blog = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state.blog.blogs)
  const userData = useSelector(state => state.auth.authData)
  const myBlogs = blogs.filter(blog => blog.user.id === userData?._id)

  useEffect(() => {
    dispatch(getBlogs())
},[])
  return<div className={styles.container}>
    {
      myBlogs.map(blog =>    <BlogCard blog={blog} />)
    }
  </div>;
};

export default Blog;
