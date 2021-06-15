import React, {useState} from 'react'
import { useLocation } from "wouter";

export default function Buscador() {

  const [busqueda, setBusqueda] = useState('')
  const [location, setLocation] = useLocation()

  const handleChange = (e) => {
    console.log(e.target.value)
    setBusqueda(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocation(`/search/${busqueda}`)
  }

  const clearInput = () => {
    setBusqueda('')
  }

  return (
    <form className="buscador" onSubmit={handleSubmit}>
      <label className="label_search">
        <i className="fas fa-search icon" onClick={handleSubmit}></i>
        <input type="text" className="input_search" onChange={handleChange} value={busqueda}/>
      </label>
      { busqueda && 
        <i className = "fas fa-times close" onClick={clearInput}></i>
      }
    </form>
  )
}
