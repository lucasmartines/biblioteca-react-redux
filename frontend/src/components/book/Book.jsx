import './Book.css'

import React from 'react';
import Header from './../../common/containers/Header.jsx'
import Container from '../../common/containers/Containter.jsx'
import If from '../../common/containers/If.jsx'

import Button from './../../common/input/Button.jsx'

import SingleBookTableRow from './BookTableRow.jsx'

import BookTable from './../../common/containers/component/BookTable.jsx'
import BookForm from './BookForm.jsx'


import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchBooks , changeBookPanel ,updateBook , deleteBook } from './bookActions.js'

class Book extends React.Component 
{ 

  componentDidMount(){
    this.props.fetchBooks()
  }

  submitForm(book){
    // validate data

    this.props.updateBook(book)
  }
  render(){

    let {books,changeBookPanel,deleteBook} = this.props || [] // books inside book reducer 
    
    let {bookPanel} = this.props.book /** witch painel i an fron book */

    return( 
      <Container className="book py-5">
        
        {/* just show header and its data */}
        <Header 
          title="Todos os Livros"
          lead="Crie ou edite o livro que  quiser!" 
          icon="pencil" 
          action={ 
            bookPanel == 'show_books' ? ( /** hide add book buton when user is on edit panel */
             <Button 
                color="secondary"
                icon="plus"
                className="add_book_button"
                onClick={()=>{changeBookPanel('show_create_books');}} 
                > Adicionar Livro </Button>
            ) : false
          }
        /> 

        {/* just show book's data */}
        <If show={bookPanel === 'show_books'}>
          <BookTable >
            { books && books.map( book => (
              <SingleBookTableRow 
                key={book._id || book.id}
                name={book.name}
                author={book.author}
                publishDate={book.publishDate}
                edit={()=>{changeBookPanel('show_edit_books',book)}}
                del={()=>deleteBook( book._id || book.id ) }
                download={()=>alert('d')}
              />
            ) )}
          </BookTable>
        </If>

        {/* just show book form  */}
        <If show={bookPanel === 'show_edit_books'}>
          <BookForm
            back={()=>changeBookPanel('show_books')}
            onSubmit={  (book) => this.submitForm(book) }
          />
        </If>        
      </Container>
    )
  }
}

const mapStateToProps = ( state ) => ({ 
  book: state.book ,
  books: state.book.books
})
const mapDispatchToProps = dispatch => bindActionCreators( { 
  fetchBooks, changeBookPanel, updateBook, deleteBook
} , dispatch )

export default connect( mapStateToProps , mapDispatchToProps )( Book ) 
