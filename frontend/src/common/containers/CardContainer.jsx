import React from 'react';

export default p => (
  <div className={`card ${p.className}`}>
    {p.children}
  </div>
)