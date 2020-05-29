import React from 'react';
import Col from '../../common/containers/Col.jsx'

export default props => (
  <Col classes={props.classes}>
    <div className="form-group">
      <label htmlFor="name">{props.label}</label>
      <input {...props.input }
        className="form-control"
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type}
      />
    </div>
  </Col >
)