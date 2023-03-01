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
import { useToast } from '@/hooks/useToast'
import { validate } from '@/services/api/auth'
import { setToken } from '@/helpers/token'
import { useNavigate } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'

export const Cadastro = () => {
	const [loading, setLoading] = useState(false)
	const [info, setInfo] = useState({
		email: '',
		password: '',
		confirm_password: '',
	})

	const onChange = useChange(setInfo)
	const googleSignin = useGoogle()
	const toast = useToast()
	const navigate = useNavigate()

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault()
		setLoading(true)
		await handleSignup()
		setLoading(false)
	}

	const handleGoogle = async () => {
		setLoading(true)
		await googleSignin()
		setLoading(false)
	}

	const handleSignup = async () => {
		const { confirm_password, password, email } = info

		if (!emailRegEx.test(email))
			return toast({
				title: 'Erro',
				text: 'Email inválido',
				type: 'error',
			})
		if (password !== confirm_password)
			return toast({
				title: 'Erro',
				text: 'Senhas incompatíveis',
				type: 'error',
			})

		const result = await mail.signup(email, password)

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
						value={info.email}
						onChange={(e) => onChange(e.target)}
						placeholder="Digite o seu email"
						type="email"
						name="email"
					/>
					<Input
						disabled={loading}
						value={info.password}
						onChange={(e) => onChange(e.target)}
						placeholder="Crie uma senha"
						minLength={8}
						maxLength={50}
						type="password"
						name="password"
					/>
					<Input
						disabled={loading}
						value={info.confirm_password}
						onChange={(e) => onChange(e.target)}
						placeholder="Repita a senha"
						minLength={8}
						maxLength={50}
						type="password"
						name="confirm_password"
					/>
					<Button type="submit" disabled={loading}>
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
							'Cadastrar'
						)}
					</Button>
					<Divider />
					<GoogleButton
						disabled={loading}
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
				<Link type="entrar" />
			</Form>
		</Background>
	)
}
