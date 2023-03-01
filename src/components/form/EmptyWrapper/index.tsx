import { Button } from '@/components/Button/Default'
import { Header } from '@/components/Header'
import React from 'react'

interface Props {
	image: string
	text: string
	onClick: () => void
}

export const EmptyWrapper = ({ image, onClick, text }: Props) => {
	return (
		<>
			<Header />
			<div className="flex items-center justify-center w-screen h-screen">
				<img
					style={{
						height: '100%',
						maxHeight: 'calc(90vh - 120px)',
						maxWidth: '90vw',
					}}
					src={image}
				/>
				<Button
					onClick={onClick}
					style={{
						position: 'fixed',
						left: '50%',
						translate: '-50%',
						bottom: '5vh',
					}}
				>
					{text}
				</Button>
			</div>
		</>
	)
}
