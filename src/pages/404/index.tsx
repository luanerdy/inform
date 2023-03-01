import React from 'react'
import notfound from '@/assets/images/404.svg'
import { useNavigate } from 'react-router-dom'
import { EmptyWrapper } from '@/components/form/EmptyWrapper'

export const NotFound = () => {
	const navigate = useNavigate()

	return (
		<EmptyWrapper
			image={notfound}
			onClick={() => navigate('/profile')}
			text="Voltar ao início"
		/>
	)
}
