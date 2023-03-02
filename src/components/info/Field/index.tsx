import React from 'react'

interface Props {
	title: string
    text: string
}

export const Field = ({ title, text }: Props) => {
	return (
		<div className="flex flex-col text-main-900 w-full">
			<span className='font-semibold text-lg'>{title}</span>

			<p className="flex items-center placeholder-main-100 border-b-2 border-b-main-100 text-main-900 h-12 outline-none">
				{text || '[Vazio]'}
			</p>
		</div>
	)
}

Field.displayName = 'Field'
