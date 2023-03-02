import { createSlice } from '@reduxjs/toolkit'
import { EditorState } from 'draft-js'

interface Initial {
	started: boolean
	nome: string
	email: string
	cpf: string
	nascimento: string
	pais: string
	estado: string
	cidade: string
	descricao: EditorState
	paises: string[]
	estados: string[]
	cidades: string[]
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
	started: false,
	nome: '',
	email: '',
	cpf: '',
	nascimento: '',
	pais: '',
	estado: '',
	cidade: '',
	descricao: EditorState.createEmpty(),
	paises: [],
	estados: [],
	cidades: [],
}

const slice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		startForm: (state) => {
			state.started = true
		},
		cancelForm: (state) => {
			state.started = false
		},
		fillForm: (state, { payload }) => {
			state = {
				...state,
				cidade: payload.cidade ?? '',
				nome: payload.nome ?? '',
				email: payload.email ?? '',
				cpf: payload.cpf ?? '',
				nascimento: payload.nascimento ?? '',
				pais: payload.pais ?? '',
				estado: payload.estado ?? '',
				descricao: payload.descricao ?? initialState.descricao,
			}
		},
		fillPaises: (state, { payload }) => {
			state.paises = payload.paises ?? []
		},
		fillEstados: (state, { payload }) => {
			state.estados = payload.estados ?? []
		},
		fillCidades: (state, { payload }) => {
			state.cidades = payload.cidades ?? []
		},
	},
} as Slice)

export const { fillForm, fillPaises, fillEstados, fillCidades, startForm, cancelForm } = slice.actions

export default slice.reducer
