import { setToken } from '@/helpers/token'
import { validate } from '@/services/api/auth'
import { signin } from '@/services/firebase/google'
import { useLocation, useNavigate,  } from 'react-router-dom'
import { useToast } from './useToast'

export const useGoogle = () => {
	const toast = useToast()
	const navigate = useNavigate()
	const { pathname } = useLocation()


	const googleSignin = async () => {
		const result = await signin()

		if ('error' in result) {
			return toast({
				title: 'Erro',
				text: 'Ocorreu um erro',
				type: 'error',
			})
		}

		const isValidToken = await validate(result.token)

		if(!isValidToken) {
			return toast({
				title: 'Erro',
				text: 'Token inválido',
				type: 'error',
			})
		}

		setToken(result.token)
		toast({
			title: 'Sucesso',
			text: `${pathname === '/' ? 'Login' : 'Cadastro'} efetuado com sucesso`,
			type: 'success',
		})
		navigate('/profile')
	}

	return googleSignin
}
