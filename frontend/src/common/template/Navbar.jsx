import React from 'react';
import env from '../../../.env.js'
import { useLocation} from "react-router";



export default props => {

  let location = useLocation();

  // verificar se a rota atual é igual a entry 
  const checkActive = (entry) => location.pathname === entry ? 'active' : ''
  

  const linksRender = () => (
    <>
      <li className={`nav-item ${checkActive('/')}`} >
        <a className="nav-link" href="#/"> Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item" className={`nav-item ${checkActive('/books')}`}  >
        <a className="nav-link" href="#/books"> Livros</a>
      </li>
    </>)
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

      <a className="navbar-brand" href="#">
        { env.APP_NAME }
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          { linksRender(props)}
        </ul>
      </div>

    </nav>)
}

