import React, { FormEvent, useState } from 'react'
import { Logo } from '@/components/Logo'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button/Default'
import { Background } from '@/components/auth/Background'
import { Form } from '@/components/auth/Form'
import { Link } from '@/components/auth/Link'
import { Container } from '@/components/auth/Container'
import { GoogleButton } from '@/components/Button/Google'
import { Divider } from '@/components/Divider'
import { useChange } from '@/hooks/useChange'
import { useGoogle } from '@/hooks/useGoogle'
import { emailRegEx } from '@/utils/regex'
import * as mail from '@/services/firebase/mail'

export const Login = () => {
	const [info, setInfo] = useState({
		email: '',
		password: '',
	})

	const onChange = useChange(setInfo)
	const googleSignin = useGoogle()

	const handleMailSignin = async (event: FormEvent) => {
		event.preventDefault()
		const { password, email } = info

		// TODO -> criar componente de Toast
		if (!emailRegEx.test(email)) return alert('Email inválido')

		const result = await mail.signin(email, password)

		if ('error' in result) {
			return alert('erro')
		}

		console.log(result)
		alert('sucesso')
	}
	return (
		<Background>
			<Form onSubmit={handleMailSignin}>
				<Logo width={250} />
				<Container>
					<Input
						placeholder="Digite o seu email"
						onChange={(e) => onChange(e.target)}
						value={info.email}
						name="email"
						type="email"
					/>
					<Input
						placeholder="Digite a sua senha"
						onChange={(e) => onChange(e.target)}
						value={info.password}
						name="password"
						type="password"
					/>
					<Button type="submit">Entrar</Button>
					<Divider />
					<GoogleButton type="button" onClick={googleSignin}>
						Continuar com Google
					</GoogleButton>
				</Container>
				<Link type="cadastrar" />
			</Form>
		</Background>
	)
}
