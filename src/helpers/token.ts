import { TOKEN_STRING } from '@/constants/token'

export const getToken = () => localStorage.getItem(TOKEN_STRING)

export const setToken = (token: string) =>
	localStorage.setItem(TOKEN_STRING, token)

export const removeToken = () => localStorage.removeItem(TOKEN_STRING)
