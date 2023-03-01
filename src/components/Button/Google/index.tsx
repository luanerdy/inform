import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { FcGoogle } from 'react-icons/fc'

interface Props
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		PropsWithChildren {
	hideIcon?: boolean
}

export const GoogleButton = (props: Props) => {
	return (
		<button
			className="flex items-center justify-center gap-3.5 bg-white text-google-blue rounded-lg w-11/12 md:w-96 h-12 outline-none shadow-lg font-bold hover:bg-gray-200 border-none transition-colors focus:outline-none focus:bg-gray-200"
			{...props}
		>
			{!props.hideIcon && <FcGoogle size={25} />}
			{props.children}
		</button>
	)
}
