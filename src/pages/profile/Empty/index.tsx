import React from 'react'
import createform from '@/assets/images/create-form.jpg'
import { useNavigate } from 'react-router-dom'
import { EmptyWrapper } from '@/components/form/EmptyWrapper'
import { useDispatch } from 'react-redux'
import { startForm } from '@/store/slices/form'

export const Empty = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const handleClick = () => {
		dispatch(startForm({}))
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
