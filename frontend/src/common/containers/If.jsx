import React from 'react';

export default p => {
  if( p.show ) return p.children || false
  else return false
}
