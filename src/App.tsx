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

const router = createBrowserRouter([
	{
		path: '*',
		element: <NotFound />,
	},
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/profile',
		element: <Profile />,
	},
	{
		path: '/form',
		element: <Form />,
	},
	{
		path: '/cadastro',
		element: <Cadastro />,
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
