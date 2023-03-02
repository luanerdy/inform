import { Button } from '@/components/Button/Default'
import { Container } from '@/components/form/Container'
import { Editor } from '@/components/form/Editor'
import { Fieldset } from '@/components/form/Fieldset'
import { Input } from '@/components/form/Input'
import { Select } from '@/components/form/Select'
import { Header } from '@/components/global/Header'
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
						<Input name="Nome" placeholder="Digite seu nome completo" />
						<Input name="Email" placeholder="Digite um email válido" />
					</Fieldset>
					<Fieldset>
						<Input
							mask="999.999.999-99"
							name="CPF"
							placeholder="Digite seu CPF (somente números)"
						/>
						<Input
							mask="99/99/9999"
							name="Data de nascimento"
							placeholder="Data no formato dd/mm/aaaa"
						/>
					</Fieldset>
					<Fieldset>
						<Select
							name="País"
							placeholder="País"
							onChange={() => null}
							options={[]}
						/>
						<Select
							name="Estado"
							placeholder="Estado"
							onChange={() => null}
							options={[]}
						/>
						<Select
							name="Cidade"
							placeholder="Cidade"
							onChange={() => null}
							options={[]}
						/>
					</Fieldset>
					<Editor />
					<Fieldset reverse>
						<Button
							style={{
								background: '#F5F5F5',
								color: '#4B0000',
								width: '100%',
							}}
						>
							Cancelar
						</Button>
						<Button
							style={{
								width: '100%',
							}}
						>
							Salvar
						</Button>
					</Fieldset>
				</Container>
			</form>
		</>
	)
}
