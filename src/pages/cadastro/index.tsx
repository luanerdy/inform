import React from 'react'
import { Logo } from '@/components/Logo'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button/Default'
import { Background } from '@/components/auth/Background'
import { Form } from '@/components/auth/Form'
import { Link } from '@/components/auth/Link'
import { Container } from '@/components/auth/Container'
import { Divider } from '@/components/Divider'
import { GoogleButton } from '@/components/Button/Google'

export const Cadastro = () => {
	return (
		<Background>
			<Form>
				<Logo width={250} />
				<Container>
					<Input placeholder="Digite o seu email" type="email" />
					<Input placeholder="Crie uma senha" type="password" />
					<Input placeholder="Repita a senha" type="password" />
					<Button>Cadastrar</Button>
					<Divider />
					<GoogleButton>
						Continuar com Google
					</GoogleButton>
				</Container>
				<Link type="entrar" />
			</Form>
		</Background>
	)
}
