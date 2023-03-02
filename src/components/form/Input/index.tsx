import React, { InputHTMLAttributes, forwardRef, ForwardedRef } from 'react'
import ReactInputMask from 'react-input-mask'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	mask?: string
	title: string
}

export const Input = forwardRef(
	(props: Props, ref: ForwardedRef<HTMLInputElement>) => {
		return (
			<label className="flex flex-col text-main-900 w-full">
				<span className='font-semibold text-lg'>{props.title}</span>
				{props.mask ? (
					<ReactInputMask
						inputRef={ref}
						mask={props.mask}
						className="placeholder-main-100 border-b-2 border-b-main-900 hover:border-gray-300 focus:hover:border-google-blue text-main-900 h-12 outline-none transition-all duration-150"
						{...props}
					/>
				) : (
					<input
						ref={ref}
						className="placeholder-main-100 border-b-2 border-b-main-900 hover:border-gray-300 focus:hover:border-google-blue text-main-900 h-12 outline-none transition-all duration-150"
						{...props}
					/>
				)}
			</label>
		)
	},
)

Input.displayName = 'Input'
