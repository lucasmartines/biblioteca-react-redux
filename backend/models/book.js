const mongoose = require('../config/mongoose')


var bookModel = mongoose.Schema({
  name:{ type:String,required:true  },
  author:{ type:String, required:true   },
  publishDate: { type:String },
  urlImage:{ type:String },
  urlpdf:{ type:String }
})


module.exports = mongoose.model('book',bookModel)
