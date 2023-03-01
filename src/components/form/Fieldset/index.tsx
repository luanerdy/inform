import React, { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
	reverse?: boolean
}

export const Fieldset = ({ children, reverse }: Props) => {
	return (
		<fieldset
			className={`flex flex-col${
				reverse ? '-reverse' : ''
			} md:flex-row items-center justify-between gap-5 md:gap-8 lg:gap-12 w-full`}
		>
			{children}
		</fieldset>
	)
}
