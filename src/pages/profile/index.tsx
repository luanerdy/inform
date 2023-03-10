import { Loading } from '@/components/global/Loading'
import { getToken } from '@/helpers/token'
import { get } from '@/services/api/form'
import { RootState } from '@/store'
import { cancelForm, fillForm } from '@/store/slices/form'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Empty } from './Empty'
import { Info } from './Info'

export const Profile = () => {
	const { form } = useSelector((state: RootState) => state)
	const dispatch = useDispatch()

	const getForm = async () => {
		const data = await get(getToken() ?? '')

		if (!data) return dispatch(cancelForm({}))

		dispatch(fillForm({ ...data, descricao: JSON.parse(data.descricao) }))
	}

	useEffect(() => {
		getForm()
	}, [])

	if (form.started === undefined) return <Loading />

	return <>{form.started ? <Info /> : <Empty />}</>
}
