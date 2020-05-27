import React from 'react';
import Container from '../../common/containers/Containter.jsx'
import Row from '../../common/containers/Row.jsx'
import Col from '../../common/containers/Col.jsx'

export default props => (
  <Container className="py-5">
    <h2> Book </h2>
    <Container row>
      <Col classes="6">
        <h4>Teste</h4>
      </Col>
      <Col classes="6">
        <h4>Teste</h4>
      </Col>
    </Container>
  </Container>
)