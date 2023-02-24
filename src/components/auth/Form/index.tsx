import React, { FormHTMLAttributes, PropsWithChildren } from 'react'

interface Props
	extends FormHTMLAttributes<HTMLFormElement>,
		PropsWithChildren {}

export const Form = (props: Props) => {
	return (
		<form
			className="flex flex-col items-center justify-center gap-14 bg-white bg-opacity-50 rounded-3xl w-112 h-144 max-h-screen"
			{...props}
		>
			{props.children}
		</form>
	)
}
