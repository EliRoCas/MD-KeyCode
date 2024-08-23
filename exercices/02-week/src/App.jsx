import { useState } from 'react'
import './App.css'
import ercImg from '../src/assets/erc.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={ercImg} className="logo" alt="Eli logo" />
      </div>
      <h1>Eliana Rosero Castañeda</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Estados  {count}
        </button>
      </div>
      <p className="hello">
        Este es mi "Hola, mundo"
      </p>
    </>
  )
}

export default App
