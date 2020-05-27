import React from 'react';
import Row from './Row.jsx'

export default props => (
  <div className={"container container-fluid "+props.className}>
    { props.row ? ( <Row> {props.children} </Row> ) : props.children }
  </div>
)