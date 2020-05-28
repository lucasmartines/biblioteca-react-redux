const DEFAULT_STATE = {
  books:[]
}
import c from './../../constants/constants.jsx'

export default ( state = DEFAULT_STATE , action ) => {
  let _state = state 

  switch (action.type) {
    
    case c.FETCHED_BOOKS_SERVER:
      const books = action.payload.data  
      return {...state,books}  

    default:
      return _state
  }
}