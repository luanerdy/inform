import { Container } from '@/components/form/Container'
import { Fieldset } from '@/components/form/Fieldset'
import { Input } from '@/components/form/Input'
import { Select } from '@/components/form/Select'
import { Header } from '@/components/Header'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Form = () => {
	const navigate = useNavigate()

	return (
		<>
			<Header />
			<form className="flex justify-center w-screen pt-24 pb-8 px-5">
				<Container>
					<Fieldset>
						<Input name='Nome' placeholder='Digite seu nome completo' />
						<Input name='Email' placeholder='Digite um email válido' />
					</Fieldset>
					<Fieldset>
						<Input name='CPF' placeholder='Digite seu CPF (somente números)' />
						<Input name='Data de nascimento' placeholder='Data no formato dd/mm/aaaa' />
					</Fieldset>
					<Fieldset>
						<Select name='País' placeholder='País' onChange={() => null} options={[]} />
						<Select name='Estado' placeholder='Estado' onChange={() => null} options={[]} />
						<Select name='Cidade' placeholder='Cidade' onChange={() => null} options={[]} />
					</Fieldset>
				</Container>
			</form>
		</>
	)
}
