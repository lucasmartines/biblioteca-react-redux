import React from 'react';

const generateBootstrapClasses = ( classes = '' ) => {

  let array = classes.split(' ') 

  let _classes =  array[0] ? `col-${array[0]}` : ''

  _classes += array[1] ? ` col-sm-${array[1]}` : ''
  _classes += array[2] ? ` col-md-${array[2]}`  : ''
  _classes += array[3] ? ` col-lg-${array[3]}`  : ''
  _classes += array[4] ? ` col-xs-${array[4]}`  : ''

  return _classes
}

export default props => (
  <div className={`col ${generateBootstrapClasses(props.classes)}`} 
    {...props}>
    {props.children}
  </div>
)