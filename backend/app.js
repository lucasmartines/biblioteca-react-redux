const mongoose = require('./config/mongoose')


const express = require ('express')
const cors    = require('./config/cors')
const env     = require('./env')
const error = require('./config/errorHandler.js')
const bodyParser = require('body-parser')

// app server
const app = express()
app.use(cors)
app.use(error)
app.use(bodyParser.json())
express.urlencoded({ extended: false })


// root app for route '/'
require('./routes/app_service/appService.js')( app  )
// load api service
require('./routes/apiService.js')( app )

app.listen( env.PORT || 3000  , () => console.log( 'RUNNING ON 3000' ) )

