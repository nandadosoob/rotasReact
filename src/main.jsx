import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Home } from "./pages/Home/Home"
import { Contato } from "./pages/Contato/Contato"
import { Sobre } from "./pages/Sobre/Sobre"
import { Pagina404 } from "./pages/Pagina404/Pagina404"
import { Estado1 } from "./pages/Estado/Estado1"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Layout } from './pages/Layout'
import { ComEstado } from './pages/Estado/ComEstado'
import { CampoTexto } from './pages/Estado/CampoTexto'
import { Contador } from './pages/Estado/Contador'
import { ComunicacaoDireta } from './pages/comunicacao/ComunicacaoDireta'
import { ComunicacaoInireta } from './pages/comunicacao/ComunicacaoIndireta'
import { UseRef } from './pages/hooks-basicos/UseRef'
import { UseEffect } from './pages/hooks-basicos/UseEffect'


// const rotas = createBrowserRouter([
//   {path:"/", element: <Home/>},
//   {path:"/home", element: <Home/>},
//   {path:"/contato", element: <Contato/>},
//   {path:"/sobre", element: <Sobre/>},
//   {path:"*", element: <Pagina404/>},
// ])

const rotas = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path="home" element={<Home/>} />
    <Route path="contato" element={<Contato/>} />
    <Route path="sobre" element={<Sobre/>} />
    <Route path="estado1" element={<Estado1/>} />
    <Route path="comEstado" element={<ComEstado/>} />
    <Route path="campoTexto" element={<CampoTexto/>} />
    <Route path="contador" element={<Contador/>} />
    <Route path="comunicacao-direta" element={<ComunicacaoDireta/>} />
    <Route path="comunicacao-indireta" element={<ComunicacaoInireta/>} />
    <Route path="UseRef" element={<UseRef/>} />
    <Route path="UseEffect" element={<UseEffect/>} />
    <Route path="*" element={<Pagina404/>} />
  </Route>

 
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={rotas}/>

  </StrictMode>,
)
