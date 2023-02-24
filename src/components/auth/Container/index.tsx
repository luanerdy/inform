import React, { PropsWithChildren } from 'react'

export const Container = ({ children }: PropsWithChildren) => {
	return (
		<div className="flex flex-col gap-5 font-body items-center w-full">{children}</div>
	)
}
