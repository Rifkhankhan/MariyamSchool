import { createSlice } from '@reduxjs/toolkit'

const initialAuthState = {
	studentsAttendances: [],
	teachersAttendances: [],
}
const attendanceSlice = createSlice({
	name: 'attendance',
	initialState: initialAuthState,
	reducers: {
			getStudentAttendances(state, action) {
			state.studentsAttendances = action.payload
			
		},
		pushAttendance(state,action){
			console.log(action.payload);
			state.studentsAttendances.push(action.payload)
		},

		pullAttendance(state,action){

		}
	}
})

export const attendanceAction = attendanceSlice.actions
export default attendanceSlice.reducer
