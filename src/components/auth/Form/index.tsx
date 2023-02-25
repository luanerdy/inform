import React, { FormHTMLAttributes, PropsWithChildren } from 'react'

interface Props
	extends FormHTMLAttributes<HTMLFormElement>,
		PropsWithChildren {}

export const Form = (props: Props) => {
	return (
		<form
			className="flex flex-col items-center justify-center gap-8 bg-white bg-opacity-75 md:rounded-3xl w-full md:w-112 h-full md:h-144 max-h-screen"
			{...props}
		>
			{props.children}
		</form>
	)
}
