import { removeToken } from '@/helpers/token'
import { useNavigate } from 'react-router-dom'

export const useLogout = () => {
	const navigate = useNavigate()

	const logout = () => {
		removeToken()
		navigate('/')
	}

	return logout
}
