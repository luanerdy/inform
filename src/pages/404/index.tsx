import { Button } from '@/components/Button/Default'
import { Header } from '@/components/Header'
import React from 'react'
import notfound from '@/assets/images/404.svg'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
	const navigate = useNavigate()

	return (
		<div className="flex items-center justify-center w-screen h-screen">
			<Header />
			<img style={{ height: '100%', maxHeight: 'calc(90vh - 120px)', maxWidth: '90vw' }} src={notfound} />
			<Button
				onClick={() => navigate('/profile')}
				style={{
					position: 'fixed',
					left: '50%',
					translate: '-50%',
					bottom: '5vh',
				}}
			>
				Voltar ao início
			</Button>
		</div>
	)
}
