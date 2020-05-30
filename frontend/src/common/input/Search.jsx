import './Search.css'
import React,{useState} from 'react';
import Row from './../containers/Row.jsx'
import Col from './../containers/Col.jsx'
import If from './../containers/If.jsx'

export default p => {

  const handleSubmit = () => {
    
  
      p.handleSubmit(p.query) 
  }
  return(
    <Row className="search-container">
        <div className="card p-3">
          <div className="form-group mb-0">
            <div className="d-flex">
            <input 
              className="form-control mr-2" type="text"
              value={p.query} onChange={e => p.setQuery( e.target.value )}
              placeholder={ p.placeholder || "Buscar Elemento"}
            />
            <button className="search-button btn btn-primary" onClick={handleSubmit}>
              <i className="fa fa-search"></i>
              Buscar
            </button>
            <If show={p.clean}>
            <button className="search-button btn btn-primary ml-2" onClick={p.clean}>
              Limpar
            </button>
            </If>
            </div>
          </div>
        </div>
    </Row>
  )
}