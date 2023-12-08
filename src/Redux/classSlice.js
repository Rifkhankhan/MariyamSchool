import { createSlice } from '@reduxjs/toolkit'

const initialAuthState = {
	classes: []
}
const classSlice = createSlice({
	name: 'classes',
	initialState: initialAuthState,
	reducers: {
		addClass(state, action) {
			state.classes.push(action.payload)
			
		},	getClasses(state, action) {
			state.classes = action.payload
		},

		getClass(state, action) {
			state.classes = action.payload
		},
	}
})

export const classAction = classSlice.actions
export default classSlice.reducer
