import { useLogout } from '@/hooks/useLogout'
import React from 'react'
import { AiOutlinePoweroff } from 'react-icons/ai'

export const Logout = () => {
	const logout = useLogout()

	return (
		<button
			className="flex items-center absolute right-5 lg:right-12 gap-2 font-semibold text-main-900 bg-transparent border-none focus:outline-none h-fit w-fit p-0"
			onClick={logout}
		>
			<AiOutlinePoweroff size={24} />
			<span>Logout</span>
		</button>
	)
}
