import React from 'react';
import img from './../../assets/images/book.png'
import IconButton from '../../common/input/IconButton.jsx'

const SingleData = ( props ) => {
  
  return(
  <tr>
    <td className="book-img-container"> <img src={img} alt=""/>  </td>
    <td> {props.name} </td>
    <td> {props.author} </td>
    <td> {props.publishDate} </td>
    <td className="book-actions">
       <IconButton 
          onClick={props.del}
          color="danger"
          icon="trash" 
          rounded/>
        <IconButton 
          onClick={props.edit}
          color="success"
          icon="pencil" 
          rounded/>
        <IconButton 
          onClick={props.download}
          color="info"
          icon="download" 
          rounded/>
    </td>
  </tr>
)}

export default SingleData