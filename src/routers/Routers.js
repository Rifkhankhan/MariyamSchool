import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { netflixAuthActions } from '../Redux/netflixAuthSlice'

import { useDispatch, useSelector } from 'react-redux'

// netflix
import Home from '../Pages/Home/Home'
import Dashboard from '../Pages/Dashboard/Dashboard'

import Students from '../Components/Students/Students'
import Series from '../Components/Series/Series'

import Users from '../Components/Users/Users'

import React, { useEffect } from 'react'
import Teachers from '../Components/Teachers/Teachers'
import Teacher from '../Pages/Teacher/Teacher'
import StudentsPage from '../Pages/Students/Students'
import Login from '../Pages/Login/Login'
import Admin from '../Pages/Admin/Admin'
import CreateFruitComponent from '../Components/Form/Form'
import AddYear from '../Components/BatchForm/BatchForm'
import AddGroup from '../Components/Form/Form'
import StudentsComponent from '../Components/StudentsComponent/StudentsComponent'
import LoginPage from '../Pages/LoginPage/LoginPage'

// admin
import StudentDetails from '../Components/StudentDetails/StudentDetails'
import Attendance from '../Components/Attendance/Attendance'
import Result from '../Components/Result/Result'
import ResultForm from '../Components/ResultForm/ResultForm'
import Exams from '../Components/Exam/Exam'
import ExamAdd from '../Components/ExamForm/ExamForm'
import ClassForm from '../Components/ClassForm/ClassForm'
import AttendanceForm from '../Components/AttendanceForm/AttendanceForm'

const Routers = props => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	// const PrivateRoute = ({ children }) => {
	// 	const isAuthenticated = useSelector(state => state.netflixAuth.isAuthenticated)
	// 	return isAuthenticated ? <>{children}</> : <Navigate to="/netflix" />;
	// }

	// const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
	const isAuthenticated = useSelector(
		state => state.netflixAuth.isAuthenticated
	)

	useEffect(() => {
		dispatch(netflixAuthActions.autoLogin())
	}, [dispatch])

	//   console.log(isAuthenticated);
	return (
		<Routes>
			<Route path="/" element={<Home searchItems={props.searchItems} />} />
			<Route path="/home" element={<Home searchItems={props.searchItems} />} />
			<Route path="/teachers" element={<Teacher />} />
			<Route path="/students" element={<StudentsPage />} />
			<Route path="/admin" element={<Admin />} />
			<Route path="/login" element={<Login />} />

			{/* <Route path="/netflix/login" element={<NetflixLoginPage />} />
			<Route path="/netflix/register" element={<NetflixRegisterPage />} />
			<Route path="/netflix/series" element={<NetflixSeries searchItems={props.searchItems}/>} /> */}

			{isAuthenticated && (
				<Route path="/admin" element={<Admin />}>
					<Route index element={<Dashboard />} />
					<Route path="students" element={<StudentsComponent />} />
					<Route path="attendance" element={<Attendance />} />
					<Route path="attendance/create" element={<AttendanceForm />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="students/batch" element={<Students />} />

					<Route path="students/add" element={<CreateFruitComponent />} />
					<Route path="students/batch/add" element={<AddYear />} />
					<Route path="students/group/add" element={<AddYear />} />
					<Route path="students/class/add" element={<ClassForm />} />
					<Route path="students/:id" element={<StudentDetails />} />
					<Route path="teachers" element={<Teachers />} />
					<Route path="teachers/add" element={<CreateFruitComponent />} />
					<Route path="teachers/:id" element={<Teachers />} />
					<Route path="assignments" element={<Students />} />
					<Route path="assignments/:id" element={<Students />} />
					<Route path="exams" element={<Exams />} />
					<Route path="exams/add" element={<ExamAdd />} />
					<Route path="exams/:id" element={<Students />} />
					<Route path="events" element={<Students />} />
					<Route path="events/:id" element={<Students />} />
					<Route path="settings" element={<Students />} />
					<Route path="results" element={<Result />} />
					<Route path="results/add" element={<ResultForm />} />

					<Route path="*" element={<Dashboard />} />
				</Route>
			)}

			{isAuthenticated && (
				<Route path="/teacher" element={<Admin />}>
					<Route index element={<Dashboard />} />
					<Route path="students" element={<Students />} />
					<Route path="timetable" element={<Teachers />} />
					<Route path="results" element={<Series />} />
					<Route path="events" element={<Users />} />
					<Route path="notification" element={<Users />} />

					<Route path="*" element={<Dashboard />} />
				</Route>
			)}

			{/* {isAuthenticated && <Route path="/netflix/profile/students" element={<NetflixProfile />} > 
				<Route index element={<Students /> } />
				<Route path="students" element={<Students /> } />

				<Route path="add" element={<AddItem />}  />
				<Route path=":id" element={<ViewItem />} />
				<Route path="edit/:id" element={<EditItem />} />
				<Route path="edit" element={<AddItem />}  />
				<Route path="*" element={<Students />} />
			</Route>} */}

			{/* {isAuthenticated && <Route path="/netflix/profile/teachers" element={<NetflixProfile />} > 
				<Route index element={<Teachers /> } />
				<Route path="teachers" element={<Teachers /> } />

				<Route path="add" element={<AddItem />}  />
				<Route path=":id" element={<ViewItem />} />
				<Route path="edit/:id" element={<EditItem />} />
				<Route path="edit" element={<AddItem />}  />
				<Route path="*" element={<Students />} />
			</Route>} */}
			{/* <Route path="/netflix/:id" element={<MovieItem />} /> */}
			{/* {!isAuthenticated && <Route path="/netflix" element={<NetflixMovies />} />} */}
			{/* <Route path="*" element={<NetflixMovies />} /> */}

			{/* <Route path="*" element={<Home />} /> */}
		</Routes>
	)
}

export default Routers
