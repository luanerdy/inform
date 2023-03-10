import { Container } from '@/components/info/Container'
import { Fieldset } from '@/components/form/Fieldset'
import { Field } from '@/components/info/Field'
import { Header } from '@/components/global/Header'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { Area } from '@/components/info/Area'
import draftToHtml from 'draftjs-to-html'
import { Delete } from '@/components/info/Modal/Delete'

export const Info = () => {
	const { form, app } = useSelector((state: RootState) => state)

	return (
		<>
			<Header />
			{app.modal.delete ? <Delete /> : <></>}
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
						<Field title="País" text={form?.pais?.label ?? ''} />
						<Field title="Estado" text={form?.estado?.label ?? ''} />
						<Field title="Cidade" text={form?.cidade?.label ?? ''} />
					</Fieldset>
					<Area>{draftToHtml(form.descricao)}</Area>
				</Container>
			</form>
		</>
	)
}
