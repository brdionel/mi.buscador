import React from 'react'
import '../App.css';
import Buscador from './Buscador'

export default function Home() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="contenedor">
          <h1>mi.buscador</h1>
          <Buscador />
        </div>
      </header>
      <footer>
        <h3>TP - DLC</h3>
      </footer>
    </div>
  )
}
