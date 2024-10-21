import './App.css'
import './index.css'
import { About } from './components/pages/About'
import { Proyects } from './components/pages/Proyects'
import { ProyectsInfo } from './components/info/ProyectsInfo'

function App() {
  return (
    <main className="port-container">
      <About/>
      <Proyects object={ProyectsInfo}/>
    </main>
  )
}

export default App
