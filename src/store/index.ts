import { configureStore } from '@reduxjs/toolkit'
import app from './slices/app'

export const store = configureStore({
	reducer: {
		app,
	},
})

export type RootState = ReturnType<typeof store.getState>
