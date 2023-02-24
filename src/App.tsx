import React from 'react'
import { Login } from './pages/login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
])

export const App = () => {
	return <RouterProvider router={router} />
}
