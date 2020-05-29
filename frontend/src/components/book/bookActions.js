import axios from 'axios'
import env from '../../../.env.js'
import c from '../../constants/constants.jsx'
import {initialize} from 'redux-form'

export const fetchBooks = () => {

  try{

    const data = axios.get(env.SERVER_HOST_FULL+'/api/books')
    return {
      type: c.FETCHED_BOOKS_SERVER,
      payload: data 
    }
  }
  catch( e ){
    console.log( e )
  }
}
export const deleteBook = ( id ) => dispatch => {
  
  let data = axios.delete(env.SERVER_HOST_FULL+'/api/books?id='+id,  )
    .then( 
      () => dispatch([  changeBookPanel('show_books') , fetchBooks()  ])
    )
    .catch(
      (e) => { console.log(e) ; dispatch(fetchBooks()) }
    )
}
export const updateBook = (book) => dispatch => {


  const method = !book._id ? 'post' : 'put'
  
  let data = axios[method](env.SERVER_HOST_FULL+'/api/books', book)
    .then( _ => {
      dispatch( [ fetchBooks() , changeBookPanel('show_books') ])
    })
    .catch( e => { console.log( e) })
}

const panelOptions = [
  'show_books'        ,
  'show_edit_books'   ,
  'show_create_books' 
]
const checkBookOptions = (panelName) => {
  if( !panelOptions.includes(panelName)){
    throw ("Error panelName does not exists!")
  }
}
export const changeBookPanel = (panelName = 'show_books',books = {} ) => {

//  checkBookOptions(panelName)
  const action = {
    type: c.CHANGE_BOOK_PANEL,
    payload: panelName
  }


  if( panelName == 'show_books'){
    return    [
      initialize('bookForm' , { } )  ,
      action
    ]
  }
  else if( panelName == 'show_edit_books'){
    return    [
      initialize('bookForm' , books )   ,   
      action
    ]
  }
  else if( panelName == 'show_create_books' ){
    
    action.payload = "show_edit_books"
    
    return    [
      initialize('bookForm' , {}),
      action
    ]
  } 
}