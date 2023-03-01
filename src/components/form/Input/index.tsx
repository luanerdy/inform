import React, { InputHTMLAttributes, forwardRef, ForwardedRef } from 'react'

export const Input = forwardRef(
	(
		props: InputHTMLAttributes<HTMLInputElement>,
		ref: ForwardedRef<HTMLInputElement>,
	) => {
		return (
			<label className='flex flex-col text-main-900 w-full'>
				<span>{props.name}</span>
				<input
					ref={ref}
					className="placeholder-main-100 border-b-2 border-b-main-900 hover:border-gray-300 focus:hover:border-google-blue text-main-900 h-12 outline-none transition-all duration-150"
					{...props}
				/>
			</label>
		)
	},
)

Input.displayName = 'Input'
