import { useState } from 'react'
import './App.css'
import './index.css'
import { Header } from './components/pages/Header'
import { About } from './components/pages/About'
import { Proyects } from './components/pages/Proyects'
import { ProyectsInfo } from './components/info/ProyectsInfo'
import { Footer } from './components/pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="port-container">
      <Header/>
      <About/>
      <Proyects object={ProyectsInfo}/>
      <Footer/>
    </main>
  )
}

export default App
