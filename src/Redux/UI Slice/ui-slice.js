import { createSlice } from '@reduxjs/toolkit'

const initilaUiState = {
	notification: null,
	isLoading: false,
	error: null,
	requestFinished:true
}

const uiSlice = createSlice({
	name: 'ui',
	initialState: initilaUiState,
	reducers: {
		changeAsLoading(state) {
			state.isLoading = !state.isLoading
			console.log(state.isLoading)
		},
		changeAsLoadingFinished(state) {
			state.isLoading = false
		},
		changeRequestStarted(state){
			state.requestFinished = true
		},
		changeRequestFinished(state){
			state.requestFinished = false
		}
	}
})

export const uiActions = uiSlice.actions
export default uiSlice.reducer
