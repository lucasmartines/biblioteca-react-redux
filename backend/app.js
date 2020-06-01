const mongoose = require('./config/mongoose')
const env = require('./env')

const express = require('express')
const cors = require('./config/cors')
const bodyParser = require('body-parser')
const error = require('./config/errorHandler.js')


// app server
const app = express()
app.use(cors)
app.use(error)
app.use(bodyParser.json())
express.urlencoded({ extended: false })



// root app for route '/'
require('./routes/app_service/appService.js')(app)


// load api service
require('./routes/apiService.js')(app)

// boot app
app.listen(process.env.PORT || 3000, () => console.log(`Running on ${ process.env.PORT || 3000 }`))