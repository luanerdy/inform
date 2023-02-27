import { Target } from '@/@types/auth'
import { Dispatch, SetStateAction } from 'react'

export const useChange = <T>(setState: Dispatch<SetStateAction<T>>) => {
	const onChange = (target: Target) => {
		const { name, value } = target
		setState((prev: T) => ({ ...prev, [name]: value }))
	}
    
	return onChange
}
