import React, { PropsWithChildren } from 'react'

export const Set = ({ children }: PropsWithChildren) => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 lg:gap-12 w-full">
			{children}
		</div>
	)
}
