import {combineReducers,createStore,applyMiddleware} from 'redux'
import bookReducer from './../components/book/BookReducer.js'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import multi from 'redux-multi'

import {reducer as formReducer} from 'redux-form'

const reducers =  combineReducers({
  book: bookReducer,
  form: formReducer
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default applyMiddleware( promise , thunk , multi)(createStore)( reducers , devTools )




