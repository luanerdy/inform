import React from 'react'
import { Login } from './pages/login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cadastro } from './pages/cadastro'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/cadastro',
		element: <Cadastro />,
	},
])

export const App = () => {
	return <RouterProvider router={router} />
}
