import {API_KEY_OMDB} from './api_key_test'

export const getSearch = ({word}) => {
  console.log({word} + 'en getSearch')
  return fetch(`http://www.omdbapi.com/?s=${word}&apikey=${API_KEY_OMDB}`)
  .then(res => res.json())
  .then(search => search)
}