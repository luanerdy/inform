import { Button } from '@/components/Button/Default'
import { closeModalDelete } from '@/store/slices/app'
import { cancelForm } from '@/store/slices/form'
import React from 'react'
import { batch, useDispatch } from 'react-redux'
import { Modal } from '..'

export const Delete = () => {
	const dispatch = useDispatch()

	const onClose = () => {
		dispatch(closeModalDelete({}))
	}

	const deleteForm = async () => {
		// chamar endpoint

		batch(() => {
			dispatch(closeModalDelete({}))
			dispatch(cancelForm({}))
		})
	}

	return (
		<Modal title="Atenção!">
			<p className="self-center text-main-900 font-medium">
				Deseja excluir o formulário?
			</p>
			<div className="flex gap-5 items-center justify-between">
				<Button
					style={{ flex: 1, background: '#F5F5F5', color: '#4B0000' }}
					onClick={onClose}
				>
					Cancelar
				</Button>
				<Button style={{ flex: 1 }} onClick={deleteForm}>
					Excluir
				</Button>
			</div>
		</Modal>
	)
}
