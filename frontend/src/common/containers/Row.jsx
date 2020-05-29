import React from 'react';

export default props => (
<div 
  className={`row ${props.className || ''} ${ props.flex ? 'd-flex': ''} `} 
  {...props}
>
  {props.children}
</div>
)