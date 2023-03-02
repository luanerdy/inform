import React from 'react'
import createform from '@/assets/images/create-form.jpg'
import { useNavigate } from 'react-router-dom'
import { EmptyWrapper } from '@/components/form/EmptyWrapper'

export const Empty = () => {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate('/form')
	}

	return (
		<EmptyWrapper
			image={createform}
			onClick={handleClick}
			text="Criar meu formulário"
		/>
	)
}
