import React from 'react'
import { Logo } from '@/components/Logo'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button/Default'
import { Background } from '@/components/auth/Background'
import { Form } from '@/components/auth/Form'
import { Link } from '@/components/auth/Link'
import { Container } from '@/components/auth/Container'
import { GoogleButton } from '@/components/Button/Google'
import { Divider } from '@/components/Divider'

export const Login = () => {
	return (
		<Background>
			<Form>
				<Logo width={250} />
				<Container>
					<Input placeholder="Digite o seu email" type="email" />
					<Input placeholder="Digite a sua senha" type="password" />
					<Button>Entrar</Button>
					<Divider />
					<GoogleButton>
						Continuar com Google
					</GoogleButton>
				</Container>
				<Link type="cadastrar" />
			</Form>
		</Background>
	)
}
