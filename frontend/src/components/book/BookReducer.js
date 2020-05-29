const DEFAULT_STATE = {
  books:[],
  bookPanel: 'show_books' /* show_books | show_edit_books */
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

    default:
      return _state
  }
}