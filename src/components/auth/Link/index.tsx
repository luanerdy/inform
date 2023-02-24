import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

interface Props {
	type: 'entrar' | 'cadastrar'
}

export const Link = ({ type }: Props) => {
	const data = {
		cadastrar: {
			text: 'Não tem cadastro? Cadastrar ->',
			path: '/cadastro',
		},
		entrar: {
			text: 'Já tem cadastro? Entrar ->',
			path: '/',
		},
	}

	const info = data[type]

	return <RouterLink className='font-body underline text-main-900 hover:no-underline hover:text-main-900' to={info.path}>{info.text}</RouterLink>
}
