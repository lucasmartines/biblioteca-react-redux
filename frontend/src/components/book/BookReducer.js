const DEFAULT_STATE = {
  books:[],
  bookPanel: 'show_books', /* show_books | show_edit_books */ 
  search: '',
  page:0,
  count:0
}
import c from './../../constants/constants.jsx'

export default ( state = DEFAULT_STATE , action ) => {
  let _state = state 

  switch (action.type) {
    
    case c.FETCHED_BOOKS_SERVER:
      const books = action.payload.data  
      return {...state,books}

    case c.CHANGE_BOOK_PANEL:
      const bookPanel = action.payload
      return {...state, bookPanel }  

    case c.FETCHED_BOOK_COUNT:
      return{...state, count: action.payload.data.count}

    case c.SET_SEARCH:
        return {...state, search: action.payload }  
  

    default:
      return _state
  }
}