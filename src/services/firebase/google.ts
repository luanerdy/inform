import { isMobile } from '@/utils/device'
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
} from 'firebase/auth'
import { app } from '.'

const provider = new GoogleAuthProvider()
const auth = getAuth(app)

export const signin = async () => {
	try {
		const result = isMobile
			? await signInWithRedirect(auth, provider)
			: await signInWithPopup(auth, provider)
		const credential = GoogleAuthProvider.credentialFromResult(result)
		const token = credential?.accessToken

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
