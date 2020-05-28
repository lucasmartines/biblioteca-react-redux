const express = require('express')
const env = require('../env')
module.exports = ( app ) => {

  const apiService = express.Router()



  app.use('/api',apiService)
  // insert bookService into api service
  // require('./book_service/bookService.js')( apiService )
  require('./book_service/bookService.js')( (b) => apiService.use('/books',b) )
  
  return apiService
}