import { signin } from '@/services/firebase/google'

export const useGoogle = () => {
	const googleSignin = async () => {
		const result = await signin()

		if ('error' in result) {
			return alert('Erro!')
		}

		console.log(result)
		alert('sucesso')
	}

	return googleSignin
}
