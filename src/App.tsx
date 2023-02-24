import React from 'react'
import icon from '@/assets/icons/icon.svg'
import logo from '@/assets/images/logo.svg'

export const App = () => {
	return (
		<div className=''>
			<img width={50} src={icon} alt="Icon" />
			<br />
			<img width={250} src={logo} alt="Logo" />
		</div>
	)
}
