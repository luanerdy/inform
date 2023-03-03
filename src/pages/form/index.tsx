import { Option, SendData } from '@/@types/form'
import { Button } from '@/components/Button/Default'
import { Container } from '@/components/form/Container'
import { Editor } from '@/components/form/Editor'
import { Fieldset } from '@/components/form/Fieldset'
import { Input } from '@/components/form/Input'
import { Select } from '@/components/form/Select'
import { Header } from '@/components/global/Header'
import { useChange } from '@/hooks/useChange'
import { RootState } from '@/store'
import React, { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Country, State, City } from 'country-state-city'
import { fillForm } from '@/store/slices/form'
import { Save } from '@/components/info/Modal/Save'
import { openModalSave } from '@/store/slices/app'
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js'
import { create, update } from '@/services/api/form'
import { getToken } from '@/helpers/token'
import { useToast } from '@/hooks/useToast'

export const Form = () => {
	const { form, app } = useSelector((state: RootState) => state)
	const [loading, setLoading] = useState(false)
	const dispatch = useDispatch()
	const [info, setInfo] = useState(() => ({
		nome: form.nome,
		email: form.email,
		cpf: form.cpf,
		nascimento: form.nascimento,
		pais: form.pais,
		estado: form.estado,
		cidade: form.cidade,
		paises: form.paises,
		estados: form.estados,
		cidades: form.cidades,
		descricao: EditorState.createWithContent(convertFromRaw(form.descricao)),
	}))

	const navigate = useNavigate()
	const onChange = useChange(setInfo)
	const toast = useToast()

	const handleChange =
		(name: string) => (value: Option | Option[] | EditorState | undefined) => {
			setInfo((prev) => ({ ...prev, [name]: value }))
		}

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault()
		dispatch(openModalSave({}))
	}

	const handleSave = async () => {
		setLoading(true)
		await handleSendFormInfo()
		setLoading(false)
		navigate('/profile')
	}

	const handleSendFormInfo = async () => {
		const data = {
			...info,
			descricao: convertToRaw(info.descricao.getCurrentContent()),
			started: true,
		}

		const token = getToken() ?? ''

		const sendData: SendData = { ...data }
		sendData.descricao = JSON.stringify(sendData.descricao)

		const result = form.started
			? await update(token, sendData)
			: await create(token, sendData)

		if (!result)
			return toast({
				title: 'Erro',
				text: 'Não foi possível salvar os dados',
				type: 'error',
			})

		toast({
			title: 'Sucesso',
			text: 'Dados salvos com sucesso',
			type: 'success',
		})

		dispatch(fillForm(data))
	}

	const getCountries = () =>
		Country.getAllCountries().map(({ isoCode, name }) => ({
			label: name,
			value: isoCode,
		}))

	const getStates = (pais: Option) =>
		State.getStatesOfCountry(pais.value).map(({ isoCode, name }) => ({
			label: name,
			value: isoCode,
		}))

	const getCities = (pais: Option, estado: Option) =>
		City.getCitiesOfState(pais.value, estado.value).map(({ name }) => ({
			label: name,
			value: name,
		}))

	useEffect(() => {
		if (info.paises.length !== 0) return
		const { pais, estado } = form

		const paises: Option[] = getCountries()

		if (pais) {
			const estados = getStates(pais)
			handleChange('estados')(estados)
		}

		if (pais && estado) {
			const cidades = getCities(pais, estado)
			handleChange('cidades')(cidades)
		}

		handleChange('paises')(paises)
	}, [])

	useEffect(() => {
		if (!info.pais || info.pais === form.pais) return

		const estados: Option[] = getStates(info.pais)

		handleChange('estados')(estados)

		handleChange('estado')(undefined)
		handleChange('cidade')(undefined)
	}, [info.pais])

	useEffect(() => {
		if (
			!info.pais ||
			!info.estado ||
			(info.pais === form.pais && info.estado === form.estado)
		)
			return

		const cidades: Option[] = getCities(info.pais, info.estado)

		handleChange('cidades')(cidades)

		handleChange('cidade')(undefined)
	}, [info.estado])

	return (
		<>
			<Header />
			{app.modal.save ? <Save onSave={handleSave} /> : <></>}

			<form
				onSubmit={handleSubmit}
				className="flex justify-center w-screen pt-24 pb-8 px-5"
			>
				<Container>
					<Fieldset>
						<Input
							disabled={loading}
							value={info.nome}
							onChange={(e) => onChange(e.target)}
							name="nome"
							title="Nome"
							placeholder="Digite seu nome completo"
						/>
						<Input
							disabled={loading}
							value={info.email}
							onChange={(e) => onChange(e.target)}
							name="email"
							title="Email"
							placeholder="Digite um email válido"
						/>
					</Fieldset>
					<Fieldset>
						<Input
							disabled={loading}
							value={info.cpf}
							onChange={(e) => onChange(e.target)}
							name="cpf"
							mask="999.999.999-99"
							title="CPF"
							placeholder="Digite seu CPF (somente números)"
						/>
						<Input
							disabled={loading}
							value={info.nascimento}
							onChange={(e) => onChange(e.target)}
							name="nascimento"
							mask="99/99/9999"
							title="Data de nascimento"
							placeholder="Data no formato dd/mm/aaaa"
						/>
					</Fieldset>
					<Fieldset>
						<Select
							disabled={loading}
							value={info.pais}
							name="pais"
							placeholder="País"
							onChange={handleChange('pais')}
							options={info.paises}
						/>
						<Select
							disabled={loading}
							value={info.estado}
							name="estado"
							placeholder="Estado"
							onChange={handleChange('estado')}
							options={info.estados}
						/>
						<Select
							disabled={loading}
							value={info.cidade}
							name="cidade"
							placeholder="Cidade"
							onChange={handleChange('cidade')}
							options={info.cidades}
						/>
					</Fieldset>
					<Editor
						editorState={info.descricao}
						onEditorStateChange={handleChange('descricao')}
					/>
					<Fieldset reverse>
						<Button
							disabled={loading}
							onClick={() => navigate('/profile')}
							type="button"
							style={{
								background: '#F5F5F5',
								color: '#4B0000',
								width: '100%',
							}}
						>
							Cancelar
						</Button>
						<Button
							disabled={loading}
							type="submit"
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
