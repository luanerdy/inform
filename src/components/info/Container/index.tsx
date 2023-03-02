import { openModalDelete } from '@/store/slices/app'
import React, { PropsWithChildren } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Container = ({ children }: PropsWithChildren) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const openModal = () => {
		dispatch(openModalDelete({}))
	}

	return (
		<div className="flex flex-col items-center w-full max-w-4xl gap-5 md:gap-8">
			<div className="flex w-full justify-between">
				<h1 className="font-semibold text-xl text-main-900">Meu formulário</h1>
				<div className="flex gap-3">
					<AiFillEdit
						onClick={() => navigate('/form')}
						className="cursor-pointer"
						color="#4B0000"
						size={25}
					/>
					<AiFillDelete
						onClick={openModal}
						className="cursor-pointer"
						color="#4B0000"
						size={25}
					/>
				</div>
			</div>
			{children}
		</div>
	)
}
