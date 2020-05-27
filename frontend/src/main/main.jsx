import React from 'react';

import Router from './router.jsx'
import Login from './../components/login-logout/SignPage.jsx'



export default props => (
    <Router />
)

const CheckLogin = ( props ) => {
  let logged = false;

  if( logged )
    return props.children
  else 
    return <Login />
  
}