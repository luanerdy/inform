import React from 'react'
import icon from '@/assets/icons/icon.svg'

interface Props {
    width: number | string
}

export const Icon = ({ width }: Props) => {
	return (
		<img width={width} src={icon} alt="Icon" />
	)
}
