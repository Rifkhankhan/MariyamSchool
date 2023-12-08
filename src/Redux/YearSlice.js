import { createSlice } from '@reduxjs/toolkit'

const initialAuthState = {
	years: []
}
const yearSlice = createSlice({
	name: 'years',
	initialState: initialAuthState,
	reducers: {
		addYear(state, action) {
			state.years.push(action.payload)
			
		},	getYears(state, action) {
			state.years = action.payload
			
		}
	}
})

export const yearAction = yearSlice.actions
export default yearSlice.reducer
