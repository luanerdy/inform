import React, { useState, FormEvent } from 'react'
import { Logo } from '@/components/Logo'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button/Default'
import { Background } from '@/components/auth/Background'
import { Form } from '@/components/auth/Form'
import { Link } from '@/components/auth/Link'
import { Container } from '@/components/auth/Container'
import { Divider } from '@/components/Divider'
import { GoogleButton } from '@/components/Button/Google'
import * as mail from '@/services/firebase/mail'
import { useChange } from '@/hooks/useChange'
import { emailRegEx } from '@/utils/regex'
import { useGoogle } from '@/hooks/useGoogle'

export const Cadastro = () => {
	const [info, setInfo] = useState({
		email: '',
		password: '',
		confirm_password: '',
	})

	const onChange = useChange(setInfo)
	const googleSignin = useGoogle()

	const handleMailSignup = async (event: FormEvent) => {
		event.preventDefault()
		const { confirm_password, password, email } = info

		// TODO -> criar componente de Toast
		if (!emailRegEx.test(email)) return alert('Email inválido')
		if (password !== confirm_password) return alert('passwords incompatíveis')

		const result = await mail.signup(email, password)

		if ('error' in result) {
			return alert('erro')
		}

		console.log(result)
		alert('sucesso')
	}

	return (
		<Background>
			<Form onSubmit={handleMailSignup}>
				<Logo width={250} />
				<Container>
					<Input
						value={info.email}
						onChange={(e) => onChange(e.target)}
						placeholder="Digite o seu email"
						type="email"
						name="email"
					/>
					<Input
						value={info.password}
						onChange={(e) => onChange(e.target)}
						placeholder="Crie uma senha"
						minLength={8}
						maxLength={50}
						type="password"
						name="password"
					/>
					<Input
						value={info.confirm_password}
						onChange={(e) => onChange(e.target)}
						placeholder="Repita a senha"
						minLength={8}
						maxLength={50}
						type="password"
						name="confirm_password"
					/>
					<Button type="submit">Cadastrar</Button>
					<Divider />
					<GoogleButton type="button" onClick={googleSignin}>
						Continuar com Google
					</GoogleButton>
				</Container>
				<Link type="entrar" />
			</Form>
		</Background>
	)
}
