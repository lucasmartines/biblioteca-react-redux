import React from 'react';
import Row from './Row.jsx';
import Col from './Col.jsx'
import If from './If.jsx'

const iconStyle = {
  "fontSize": "68px",
  "paddingTop": "10px"
}
export default p => (
  <Row>
    <Col className="d-flex justify-content-center align-items-center"  >
      <If show={true}>
        <p>
          <i style={iconStyle} className={`pl-sm-0 pl-3 text-center fa fa-${p.icon||''}`}></i>
        </p>
      </If>
    </Col>
    <Col style={{flexGrow:'18'}}>
      <h1>{p.title}</h1>
      <p className="lead">{p.subtitle || p.lead}</p>
      
    </Col>
    <Col style={{flexGrow:'4'}}>
      <div className="justify-content-end d-flex">
        {p.action}
      </div>
    </Col>
    {p.hr ? (<hr/>) : false }
  </Row>
)