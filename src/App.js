import './App.css';
import React from 'react'
import { Route } from "wouter";
import Home from './components/Home'
import Busqueda from './components/Busqueda'
import {SearchContextProvider} from './context/searchContext'

function App() {
  return (
    <SearchContextProvider>
      <Route 
        path="/" 
        component = {Home}
      />
      <Route 
        path="/search/:word" 
        component = {Busqueda}
      />
    </SearchContextProvider>
  );
}

export default App;
