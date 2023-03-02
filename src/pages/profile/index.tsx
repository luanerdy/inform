import { RootState } from '@/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { Empty } from './Empty'
import { Info } from './Info'

export const Profile = () => {
	const { form } = useSelector((state: RootState) => state)
	return <>{form.started ? <Info /> : <Empty />}</>
}
