import * as YearApis from '../Apis/YearApis'
import swal from 'sweetalert'
import { uiActions } from '../Redux/UI Slice/ui-slice'
import {yearAction} from '../Redux/YearSlice'
export const createYear = formData => async dispatch => {
	try {
		dispatch(uiActions.changeAsLoading())
		const { data } = await YearApis.createYear(formData)
		dispatch(yearAction.addYear(data))
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

export const getYears = () => async dispatch => {
	try {
		const { data } = await YearApis.getYears()
		dispatch(yearAction.getYears(data))

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
