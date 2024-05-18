import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './geral.css'
import Memoria from './Paginas/Memoria/Memoria.jsx'
import PageNotFound from './Paginas/PageNotFound/PageNotFound.jsx'
import QuizNovo from './Paginas/Quiz/QuizNovo.jsx'
import Home from './Paginas/Home/Home.jsx'
import EscolherJogo from './Paginas/Memoria/Componentes/EscolherJogo.jsx'
import MemoriaHemodialize from './Paginas/Memoria/Componentes/MemoriaHemodialize.jsx'
import Contato from './Paginas/Contato/Contato.jsx'
import Quiz from './Paginas/Quiz/Quiz.jsx'

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
        {index: true, element: <Quiz/>},
        {
          path: 'QuizPerguntas',
          element: <Home/>,
        }
      ]
    },
    {path:'Contato', element: <Contato/>},
    {path:'Quiz', },
    {path:'*', element: <PageNotFound/>},
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
