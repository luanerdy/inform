import React from 'react'
import { Logout } from '../Button/Logout'
import { Logo } from '../Logo'

export const Header = () => {
	return (
		<header className='flex items-center lg:justify-center px-5 fixed z-40 top-0 w-screen h-16 bg-white shadow-lg'>
			<Logo width={135} />
			<Logout />
		</header>
	)
}
