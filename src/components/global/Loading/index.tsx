import React from 'react'
import { Bars } from 'react-loader-spinner'

export const Loading = () => {
	return (
		<div className='flex justify-center items-center w-screen h-screen bg-white bg-opacity-70'>
			<Bars
				height="80"
				width="80"
				color="#4B0000"
				ariaLabel="bars-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</div>
	)
}
