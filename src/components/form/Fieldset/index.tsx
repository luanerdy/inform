import React, { PropsWithChildren } from 'react'

export const Fieldset = ({ children }: PropsWithChildren) => {
	return <fieldset className='flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 lg:gap-12 w-full'>{children}</fieldset>
}
