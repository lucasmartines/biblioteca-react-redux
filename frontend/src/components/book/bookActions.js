import axios from 'axios'
import env from '../../../.env.js'
import cons from '../../constants/constants.jsx'

export const fetchBooks = () => {

  
  const data = axios.get(env.SERVER_HOST_FULL+'/api/books')
 // console.log(env.SERVER_HOST_FULL+'/api/books')

  return {
    type: cons.FETCHED_BOOKS_SERVER,
    payload: data 
  }
}