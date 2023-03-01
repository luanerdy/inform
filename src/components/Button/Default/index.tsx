import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'

interface Props
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		PropsWithChildren {}

export const Button = (props: Props) => {
	return (
		<button
			className="flex items-center justify-center bg-main-700 text-white rounded-lg w-11/12 md:w-96 h-12 outline-none shadow-lg font-semibold filter: hover:brightness-125 focus:brightness-125 border-none transition-colors focus:outline-none"
			{...props}
		>
			{props.children}
		</button>
	)
}
