import { createSlice } from '@reduxjs/toolkit'

const initialAuthState = {
	students: []
}
const studentSlice = createSlice({
	name: 'students',
	initialState: initialAuthState,
	reducers: {
		addStudent(state, action) {
			state.students.push(action.payload)
			
		},	getStudents(state, action) {
			state.students = action.payload
			
		}
	}
})

export const studentAction = studentSlice.actions
export default studentSlice.reducer
