import React from 'react';
import img from './../../assets/images/book.png'


const SingleData = ( props ) => (
  <tr>
    <td className="book-img-container"> <img src={img} alt=""/>  </td>
    <td> {props.name} </td>
    <td> {props.author} </td>
    <td> {props.publishDate} </td>
  </tr>
)

export default SingleData