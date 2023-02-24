import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'

interface Props
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		PropsWithChildren {}

export const Button = (props: Props) => {
	return (
		<button
			className="bg-main-700 text-white rounded-lg w-11/12 md:w-96 h-12 outline-none shadow-lg font-semibold hover:bg-main-500 border-none transition-colors focus:outline-none focus:bg-main-500"
			{...props}
		>
			{props.children}
		</button>
	)
}
