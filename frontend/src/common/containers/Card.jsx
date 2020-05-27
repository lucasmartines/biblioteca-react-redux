import React from 'react';

export default props => (
  <div clasName="card text-white bg-primary mb-3" style= {{maxWidth:"20rem"}} >
    <div clasName="card-header">{props.header}</div>
    <div clasName="card-body">
      <h4 clasName="card-title">{props.title}</h4>
      <p clasName="card-text">{props.children}</p>
    </div>
  </div>
)