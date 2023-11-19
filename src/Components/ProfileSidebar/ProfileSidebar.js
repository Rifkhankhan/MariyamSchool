import React, { useEffect, useState } from "react";
import './ProfileSidebar.css'
import {
  
  Category,
  Search,
  Person,
  Dashboard,
  Movie,
  MovieCreation,
  MoveToInbox,
  VideocamSharp,
 
  Settings,
  PeopleAlt,
  GroupSharp,
  Diversity3Icon
} from "@material-ui/icons";

import { Link, NavLink } from "react-router-dom";

const ProfileSidebar = ({show}) => {




 
  // useEffect(() => {
    // if(windowDimensions > 1100) 
        // document.getElementsByClassName('netflix-ProfileSidebar')[0].classList.remove('netflix-ProfileSidebarToggle');
  // },[windowDimensions])
  return <div className="netflix-ProfileSidebar">
      <div className="sidebarWrapper">
      <ul className="sidebarList">
          <NavLink to='/netflix/profile' className="sidebarListItem">
            <Dashboard className="sidebarIcon" />
            <span className="sidebarListItemText">Dashboard</span>
          </NavLink>
          <NavLink to='/netflix/profile/students' className="sidebarListItem">
            <GroupSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Students</span>
          </NavLink>
          <NavLink to='/netflix/profile/teachers' className="sidebarListItem">
            <GroupSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Teachers</span>
          </NavLink>
          <NavLink to='/netflix/profile/series' className="sidebarListItem">
            <MoveToInbox className="sidebarIcon" />
            <span className="sidebarListItemText">Assignments</span>
          </NavLink>
          <NavLink to='/netflix/profile/users' className="sidebarListItem">
            <Person className="sidebarIcon" />
            <span className="sidebarListItemText">Exams</span>
          </NavLink>
          <NavLink className="sidebarListItem">
            <Search className="sidebarIcon" />
            <span className="sidebarListItemText">Results</span>
          </NavLink>
          <NavLink to='/netflix/profile/category' className="sidebarListItem">
            <Category className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </NavLink>
          <NavLink to='/netflix/profile/yourVideos' className="sidebarListItem">
            <VideocamSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Compatition</span>
          </NavLink>
          <NavLink to='/netflix/profile/category' className="sidebarListItem">
            <Settings className="sidebarIcon" />
            <span className="sidebarListItemText">Settings</span>
          </NavLink>
        </ul>
      </div>
  </div>;
};

export default ProfileSidebar;
