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
import { setToken } from '@/helpers/token'
import { validate } from '@/services/api/auth'
import { useToast } from '@/hooks/useToast'
import { useNavigate } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'

export const Login = () => {
	const [loading, setLoading] = useState(false)
	const [info, setInfo] = useState({
		email: '',
		password: '',
	})

	const onChange = useChange(setInfo)
	const googleSignin = useGoogle()
	const toast = useToast()
	const navigate = useNavigate()

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault()
		setLoading(true)
		await handleSignin()
		setLoading(false)
	}

	const handleGoogle = async () => {
		setLoading(true)
		await googleSignin()
		setLoading(false)
	}

	const handleSignin = async () => {
		const { email, password } = info

		if (!emailRegEx.test(email))
			return toast({
				title: 'Erro',
				text: 'Email inválido',
				type: 'error',
			})

		const result = await mail.signin(email, password)

		if ('error' in result) {
			return toast({
				title: 'Erro',
				text: 'Ocorreu um erro',
				type: 'error',
			})
		}

		const isValidToken = await validate(result.token)

		if (!isValidToken) {
			return toast({
				title: 'Erro',
				text: 'Token inválido',
				type: 'error',
			})
		}

		setToken(result.token)
		toast({
			title: 'Sucesso',
			text: 'Login efetuado com sucesso',
			type: 'success',
		})
		navigate('/profile')
	}

	return (
		<Background>
			<Form onSubmit={handleSubmit}>
				<Logo width={250} />
				<Container>
					<Input
						disabled={loading}
						placeholder="Digite o seu email"
						onChange={(e) => onChange(e.target)}
						value={info.email}
						name="email"
						type="email"
					/>
					<Input
						disabled={loading}
						placeholder="Digite a sua senha"
						onChange={(e) => onChange(e.target)}
						value={info.password}
						name="password"
						type="password"
					/>
					<Button disabled={loading} type="submit">
						{loading ? (
							<ThreeDots
								height="70%"
								width="80"
								radius="9"
								color="#eee"
								ariaLabel="three-dots-loading"
								visible={true}
							/>
						) : (
							'Entrar'
						)}
					</Button>
					<Divider />
					<GoogleButton
						disabled={loading}
						hideIcon={loading}
						type="button"
						onClick={handleGoogle}
					>
						{loading ? (
							<ThreeDots
								height="70%"
								width="80"
								radius="9"
								color="#4B0000"
								ariaLabel="three-dots-loading"
								visible={true}
							/>
						) : (
							'Continuar com Google'
						)}
					</GoogleButton>
				</Container>
				<Link type="cadastrar" />
			</Form>
		</Background>
	)
}
