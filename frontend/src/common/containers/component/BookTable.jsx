import React from 'react';
import Container from '../Containter.jsx'
import Col from '../Col.jsx'
import Card from '../CardContainer.jsx'

export default props => (
<Container row className="px-0">
  <Col classes="12">
    <Card  className="">
      <table className="table">
        <thead>
          <tr>
            <th> </th>
            <th>Nome</th>
            <th>Autor</th>
            <th>Data de publicação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.children}
        </tbody>
      </table>
    </Card >
  </Col>
</Container>
)