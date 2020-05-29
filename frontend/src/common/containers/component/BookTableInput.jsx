import React from 'react';
import Container from '../Containter.jsx'
import Col from '../Col.jsx'
import Card from '../CardContainer.jsx'

export default props => (
<Container row className="px-0">
  <Col classes="12">
    <Card  className="p-2">
      {props.children || false}
    </Card >
  </Col>
</Container>
)