import React from 'react';

export default p => (
  <button className={`btn btn-${p.color||''} ${p.className || ''}`} onClick={p.onClick} > 
    <i className={`fa fa-${p.icon||''}`}></i>{p.children||false} </button>
)