import './Button.css'
import React from 'react';

export default p => (
  <button 
    className=
      {`btn btn-${p.color} ${p.className || ''} ${p.rounded ? 'btn-rounded':''} `} onClick={p.onClick} > 
    <i className={`fa fa-${p.icon}`}></i> {p.content}
  </button>
)