const express = require('express')
const {fake_books} = require('./fake.js')  

/** recebe como parametro o router do api service */
module.exports = ( apiServiceCallback ) => {
  
  
  const bookService = express.Router()

  
  bookService.get( '/' , (req,res)=>{
    res.json( fake_books )  
  })

  
  apiServiceCallback( bookService )

  return bookService
}
