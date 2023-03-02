import { getToken, removeToken } from '@/helpers/token'
import { validate } from '@/services/api/auth'
import React, {
	ReactElement,
	useEffect,
	useState,
} from 'react'
import { Navigate } from 'react-router-dom'
import { Loading } from '../global/Loading'

interface Props {
	authorized?: boolean
	redirect: string
	children: ReactElement
}

export const Protected = ({
	authorized = false,
	redirect,
	children,
}: Props) => {
	const token = getToken() ?? ''
	const [valid, setValid] = useState<boolean>()

	const validToken = async () => {
		const isValid = await validate(token)

		if (!isValid) removeToken()

		setValid(isValid)
	}

	useEffect(() => {
		validToken()
	}, [token])

	if (valid === undefined) return <Loading />

	if (valid !== authorized) {
		return <Navigate to={redirect} replace />
	}

	return children
}
