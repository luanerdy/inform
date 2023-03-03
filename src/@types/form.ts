import { RawDraftContentState } from 'draft-js'

export interface InitialForm {
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

export interface Option {
	value: string
	label: string
}

export type SendData = Omit<InitialForm, 'descricao' | 'cidades' | 'estados' | 'paises'> & { descricao: string | RawDraftContentState }
