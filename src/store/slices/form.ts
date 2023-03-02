import { Option } from '@/@types/form'
import { createSlice } from '@reduxjs/toolkit'
import { convertToRaw, EditorState, RawDraftContentState } from 'draft-js'

export interface Initial {
	started: boolean
	nome: string
	email: string
	cpf: string
	nascimento: string
	pais: Option | undefined
	estado: Option | undefined
	cidade: Option | undefined
	descricao: RawDraftContentState
	paises: Option[]
	estados: Option[]
	cidades: Option[]
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
	pais: undefined,
	estado: undefined,
	cidade: undefined,
	descricao: convertToRaw(EditorState.createEmpty().getCurrentContent()),
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
			state.started = payload.started ?? false
			state.nome = payload.nome ?? ''
			state.email = payload.email ?? ''
			state.cpf = payload.cpf ?? ''
			state.nascimento = payload.nascimento ?? ''
			state.pais = payload.pais ?? undefined
			state.estado = payload.estado ?? undefined
			state.cidade = payload.cidade ?? undefined
			state.descricao = payload.descricao ?? initialState.descricao
			state.paises = payload.paises ?? []
			state.estados = payload.estados ?? []
			state.cidades = payload.cidades ?? []
		},
		clearForm: (state) => {
			state.started = initialState.started
			state.nome = initialState.nome
			state.email = initialState.email
			state.cpf = initialState.cpf
			state.nascimento = initialState.nascimento
			state.pais = initialState.pais
			state.estado = initialState.estado
			state.cidade = initialState.cidade
			state.descricao = initialState.descricao
			state.paises = initialState.paises
			state.estados = initialState.estados
			state.cidades = initialState.cidades
		},
	},
} as Slice)

export const { fillForm, startForm, cancelForm, clearForm } = slice.actions

export default slice.reducer
