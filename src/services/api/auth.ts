import { api } from '.'

export const validate = async (token: string) => {
	try {
		await api.get('/auth/validate', {
			headers: { Authorization: `Bearer ${token}` },
		})
		return true
	} catch (err) {
		return false
	}
}
