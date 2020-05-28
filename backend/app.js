const express = require ('express')
const cors = require('./config/cors')

const { env , ...server } = require('./config/server.js')

// app server
const app = express()

app.use(cors)

// root app for route '/'
require('./routes/app_service/appService.js')( app  )

// load api service
require('./routes/apiService.js')( app )

app.listen( env.PORT || 3000  , () => console.log( 'RUNNING ON 3000' ) )

