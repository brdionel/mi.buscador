import React, {useState} from 'react'

const Contexto = React.createContext({})

export function SearchContextProvider({children}){

  const [search, setSearch] = useState([])
  
  return <Contexto.Provider value = {{search, setSearch}}>
    {children}
  </Contexto.Provider>
}

export default Contexto;