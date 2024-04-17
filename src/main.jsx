import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Memoria from './Paginas/Memoria/Memoria.jsx'
import PageNotFound from './Paginas/PageNotFound/PageNotFound.jsx'
import Quiz from './Paginas/Quiz/Quiz.jsx'
import './geral.css'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {index: true, element: <Memoria/>},
    {path:'Memoria', element: <Memoria/>},
    {path:'Quiz', element: <Quiz/>},
    {path:'*', element: <PageNotFound/>},
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
