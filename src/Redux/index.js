import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import authSlice from './authSlice'
import fruitSlice from './fruitSlice'
import ProductSlice from './ProductSlice'
import shopSlice from './shopSlice'
import authUiSlice from './UI Slice/auth-ui-slice'
import shopUiSlice from './UI Slice/shop-ui-slice'
import netflixAuthSlice from './netflixAuthSlice'
import uiSlice from './UI Slice/ui-slice'
import YearSlice from './YearSlice'
import classSlice from './classSlice'
import studentSlice from './studentSlice'
import attendanceSlice from './attendanceSlice'
import ExamSlice from './ExamSlice'

const store = configureStore({
	reducer: {
		product: ProductSlice,
		auth: authSlice,
		shop: shopSlice,
		shopUi: shopUiSlice,
		authUi: authUiSlice,
		fruit: fruitSlice,
		netflixAuth: netflixAuthSlice,
		ui: uiSlice,
		year:YearSlice,
		class:classSlice,
		student:studentSlice,
		attendance:attendanceSlice,
		exam:ExamSlice
	},
	middleware: [thunk]
	// middleware: [thunk, logger],
})
export default store
