import React from 'react';
import { HashRouter as Router , Route, Switch } from 'react-router-dom'

import Book from './../components/book/Book.jsx'
import Home from './../components/Home/Home.jsx'
import Navbar from './../common/template/Navbar.jsx'

export default props => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/books" component={Book}  />
      <Route path="/" component={Home}  />
    </Switch>
  </Router>
)