import React, { PropsWithChildren } from 'react'

export const Area = ({ children }: PropsWithChildren) => {
	return (
		<div className="flex flex-col w-full">
			<p className="text-lg text-main-900 font-semibold mb-3">Descrição</p>
			<div
				className="h-60 max-h-60 p-5 overflow-y-auto bg-gray-100"
				dangerouslySetInnerHTML={{ __html: children as string }}
			/>
		</div>
	)
}
