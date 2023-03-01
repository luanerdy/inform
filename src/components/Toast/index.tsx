import { TOAST_COLORS } from '@/constants/toast'
import { RootState } from '@/store'
import { untoastify } from '@/store/slices/app'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const Toast = () => {
	const { app } = useSelector((state: RootState) => state)
	const dispatch = useDispatch()

	const handleCloseModal = () => {
		dispatch(untoastify({}))
	}

	return app.toast.active ? (
		<div
			style={{ background: TOAST_COLORS[app.toast.type] }}
			className="flex flex-col justify-between w-11/12 md:w-88 h-28 rounded-lg fixed z-50 top-5 right-5 shadow-lg p-5 text-white"
		>
			<span
				onClick={handleCloseModal}
				className="flex items-center justify-center absolute top-4 right-4 text-4xl select-none cursor-pointer h-4 w-4"
			>
				&times;
			</span>
			<p className="font-semibold">{app.toast.title}</p>
			<p className="text-sm">{app.toast.text}</p>
		</div>
	) : (
		<></>
	)
}
