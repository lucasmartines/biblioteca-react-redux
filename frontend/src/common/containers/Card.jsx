import React from 'react';

export default props => (
  <div className="card text-white bg-primary mb-3 px-2"   >
    <div className="card-header">{props.header}</div>
    <div className="card-body">
      <h4 className="card-title">{props.title}</h4>0
      <div className="card-text">{props.children}</div>
    </div>
  </div>
)