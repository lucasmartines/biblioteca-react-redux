import React from 'react';
import Button from './../../common/input/Button.jsx'
import InputContainer from '../../common/containers/component/BookTableInput.jsx'

import {reduxForm , Field , formValueSelector }  from 'redux-form'
import FormControl from './../../common/input/InputControl.jsx'
import {connect} from 'react-redux'
import Row from './../../common/containers/Row.jsx'


let InputPanel = p =>  {

  const { handleSubmit , is_update } = p

  return (
    <InputContainer>
      <form onSubmit={handleSubmit}>
        <h1> 
          <i className="fa fa-book"></i>
          { !is_update ? ' Criar' : ' Atualizar' }
        </h1>
        {/* fields name and author */}
        <Row>
          <Field 
            name="name" type="text" component={FormControl} 
            label="Nome do Livro" placeholder="Coloque o Nome do livro"
            classes="12 6 6"/>
          <Field 
            name="author" type="text" component={FormControl} 
            label="Nome do Autor" 
            classes="12 6 6" />
        </Row>
        {/*  field publish date */}
        <Row>
          <Field 
            name="publishDate" type="date" component={FormControl} 
            label="Data de Publicação" classes="12 6 4" 
          />
        </Row>
        {/* action buttons */}
        <Row className="mx-0 px-0 d-flex" > 
          <Button 
            icon="arrow-left" color="primary"
            onClick={p.back}  className="mr-auto"> Voltar </Button>
          <Button 
            icon="pencil" color="success"
            onClick={p.update}> 
             { is_update ? 'Atualizar' : 'Criar' }
          </Button>
        </Row>

      </form>
    </InputContainer>
  )
}
InputPanel = reduxForm({
  form:'bookForm'
})(InputPanel)

const mapStateToProps = state => {

  const selector = formValueSelector('bookForm')
  let is_update = selector( state , '_id') ? true : false

  return{
    is_update
  }
}

InputPanel = connect( mapStateToProps )(InputPanel)
export default InputPanel