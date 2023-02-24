import React from 'react'
import { Logo } from '@/components/Logo'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Background } from '@/components/auth/Background'
import { Form } from '@/components/auth/Form'
import { Link } from '@/components/auth/Link'

export const Cadastro = () => {
	return (
		<Background>
			<Form>
				<Logo width={250} />
				<div className="flex flex-col gap-5 font-body">
					<Input placeholder="Digite o seu email" type="text" />
					<Input placeholder="Crie uma senha" type="password" />
					<Input placeholder="Repita a senha" type="password" />
					<Button>Cadastrar</Button>
				</div>
				<Link type='entrar' />
			</Form>
		</Background>
	)
}
