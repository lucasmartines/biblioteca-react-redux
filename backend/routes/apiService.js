const express = require('express')
const env = require('../env')


/** centraliza os serviços da api */
module.exports = ( app ) => {

  // insert api service into app service
  const apiService = express.Router()
  app.use('/api',apiService)

  
  // insert bookService into api service
  require('./book_service/bookService.js')( (b) => apiService.use('/books',b) )
  
  return apiService
}