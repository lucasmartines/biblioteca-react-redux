import {combineReducers,createStore,applyMiddleware} from 'redux'
import bookReducer from './../components/book/BookReducer.js'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

const reducers =  combineReducers({
  book: bookReducer
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default applyMiddleware( promise , thunk )(createStore)( reducers , devTools )




