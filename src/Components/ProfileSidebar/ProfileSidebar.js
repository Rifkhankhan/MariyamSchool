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

  return <div className="netflix-ProfileSidebar">
      <div className="sidebarWrapper">
      <ul className="sidebarList">
          <NavLink to='/admin/dashboard' className="sidebarListItem">
            <Dashboard className="sidebarIcon" />
            <span className="sidebarListItemText">Dashboard</span>
          </NavLink>
          <NavLink to='/admin/students' className="sidebarListItem">
            <GroupSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Students</span>
          </NavLink>
          <NavLink to='/admin/teachers' className="sidebarListItem">
            <GroupSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Teachers</span>
          </NavLink>
          <NavLink to='/admin/assignments' className="sidebarListItem">
            <MoveToInbox className="sidebarIcon" />
            <span className="sidebarListItemText">Assignments</span>
          </NavLink>
          <NavLink to='/admin/exams' className="sidebarListItem">
            <Person className="sidebarIcon" />
            <span className="sidebarListItemText">Exams</span>
          </NavLink>
          <NavLink className="sidebarListItem" to='/admin/results'>
            <Search className="sidebarIcon" />
            <span className="sidebarListItemText">Results</span>
          </NavLink>
          <NavLink to='/admin/events' className="sidebarListItem">
            <Category className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </NavLink>
          <NavLink to='/admin/yourVideos' className="sidebarListItem">
            <VideocamSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Compatition</span>
          </NavLink>
          <NavLink to='/admin/attendance' className="sidebarListItem">
            <VideocamSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Attendance</span>
          </NavLink>
          <NavLink to='/admin/attendance' className="sidebarListItem">
            <VideocamSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Time table</span>
          </NavLink>
          <NavLink to='/admin/attendance' className="sidebarListItem">
            <VideocamSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Communication</span>
          </NavLink>
          <NavLink to='/admin/attendance' className="sidebarListItem">
            <VideocamSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Event Calender</span>
          </NavLink>
          <NavLink to='/admin/attendance' className="sidebarListItem">
            <VideocamSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Permissions</span>
          </NavLink>
          <NavLink to='/admin/attendance' className="sidebarListItem">
            <VideocamSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Notifications</span>
          </NavLink>
          <NavLink to='/admin/settings' className="sidebarListItem">
            <Settings className="sidebarIcon" />
            <span className="sidebarListItemText">Settings</span>
          </NavLink>
         
         
        </ul>
      </div>
  </div>;
};

export default ProfileSidebar;
