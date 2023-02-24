import React from 'react'
import { Logo } from '@/components/Logo'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Background } from '@/components/auth/Background'
import { Form } from '@/components/auth/Form'
import { Link } from '@/components/auth/Link'
import { Container } from '@/components/auth/Container'

export const Cadastro = () => {
	return (
		<Background>
			<Form>
				<Logo width={250} />
				<Container>
					<Input placeholder="Digite o seu email" type="text" />
					<Input placeholder="Crie uma senha" type="password" />
					<Input placeholder="Repita a senha" type="password" />
					<Button>Cadastrar</Button>
				</Container>
				<Link type="entrar" />
			</Form>
		</Background>
	)
}
