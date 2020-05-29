const mongoose = require ('mongoose')
const env = require('../env')

mongoose.connect(env.mongoose_url , {useNewUrlParser: true})
mongoose.connection.on('open',()=>console.log('database is online...'))

module.exports = mongoose