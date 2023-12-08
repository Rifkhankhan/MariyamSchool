import * as StudentApis from '../Apis/StudentApis'
import swal from 'sweetalert'
import { authUiActions } from '../Redux/UI Slice/auth-ui-slice'
import { authActions } from '../Redux/authSlice'
import { uiActions } from '../Redux/UI Slice/ui-slice'
import { studentAction } from '../Redux/studentSlice'
import { attendanceAction } from '../Redux/attendanceSlice'
export const createStudent = formData => async dispatch => {
	try {
		dispatch(uiActions.changeAsLoading())
		const { data } = await StudentApis.createStudent(formData)
		dispatch(uiActions.changeAsLoading())
		dispatch(studentAction.addStudent(data))
	} catch (error) {
		console.log(error)

		if (error.response.status === 400) {
			swal(
				'Please provide an email and password!',
				'Check the email and password!',
				'error'
			)
		} else if (error.response.status === 404) {
			swal(
				"You don't have HomeDelivery account!",
				'Please create an account! Or enter valid credentials!',
				'error'
			)
		} else if (error.response.status === 409) {
			swal('Wrong Password!', 'Please check your password!', 'error')
		}
	}
}

export const getStudents = () => async dispatch => {
	try {
		dispatch(uiActions.changeAsLoading())

		const { data } = await StudentApis.getStudents()
		dispatch(studentAction.getStudents(data))

		dispatch(uiActions.changeAsLoading())

	} catch (error) {
		console.log(error)

		if (error.response.status === 400) {
			swal(
				'Please provide an email and password!',
				'Check the email and password!',
				'error'
			)
		} else if (error.response.status === 404) {
			swal(
				"You don't have HomeDelivery account!",
				'Please create an account! Or enter valid credentials!',
				'error'
			)
		} else if (error.response.status === 409) {
			swal('Wrong Password!', 'Please check your password!', 'error')
		}
	}
}


export const getAttendancesForYYYYMM = (formData) => async dispatch => {
	console.log(formData.date);
	try {
		dispatch(uiActions.changeAsLoading())

		const { data } = await StudentApis.getAttendancesForYYYYMM(formData)
		console.log(data);
		dispatch(attendanceAction.getStudentAttendances(data))

		dispatch(uiActions.changeAsLoading())

	} catch (error) {
		console.log(error)

		if (error.response.status === 400) {
			swal(
				'Please provide an email and password!',
				'Check the email and password!',
				'error'
			)
		} else if (error.response.status === 404) {
			swal(
				"You don't have HomeDelivery account!",
				'Please create an account! Or enter valid credentials!',
				'error'
			)
		} else if (error.response.status === 409) {
			swal('Wrong Password!', 'Please check your password!', 'error')
		}
	}
}
export const getAttendances= (formData) => async dispatch => {
	console.log(formData);
	try {
		dispatch(uiActions.changeAsLoading())

		const { data } = await StudentApis.getAttendances(formData)
		console.log(data);
		dispatch(attendanceAction.getStudentAttendances(data))

		dispatch(uiActions.changeAsLoading())

	} catch (error) {
		console.log(error)

		if (error.response.status === 400) {
			swal(
				'Please provide an email and password!',
				'Check the email and password!',
				'error'
			)
		} else if (error.response.status === 404) {
			swal(
				"You don't have HomeDelivery account!",
				'Please create an account! Or enter valid credentials!',
				'error'
			)
		} else if (error.response.status === 409) {
			swal('Wrong Password!', 'Please check your password!', 'error')
		}
	}
}


export const pushAttendance = (id,formData) => async dispatch => {
	try {
		dispatch(uiActions.changeAsLoading())

		const { data } = await StudentApis.pushAttendance(id,formData)
		// dispatch(attendanceAction.pushAttendance(data))

		dispatch(uiActions.changeAsLoading())

	} catch (error) {
		console.log(error)

		if (error.response.status === 400) {
			swal(
				'Please provide an email and password!',
				'Check the email and password!',
				'error'
			)
		} else if (error.response.status === 404) {
			swal(
				"You don't have HomeDelivery account!",
				'Please create an account! Or enter valid credentials!',
				'error'
			)
		} else if (error.response.status === 409) {
			swal('Wrong Password!', 'Please check your password!', 'error')
		}
	}
}


export const pullAttendance = (id,formData) => async dispatch => {
	try {
		dispatch(uiActions.changeAsLoading())

		const { data } = await StudentApis.pullAttendance(id,formData)
		// dispatch(attendanceAction.pullAttendance(data))

		dispatch(uiActions.changeAsLoading())

	} catch (error) {
		console.log(error)

		if (error.response.status === 400) {
			swal(
				'Please provide an email and password!',
				'Check the email and password!',
				'error'
			)
		} else if (error.response.status === 404) {
			swal(
				"You don't have HomeDelivery account!",
				'Please create an account! Or enter valid credentials!',
				'error'
			)
		} else if (error.response.status === 409) {
			swal('Wrong Password!', 'Please check your password!', 'error')
		}
	}
}
