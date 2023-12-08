import * as ExamApis from '../Apis/ExamApis'
import swal from 'sweetalert'
import { uiActions } from '../Redux/UI Slice/ui-slice'
import {examAction} from '../Redux/ExamSlice'

export const createExam = formData => async dispatch => {
	try {
		dispatch(uiActions.changeAsLoading())
		const { data } = await ExamApis.createExam(formData)
		// dispatch(yearAction.addYear(data))
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


export const getExams = formData => async dispatch => {
	try {
		dispatch(uiActions.changeAsLoading())
		const { data } = await ExamApis.getExams()
		dispatch(examAction.getExams(data))
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

