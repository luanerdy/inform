import { configureStore } from '@reduxjs/toolkit'
import app from './slices/app'
import form from './slices/form'

export const store = configureStore({
	reducer: {
		app,
		form,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

export type RootState = ReturnType<typeof store.getState>
