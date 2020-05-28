import React from 'react';
import Container from '../../common/containers/Containter.jsx'
import Col from '../../common/containers/Col.jsx'
import Header from './../../common/containers/Header.jsx'
import Card from '../../common/containers/CardContainer.jsx'
import './Book.css'
import Button from './../../common/input/Button.jsx'

import SingleData from './SingleData.jsx'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchBooks} from './bookActions.js'


class Book extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.fetchBooks()
  }
  render(){

    let {books} = this.props || []

    return( 
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
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  { books && books.map( book => (
                    <SingleData 
                      key={book._id || book.id}
                      name={book.name}
                      author={book.authr}
                      publishDate={book.publishDate}/>
                  ) )}
                </tbody>
              </table>
            </Card >
          </Col>
        </Container>
      </Container>
    )
  }
}

const mapStateToProps = ( state ) => ({ 
  book: state.book ,
  books: state.book.books
})
const mapDispatchToProps = dispatch => bindActionCreators( { 
  fetchBooks
} , dispatch )

export default connect(mapStateToProps,mapDispatchToProps)(Book) 
