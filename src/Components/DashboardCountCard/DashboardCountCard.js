import React from 'react'
import './DashboardCountCard.css'
import image1 from '../../Images/crousel1.jpg'
import dc from '../../Images/dc.jpg'
import jacksparrow from '../../Images/jack-sparrow.jpg'
import transformers from '../../Images/transformers.jpg'
import moneyHeist from '../../Images/money-heist.jpg'

import {
  
    Person,
    Group,
    GroupWorkRounded,
    Class
  
  } from "@material-ui/icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DashboardCountCard() {

  return <div className='admin-dashboard-card-container'>
            <div class="admin-dashboard-card admin-dashboard-card1">
                <Person />
                <div>
                    <span>12,852</span>
                    <h2>Teachers</h2>
                </div>
            </div>

            <div class="admin-dashboard-card admin-dashboard-card2">
                <Group />
                <div>
                    <span>12,852</span>
                    <h2>Students</h2>
                </div>
            </div>

            <div class="admin-dashboard-card admin-dashboard-card3">
                <GroupWorkRounded />
                <div>
                    <span>12,852</span>
                    <h2>Others</h2>
                </div>
            </div>

            <div class="admin-dashboard-card admin-dashboard-card4">
                <Class />
                <div>
                    <span>12,852</span>
                    <h2>Classes</h2>
                </div>
            </div>

  </div>;
  
}

export default DashboardCountCard
