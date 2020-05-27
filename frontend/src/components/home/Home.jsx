import React from 'react';
import Container from '../../common/containers/Containter.jsx'
import Col from '../../common/containers/Col.jsx'
import Header from './../../common/containers/Header.jsx'

export default props => (
  <Container className="py-5">
    <Header title="Mega Biblioteca" lead={`Aplicativo para organização de livros`} icon="book" hr /> 
    <Container row>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur hic, quos illum molestiae suscipit magnam error sequi incidunt sint! Unde facere perspiciatis velit laudantium voluptate.
    </Container>
  </Container>
)