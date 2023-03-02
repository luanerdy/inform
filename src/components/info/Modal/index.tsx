import { closeModalDelete } from '@/store/slices/app'
import React, { PropsWithChildren } from 'react'
import { useDispatch } from 'react-redux'

interface Props extends PropsWithChildren {
	title: string
}

export const Modal = ({ title, children }: Props) => {
	const dispatch = useDispatch()
	const onClose = () => {
		dispatch(closeModalDelete({}))
	}

	return (
		<div
			onClick={onClose}
			className="fixed z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="flex flex-col justify-between gap-10 relative w-full max-w-sm p-5 h-fit bg-white rounded-xl shadow-2xl"
			>
				<span
					className="absolute right-5 top-5 flex justify-center items-center h-5 font-semibold text-5xl cursor-pointer"
					onClick={onClose}
				>
					&times;
				</span>
				<p className='text-main-900 font-semibold text-lg'>{title}</p>
				{children}
			</div>
		</div>
	)
}
