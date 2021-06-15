import React from 'react'
import Wrapper from './Wrapper'
import Buscador from './Buscador'
import Resultados from './Resultados'
import '../App.css'
import {Link} from 'wouter'
import useSearch from '../hooks/useSearch'
import Spinner from './Spinner'

export default function Busqueda({params}) {
  
  console.log(params)
  const { word } = params
  const { search, loading } = useSearch({word})
  
  return (
    <div>
      <div className="container_top_search">
        <Wrapper>
          <div className="top_search">
            <Link href="/">
              <h1>mi.buscador</h1>
            </Link>
            <div>
              <Buscador />
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="container_resultados">
        <Wrapper>
          {loading
          ? <Spinner/>
          : <>
              <Resultados search={search.Search} />
            </>
          }
        </Wrapper>
      </div>
    </div>
  )
}
