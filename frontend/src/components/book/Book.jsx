import React from 'react';
import Container from '../../common/containers/Containter.jsx'
import Col from '../../common/containers/Col.jsx'
import Header from './../../common/containers/Header.jsx'
import Card from '../../common/containers/CardContainer.jsx'
import './Book.css'
import Button from './../../common/input/Button.jsx'

import SingleData from './SingleData.jsx'

export default props => (
  <Container className="book py-5">
   
    <Header 
      title="Todos os Livros"
      lead="Crie ou edite o livro que  quiser!" 
      icon="pencil" 
      action={<Button color="secondary" icon="plus" onClick={()=>alert("adicionar Livro")} > Adicionar Livro </Button>}/> 
    <Container row className="px-0">
      <Col classes="12">
        <Card  className="p-2">
          <table className="table">
            <thead>
              <tr>
                <th> </th>
                <th>Nome</th>
                <th>Autor</th>
                <th>Data de publicação</th>
              </tr>
            </thead>
            <tbody>
              <SingleData name="Livro XYZ" author="Lucas Martines" publishDate="12-12-12"/>
            </tbody>
          </table>
        </Card >
      </Col>
    </Container>
  </Container>
)