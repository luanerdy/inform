import React from 'react'
import { Login } from './pages/login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cadastro } from './pages/cadastro'
import { Toast } from './components/Toast'
import { Provider } from 'react-redux'
import { store } from './store'

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
	return (
		<Provider store={store}>
			<Toast />
			<RouterProvider router={router} />
		</Provider>
	)
}
