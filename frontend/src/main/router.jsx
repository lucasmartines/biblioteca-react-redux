import React from 'react';
import { HashRouter as Router , Route, Switch } from 'react-router-dom'

import Book from './../components/book/Book.jsx'
import Home from './../components/Home/Home.jsx'
import Navbar from './../common/template/Navbar.jsx'
import PrivateRoute from '../common/containers/PrivateRoute.jsx'

import SignPage from '../components/login-logout/SignPage.jsx'


export default props => (
  <Router>
    <Navbar />
    <Switch>
      <PrivateRoute 
          path="/books"
          redirect="/login"
          isAuthenticated={true}
      > 
        <Book/>
      </PrivateRoute>
      <Route path="/login" exact component={SignPage} />
      <Route path="/" component={Home}  />
    </Switch>
  </Router>
)