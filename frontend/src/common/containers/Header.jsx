import './Header.css'
import React from 'react';
import Row from './Row.jsx';
import Col from './Col.jsx'
import If from './If.jsx'


export default p => (
  <Row>
    <Col className="d-flex justify-content-center align-items-center"  >
      <If show={true}>
        <p>
          <i className={`header-icon pl-sm-0 pl-3 text-center fa fa-${p.icon||''}`}></i>
        </p>
      </If>
    </Col>
    <Col  >
      <h1 className="header-title">{p.title}</h1>
      <p className="header lead">{p.subtitle || p.lead}</p>
    </Col>
    <If show={p.action} >
      <Col>
        <div className="justify-content-end d-flex">
          {p.action}
        </div>
      </Col>
    </If>
    {p.hr ? (<hr/>) : false }
  </Row>
)