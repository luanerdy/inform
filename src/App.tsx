import React from 'react'
import { Login } from './pages/login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cadastro } from './pages/cadastro'
import { Toast } from './components/Toast'
import { Provider } from 'react-redux'
import { store } from './store'
import { NotFound } from './pages/404'
import { Profile } from './pages/profile'
import { Form } from './pages/form'
import { Protected } from './components/Protected'

const router = createBrowserRouter([
	{
		path: '*',
		element: <NotFound />,
	},
	{
		path: '/',
		element: (
			<Protected redirect="/profile">
				<Login />
			</Protected>
		),
	},
	{
		path: '/profile',
		element: (
			<Protected authorized redirect="/">
				<Profile />
			</Protected>
		),
	},
	{
		path: '/form',
		element: (
			<Protected authorized redirect="/">
				<Form />
			</Protected>
		),
	},
	{
		path: '/cadastro',
		element: (
			<Protected redirect="/profile">
				<Cadastro />
			</Protected>
		),
	},
])

export const App = () => {
	return (
		<Provider store={store}>
			<Toast />
			<RouterProvider router={router} />
		</Provider>
	)
}
