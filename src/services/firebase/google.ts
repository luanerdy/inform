import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth'
import { app } from '.'

const provider = new GoogleAuthProvider()
const auth = getAuth(app)

export const signin = async () => {
	try {
		const result = await signInWithPopup(auth, provider)
		const token = await result.user.getIdToken()

		// console.log(token)

		if(!token) throw new Error('Token ausente')

		return {
			token,
		}
	} catch (error: any) {
		const { code, message } = error

		return {
			error: {
				code,
				message,
			},
		}
	}
}
