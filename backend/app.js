const express = require ('express')
const app = express()
const env = require('./env.js')
const path = require('path')

app.use( express.static( path.resolve( __dirname , './../frontend/public' )  )  )

app.get( '/' , (req,res) => {
  res.sendFile( path.resolve( __dirname , './../frontend/public/index.html' ) )
} )

app.listen( env.PORT || 3000  , () => console.log( 'RUNNING ON 3000' ) )
