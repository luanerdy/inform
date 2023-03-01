import { IToast } from '@/@types/toast'
import { changeToastContent, untoastify } from '@/store/slices/app'
import { useDispatch } from 'react-redux'

export const useToast = () => {
	const dispatch = useDispatch()
	const toast = ({ text, title, type }: IToast) => {
		dispatch(changeToastContent({ toast: { active: true, text, title, type } }))

		setTimeout(() => dispatch(untoastify({})), 4000)
	}

	return toast
}
