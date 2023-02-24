import React, { InputHTMLAttributes } from 'react'

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
	return <input className='placeholder-main-100 bg-main-900 text-white rounded-lg w-11/12 md:w-96 h-12 pl-4 outline-none shadow-lg' { ...props } />
}
