import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './App.css'
import { Header } from './components/pages/Header.jsx'
import { Footer } from './components/pages/Footer.jsx'
import { Me } from './components/pages/Me.jsx'
import { NavMenu } from './components/pages/NavMenu.jsx'
import { Proyects } from './components/pages/Proyects.jsx'
import { ProyectsInfo } from './components/info/ProyectsInfo.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
  },
  {
    path :  "/me",
    element : <Me/>  
  },
  {
    path: "/projects",
    element : <Proyects object={ProyectsInfo}/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <NavMenu/>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>,
)
