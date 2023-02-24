import React from 'react'
import logo from '@/assets/images/logo.svg'

interface Props {
    width: number | string
}

export const Logo = ({ width }: Props) => {
	return (
		<img width={width} src={logo} alt="Logo" />
	)
}
