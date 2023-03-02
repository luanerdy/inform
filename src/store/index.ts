import { configureStore } from '@reduxjs/toolkit'
import app from './slices/app'
import form from './slices/form'

export const store = configureStore({
	reducer: {
		app,
		form,
	},
})

export type RootState = ReturnType<typeof store.getState>
