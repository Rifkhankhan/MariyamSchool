import { createSlice } from '@reduxjs/toolkit'

const initialAuthState = {
	exams: []
}
const ExamSlice = createSlice({
	name: 'years',
	initialState: initialAuthState,
	reducers: {
		addExam(state, action) {
			state.exams.push(action.payload)
			
		},	getExams(state, action) {
			state.exams = action.payload
			
		}
	}
})

export const examAction = ExamSlice.actions
export default ExamSlice.reducer
