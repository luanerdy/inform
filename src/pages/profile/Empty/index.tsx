import React from 'react'
import createform from '@/assets/images/create-form.jpg'
import { useNavigate } from 'react-router-dom'
import { EmptyWrapper } from '@/components/form/EmptyWrapper'

export const Empty = () => {
	const navigate = useNavigate()

	return (
		<EmptyWrapper
			image={createform}
			onClick={() => navigate('/form')}
			text="Criar meu formulário"
		/>
	)
}
