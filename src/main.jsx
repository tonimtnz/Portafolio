import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './App.css'
import { Header } from './components/pages/Header.jsx'
import { Footer } from './components/pages/Footer.jsx'
import { Me } from './components/pages/Me.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
  },
  {
    path :  "/me",
    element : <Me/>  
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>,
)
