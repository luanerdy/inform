import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '.'

const auth = getAuth(app)

export const signup = async (email: string, password: string) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		)
		const token = await userCredential.user.getIdToken()

		return {
			token,
		}
	} catch (error) {
		return {
			error,
		}
	}
}

export const signin = async (email: string, password: string) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password,
		)
		const token = await userCredential.user.getIdToken()

		return {
			token,
		}
	} catch (error) {
		return {
			error,
		}
	}
}
