import React, { PropsWithChildren } from 'react'

export const Background = ({ children }: PropsWithChildren) => {
	return (
		<div
			style={{ backgroundImage: 'url("/bg-welcome.jpg")' }}
			className="flex items-center justify-center w-screen h-screen bg-no-repeat bg-center bg-cover"
		>
			{children}
		</div>
	)
}
