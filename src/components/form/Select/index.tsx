import { Option } from '@/@types/form'
import React from 'react'
import ReactSelect from 'react-select'

interface Props {
	name: string
	placeholder: string
	onChange: () => void
	options: Option[]
}

export const Select = ({ name, onChange, options, placeholder }: Props) => {
	return (
		<ReactSelect
			styles={{
				container: (base) => ({
					...base,
					width: '100%',
				}),
				control: (base) => ({
					...base,
					border: 'none',
					borderBottom: '2px solid #4B0000',
					borderRadius: 0,
					color: '#F7FAFC',
					boxShadow: 'none',
				}),
				singleValue: (base) => ({
					...base,
					color: 'white',
				}),
				placeholder: (base) => ({
					...base,
					color: '#FF8C8C',
				}),
				indicatorSeparator: () => ({
					display: 'none',
				}),
				dropdownIndicator: (base) => ({
					...base,
					color: '#4B0000',
				}),
			}}
			options={options}
			name={name}
			onChange={onChange}
			placeholder={placeholder}
		/>
	)
}
