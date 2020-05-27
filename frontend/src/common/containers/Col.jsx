import React from 'react';

const generateBootstrapClasses = ( classes = '' ) => {

  let array = classes.split(' ') 

  let _classes = 
             array[0] ? `col-${array[0]}` : 'col-12'
             array[1] ? `col-sm-${array[1]}` : 'col-12'
  _classes = array[2] ? _classes += ` col-md-${array[2]}`  : ''
  _classes = array[3] ? _classes += ` col-lg-${array[3]}`  : ''
  _classes = array[4] ? _classes += ` col-xs-${array[4]}`  : ''

  return _classes
}

export default props => (
  <div className={`col ${generateBootstrapClasses(props.classes)}`} {...props} >
    {props.children}
  </div>
)