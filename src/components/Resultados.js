import React from 'react'
import Resultado from './Resultado'

export default function Resultados({search = []}) {

  return (
    <div>
      {console.log(search)}
      { search[0] && search.map(({Title, imdbID, Poster}) => 
        <Resultado title = {Title} id = {imdbID} link = {Poster} key = {imdbID}/>
        )
      }
    </div>
  )
}
