import React from 'react'
import { Link } from 'react-router-dom'
import { Logout } from '../../Button/Logout'
import { Logo } from '../Logo'

export const Header = () => {
	return (
		<header className="flex items-center lg:justify-center px-5 fixed z-40 top-0 w-screen h-16 bg-white shadow-md">
			<Link to="/profile">
				<Logo width={135} />
			</Link>
			<Logout />
		</header>
	)
}
