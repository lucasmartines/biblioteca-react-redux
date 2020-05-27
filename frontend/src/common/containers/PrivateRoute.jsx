import React from 'react'
import {Route, Redirect} from 'react-router-dom'


export default ( { children, redirect = "/login", isAuthenticated , ...rest } ) => {

  const showRoute = location => {
    if ( isAuthenticated )
      return ( children )
    else 
      return ( <Redirect to={{ pathname: redirect, state: { from: location } }} /> )
  }

  return (
    <Route 
      {...rest}
      render={ props => showRoute(props.location)  }
    />
  );
}