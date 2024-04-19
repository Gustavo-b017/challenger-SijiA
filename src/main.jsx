import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Memoria from './Paginas/Memoria/Memoria.jsx'
import PageNotFound from './Paginas/PageNotFound/PageNotFound.jsx'
import Quiz from './Paginas/Quiz/Quiz.jsx'
import './geral.css'
import QuizNovo from './Paginas/Quiz/QuizNovo.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {index: true, element: <Memoria/>},
    {path:'Memoria', element: <Memoria/>},
    {path:'Quiz', element: <Quiz/>},
    {path:'QuizMelhorado', element: <QuizNovo />},
    {path:'*', element: <PageNotFound/>},
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
