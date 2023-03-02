import { Button } from '@/components/Button/Default'
import { closeModalSave } from '@/store/slices/app'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Modal } from '..'

interface Props {
	onSave: () => void
}

export const Save = ({ onSave }: Props) => {
	const dispatch = useDispatch()

	const onClose = () => {
		dispatch(closeModalSave({}))
	}

	const saveForm = async () => {
		onSave()
		dispatch(closeModalSave({}))
	}

	return (
		<Modal onClose={onClose} title="Atenção!">
			<p className="self-center text-main-900 font-medium">
				Deseja salvar as informações?
			</p>
			<div className="flex gap-5 items-center justify-between">
				<Button
					style={{ flex: 1, background: '#F5F5F5', color: '#4B0000' }}
					onClick={onClose}
				>
					Cancelar
				</Button>
				<Button style={{ flex: 1 }} onClick={saveForm}>
					Salvar
				</Button>
			</div>
		</Modal>
	)
}
