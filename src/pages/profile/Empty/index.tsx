import { Button } from '@/components/Button/Default'
import { Header } from '@/components/Header'
import React from 'react'
import createform from '@/assets/images/create-form.jpg'
import { useNavigate } from 'react-router-dom'

export const Empty = () => {
	const navigate = useNavigate()

	return (
		<div className="flex items-center justify-center w-screen h-screen">
			<Header />
			<img style={{ height: '100%', maxHeight: 'calc(90vh - 120px)', maxWidth: '90vw' }} src={createform} />
			<Button
				onClick={() => navigate('/form')}
				style={{
					position: 'fixed',
					left: '50%',
					translate: '-50%',
					bottom: '5vh',
				}}
			>
				Criar meu formulário
			</Button>
		</div>
	)
}
