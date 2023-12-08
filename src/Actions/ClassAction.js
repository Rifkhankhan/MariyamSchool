import * as ClassApis from '../Apis/ClassApis'
import swal from 'sweetalert'
import { uiActions } from '../Redux/UI Slice/ui-slice'
import { classAction } from '../Redux/classSlice'
export const createClass = formData => async dispatch => {
	try {
		dispatch(uiActions.changeAsLoading())
		const { data } = await ClassApis.createClass(formData)
		// console.log(data);
		if (data.status) {
			// console.log('in');
			dispatch(classAction.addClass(data.newClass))
		}
		dispatch(uiActions.changeAsLoading())
	} catch (error) {
		// console.log(error)

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

export const getClasses = () => async dispatch => {
	try {
		const { data } = await ClassApis.getClasses()
		// console.log(data)
		dispatch(classAction.getClasses(data))
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


export const getClass = (formData) => async dispatch => {
	try {
		// const { data } = await ClassApis.getClass(formDara)
		// console.log(data)
		// dispatch(classAction.getClass(data))
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