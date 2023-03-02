import React, { PropsWithChildren } from 'react'

export const Container = ({ children }: PropsWithChildren) => {
	return (
		<div className="flex flex-col items-center w-full max-w-4xl gap-5 md:gap-8">
			<h1 className="font-semibold text-xl self-start text-main-900">Preencher formulário</h1>
			{children}
		</div>
	)
}
