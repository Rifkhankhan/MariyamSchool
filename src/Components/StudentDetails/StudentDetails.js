import React from 'react'
import styles from './StudentDetails.module.css'
import Calender from '../Calender'
import person from './../../Images/jack-sparrow.jpg'
function StudentDetails({ id }) {
	return (
		<div className={styles.container}>
			{/* image container */}
			<section className={styles.attendanceContainer}>
				<div className={styles.attendanceInnerContainer}>
					<div className={styles.personImageContainer}>
						<img src={person} alt="" className={styles.personImage} />
					</div>
					<div className={styles.attendancePersantage}>
						<div className={`${styles.attendancePersantageCircle} border:`}>
							<h2 className={styles.attendancePersantageamount}>
								<span>75</span>%
							</h2>
							<h2 style={{ fontFamily: 'times' }}>Today</h2>
						</div>
					</div>
				</div>
			</section>

			{/* personal details */}

			<section className={styles.personalDetailsContainer}>
				<h2 className={styles.header}>Personal Details</h2>
				<div className={styles.personalDetailsInnerContainer}>
                    <div  className={styles.detailBox}>
                        <p >First Name</p>
                        <p>Mohammed</p>
                    </div>
                    <div  className={styles.detailBox}>
                        <p>Last Name</p>
                        <p>Rifkhan</p>
                    </div>
                    <div  className={styles.detailBox}>
                        <p>Class</p>
                        <p>10</p>
                    </div>
                    <div  className={styles.detailBox}>
                        <p>Parent Name</p>
                        <p>Mohammed Rifkhan</p>
                    </div>
                    <div  className={styles.detailBox}>
                        <p>Contact Number</p>
                        <p>+94451854185</p>
                    </div>

                    <div  className={styles.detailBox}>
                        <p>Date of birth</p>
                        <p>1998-12-12</p>
                    </div>

                    <div  className={styles.detailBox}>
                        <p>Address</p>
                        <p>40,common road palamunai-5</p>
                    </div>

                    <div  className={styles.detailBox}>
                        <p>Gender</p>
                        <p>Male</p>
                    </div>

                </div>
			</section>
			{/* attendence */}
			<section className={styles.classContainer}>
				<h2 className={styles.header}>Attendance</h2>
				<div className={styles.innerContainer}>
					<div className={styles.box}>1</div>
					<div className={styles.box}>2</div>
					<div className={styles.box}>10</div>
					<div className={styles.box}>O/L</div>
					<div className={styles.box}>O/L</div>
					<div className={styles.box}>O/L</div>
					<div className={styles.box}>A/L</div>
				</div>
			</section>

			{/* results */}
			<section className={styles.resultContainer}>
				<h2 className={styles.header}>Results</h2>
				<div className={styles.innerContainer}>
					<div className={styles.resultbox}>1</div>
					<div className={styles.resultbox}>2</div>
					<div className={styles.resultbox}>10</div>
					<div className={styles.resultbox}>O/L</div>
					<div className={styles.resultbox}>O/L</div>
					<div className={styles.resultbox}>O/L</div>
					<div className={styles.resultbox}>A/L</div>
				</div>
			</section>
		</div>
	)
}

export default StudentDetails
