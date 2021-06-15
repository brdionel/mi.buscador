import {useState, useEffect, useContext} from 'react';
import {getSearch} from '../services/getSearch'
import SearchContext from '../context/searchContext'

export default function useSearch({word}){
  const [loading, setLoading] = useState(false);
  const {search, setSearch} = useContext(SearchContext)
  
  useEffect(() => {    
    setLoading(true)
      //linda como se ejecuta el servicio y llegan los gifs
      getSearch({word})
      .then( searchList => {
        setSearch(searchList)
        setLoading(false)
      })
    
  }, [word, setSearch])

  return {loading, search}
} 