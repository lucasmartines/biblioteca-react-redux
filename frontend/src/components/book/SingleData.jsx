import React from 'react';
import img from './../../assets/images/book.png'
import IconButton from '../../common/input/IconButton.jsx'

const SingleData = ( props ) => (
  <tr>
    <td className="book-img-container"> <img src={img} alt=""/>  </td>
    <td> {props.name} </td>
    <td> {props.author} </td>
    <td> {props.publishDate} </td>
    <td className="book-actions">
       <IconButton 
          onClick={()=>alert('del')}
          color="danger"
          icon="trash" 
          rounded/>
        <IconButton 
          onClick={()=>alert('edit')}
          color="success"
          icon="pencil" 
          rounded/>
        <IconButton 
          onClick={()=>alert('download')}
          color="info"
          icon="download" 
          rounded/>
    </td>
  </tr>
)

export default SingleData