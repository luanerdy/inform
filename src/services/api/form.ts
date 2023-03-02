import { Initial } from '@/store/slices/form'
import { api } from '.'

export const get = async (token: string) => {
	try {
		const { data } = await api.get('/form', {
			headers: { Authorization: `Bearer ${token}` },
		})
		return data
	} catch (err) {
		return false
	}
}

export const create = async (token: string, info: Initial) => {
	try {
		await api.post('/form', info, {
			headers: { Authorization: `Bearer ${token}` },
		})
		return true
	} catch (err) {
		return false
	}
}

export const update = async (token: string, info: Initial) => {
	try {
		await api.patch('/form', info, {
			headers: { Authorization: `Bearer ${token}` },
		})
		return true
	} catch (err) {
		return false
	}
}

export const remove = async (token: string) => {
	try {
		await api.delete('/form', {
			headers: { Authorization: `Bearer ${token}` },
		})
		return true
	} catch (err) {
		return false
	}
}
