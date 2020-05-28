import React from 'react';

import Router from './router.jsx'
import Login from './../components/login-logout/SignPage.jsx'

import {Provider} from 'react-redux'

import store from './redux_config.jsx'

export default props => (
  <Provider store={store}>
    <Router />
  </Provider>
)

const CheckLogin = ( props ) => {
  let logged = false;

  if( logged )
    return props.children
  else 
    return <Login />
  
}