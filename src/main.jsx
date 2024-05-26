import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './geral.css'

import Home from './Paginas/Home/Home.jsx'
import Contato from './Paginas/Contato/Contato.jsx'
import PageNotFound from './Paginas/PageNotFound/PageNotFound.jsx'

import Memoria from './Paginas/Memoria/Memoria.jsx'
import EscolherJogo from './Paginas/Memoria/Componentes/EscolherJogo.jsx'
import MemoriaHemodialize from './Paginas/Memoria/Componentes/MemoriaHemodialize.jsx'

import Quiz from './Paginas/Quiz/Quiz.jsx'
import QuizInicial from './Paginas/Quiz/componentesQuiz/QuizInicial.jsx'
import QuizPerguntas from './Paginas/Quiz/componentesQuiz/QuizPerguntas.jsx'

import Videos from './Paginas/Videos/Videos.jsx'
import Duvidas from './Paginas/Duvidas/Duvidas.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {index: true, element: <Home/> },
    {path:'Memoria', 
      element: <Memoria/>,
      children: [
        {index: true, element: <EscolherJogo/>},
        {
          path: 'Hemodialize',
          element: <MemoriaHemodialize />,
        }
      ]
    },
    {path:'Quiz', 
      element: <Quiz />,
      children: [
        {index: true, element: <QuizInicial/>},
        {
          path: 'QuizPerguntas',
          element: <QuizPerguntas/>,
        }
      ]
    },
    {path:'Contato', element: <Contato/>},
    {path:'Duvidas', element: <Duvidas/>},
    {path:'Videos', element: <Videos/>},
    {path:'*', element: <PageNotFound/>},
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
