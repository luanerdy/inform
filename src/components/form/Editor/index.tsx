import { EditorState } from 'draft-js'
import React, { useState } from 'react'
import { Editor as Wysiwyg } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export const Editor = () => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty())

	const onEditorStateChange = (editorState: EditorState) => {
		setEditorState(editorState)
	}

	return (
		<div>
			<p className="self-start mb-3 text-main-900">Descrição</p>
			<Wysiwyg
				editorState={editorState}
				editorStyle={{
					minHeight: '20vh',
					maxHeight: '40vh',
					border: '1px solid #F1F1F1',
				}}
				onEditorStateChange={onEditorStateChange}
			/>
		</div>
	)
}
