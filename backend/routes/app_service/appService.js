const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

const { base , _cors } = require('../../env.js')
const express = require('express')

module.exports = ( app   ) => {
  

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  // static files from front end
  app.use( express.static( path.resolve( base , './../frontend/public' )  )  )
  
  /** send static file front end */
  app.get( '/' , (req,res) => {
    res.sendFile( path.resolve( base , './../frontend/public/index.html' ) )
  })

}