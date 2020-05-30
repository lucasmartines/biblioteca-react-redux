import React from 'react';
import Container from '../../common/containers/Containter.jsx'
import Col from '../../common/containers/Col.jsx'
import Header from './../../common/containers/Header.jsx'

import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchCount} from '../book/bookActions.js'

class Home extends React.Component{  
  
  componentDidMount(){
    this.props.fetchCount()
  }
  render()
  { 
    return (
      <Container className="py-5">
        <Header title="Mega Biblioteca" lead={`Aplicativo para organização de livros`} icon="book" hr /> 
        <Container row>
          Livros Registrado(s): {this.props.count}
        </Container>
        <Container row>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur hic, quos illum molestiae suscipit magnam error sequi incidunt sint! Unde facere perspiciatis velit laudantium voluptate.
        </Container>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  count: state.book.count
})
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCount
},dispatch)
export default connect(mapStateToProps , mapDispatchToProps)( Home )