/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import './LeftSideBar.css'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import open from './../../images/enter white.png'
import close from './../../images/delete.png'
import { authActions } from "../../Redux/authSlice";
import { useDispatch } from "react-redux";

const LeftSideBar = (props) => {
    const dispatch = useDispatch()
    
    const handleClick = (e) => {
        e.preventDefault()

        // console.log(e.currentTarget.className); //useState
        // ref.current.className // ref
         // 👇️ toggle class on click
        // event.currentTarget.classList.toggle('bg-salmon');

        // 👇️ add class on click
        // event.currentTarget.classList.add('bg-salmon');

        // 👇️ remove class on click
        // event.currentTarget.classList.remove('bg-salmon');
        if(e.currentTarget.classList.contains('shop-btn')){
           document.getElementsByClassName('shop-ul')[0].classList.toggle('shop-show');
           
        }

        if(e.currentTarget.classList.contains('fruit-btn')){
            document.getElementsByClassName('fruit-ul')[0].classList.toggle('fruit-show');
            
         }

         if(e.currentTarget.classList.contains('phone-btn')){
            document.getElementsByClassName('phone-ul')[0].classList.toggle('phone-show');
            
         }

        //  if(e.currentTarget.classList.contains('sidebar-btn')){
        //     document.getElementsByClassName('sidebar-btn')[0].classList.toggle('sidebar-btn-toggle');
        //     document.getElementsByClassName('admin-sidebar')[0].classList.toggle('admin-sidebar-hide');
            
        //  }

           // when show and hide sidebar change the width of admin Dashboard component
        //    document.getElementsByClassName('AdminDashboardComponent')[0].classList.toggle('AdminDashboardComponent-fullWidth-toggle');

    }

    const openSidebarHandler = () => {
        const sidebar = document.getElementById('admin-sidebar')
        const openBtn = document.getElementById('sidebar-btn')
        const closeBtn = document.getElementById('sidebar-close-btn')

        if(openBtn.className === "sidebar-btn"){
            openBtn.className += " sidebar-btn-close";
            props.showSidebar(true)
        }
        else{
            openBtn.className = "sidebar-btn";
            props.showSidebar(false)

        }
        // console.log(openBtn.className);
        if (sidebar.className === "admin-sidebar" ) {
            console.log(sidebar.className);
            sidebar.className += " admin-sidebar-show";
          } else {
            sidebar.className = "admin-sidebar";
          }
    }
    const closeSidebarHandler = () => {
        const sidebar = document.getElementById('admin-sidebar')
        const openBtn = document.getElementById('sidebar-btn')

        if(sidebar.className.includes(" admin-sidebar-show")){
            openBtn.className = "sidebar-btn";
            sidebar.className = "admin-sidebar";
        }
    }

    const logoutHandler = () => {
        dispatch(authActions.logout())
    }
  return  <div className="admin-sidebar-container">
    <img src={open} alt=""  className='sidebar-btn' id='sidebar-btn' onClick={openSidebarHandler}/>
    <nav className="admin-sidebar" id="admin-sidebar" >
        <img src={close} alt=""  className='sidebar-close-btn' id='sidebar-close-btn' onClick={closeSidebarHandler}/>
       
        <ul className="admin-sidebar-ul">
            <li><Link to='/profile' className="parent-btn">Dashboard</Link></li>
            <li>
                <Link to='/profile/blogs' className="parent-btn shop-btn" onClick={handleClick}>Blogs</Link>
                <ul className="admin-sidebar-ul-ul shop-ul">
                    <li><Link  to='/profile/blogs' >Blogs</Link></li>
                    <li><Link to='/profile/create-blog'>Create Blog</Link></li>
                </ul>
            </li>
            <li><Link to='/profile/personal' className="parent-btn">Personal</Link></li>
            <li><Link to='/' className="parent-btn" onClick={logoutHandler}>Logout</Link></li>
           
            {/* <li>
                <Link  className="fruit-btn"  onClick={handleClick}>Fruits</Link>
                <ul className=" admin-sidebar-ul-ul fruit-ul">
                    <li><Link to='/admin-fruit'>Fruits</Link></li>
                    <li><Link to='/create-fruit'>Create fruit</Link></li>
                </ul>
            </li>
            <li>
                <Link className="phone-btn" onClick={handleClick}>Phones</Link> 
                <ul className=" admin-sidebar-ul-ul phone-ul">
                    <li><Link to='/admin-phone'>Phones</Link></li>
                    <li><Link to='/create-phone'>Create Phone</Link></li>
                </ul>
            </li> */}

           
        </ul>
    </nav>

  </div>
 
  
};

export default LeftSideBar;
