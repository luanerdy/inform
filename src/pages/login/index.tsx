import React from 'react'
import { Logo } from '@/components/Logo'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Background } from '@/components/auth/Background'
import { Form } from '@/components/auth/Form'
import { Link } from '@/components/auth/Link'
import { Container } from '@/components/auth/Container'

export const Login = () => {
	return (
		<Background>
			<Form>
				<Logo width={250} />
				<Container>
					<Input placeholder="Digite o seu email" type="text" />
					<Input placeholder="Digite a sua senha" type="password" />
					<Button>Entrar</Button>
				</Container>
				<Link type="cadastrar" />
			</Form>
		</Background>
	)
}
