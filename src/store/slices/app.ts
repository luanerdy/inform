import { ToastType } from '@/@types/toast'
import { createSlice } from '@reduxjs/toolkit'

interface Initial {
	toast: {
		active: boolean
		type: ToastType
		title: string
		text: string
	}
	modal: {
		delete: boolean
		save: boolean
	}
}

interface Slice {
	name: string
	initialState: Initial
	reducers: {
		[key: string]: (
			state: Initial,
			action: { type: string; payload: Partial<Initial> },
		) => void
	}
}

export const initialState = {
	toast: {
		active: false,
		type: 'success',
		title: 'Sucesso',
		text: 'Mensagem de sucesso',
	},
	modal: {
		delete: false,
		save: false,
	},
}

const slice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		toastify: (state) => {
			state.toast.active = true
		},
		untoastify: (state) => {
			state.toast.active = false
		},
		openModalDelete: (state) => {
			state.modal.delete = true
		},
		closeModalDelete: (state) => {
			state.modal.delete = false
		},
		openModalSave: (state) => {
			state.modal.save = true
		},
		closeModalSave: (state) => {
			state.modal.save = false
		},
		changeToastContent: (state, { payload }) => {
			state.toast = {
				...state.toast,
				active: payload.toast?.active ?? false,
				type: payload.toast?.type ?? 'success',
				text: payload.toast?.text ?? '',
				title: payload.toast?.title ?? '',
			}
		},
	},
} as Slice)

export const {
	toastify,
	untoastify,
	changeToastContent,
	openModalDelete,
	closeModalDelete,
	openModalSave,
	closeModalSave,
} = slice.actions

export default slice.reducer
