import { Container } from '@/components/info/Container'
import { Editor } from '@/components/form/Editor'
import { Fieldset } from '@/components/form/Fieldset'
import { Field } from '@/components/info/Field'
import { Header } from '@/components/global/Header'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { Area } from '@/components/info/Area'
import draftToHtml from 'draftjs-to-html'
import { convertToRaw } from 'draft-js'
import { Delete } from '@/components/info/Modal/Delete'

export const Info = () => {
	const { form, app } = useSelector((state: RootState) => state)

	return (
		<>
			<Header />
			{app.modalDelete.open ? <Delete /> : <></>}
			<form className="flex justify-center w-screen pt-24 pb-8 px-5">
				<Container>
					<Fieldset>
						<Field title="Nome" text={form.nome} />
						<Field title="Email" text={form.email} />
					</Fieldset>
					<Fieldset>
						<Field title="CPF" text={form.cpf} />
						<Field title="Data de nascimento" text={form.nascimento} />
					</Fieldset>
					<Fieldset>
						<Field title="País" text={form.pais} />
						<Field title="Estado" text={form.estado} />
						<Field title="Cidade" text={form.cidade} />
					</Fieldset>
					<Area>
						{draftToHtml(convertToRaw(form.descricao.getCurrentContent()))}
					</Area>
				</Container>
			</form>
		</>
	)
}
