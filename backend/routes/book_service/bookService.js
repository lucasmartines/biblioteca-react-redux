
const express = require('express')
const bookService = express.Router()


const Book = require('./../../models/book')

// ?sort ?search_field ?author
bookService.get('/search', async( req,res ) => {

  let { q , field , sort_field , search_field , sort } = req.query

  sort_field   = sort_field    ? sort_field   : 'name' 
  search_field = search_field ? search_field : 'name' 
  sort         = +sort || 1

  Book
    .find()
    .where({ [search_field] : new RegExp( q || ' ' ,'i') })
    .sort ({ [sort_field]   : +sort  })
    .exec( ( e , books ) => {
        if ( e ){
          res.status(500).send("Erro não foi possivel buscar nenhum dado!")
        }  
        else{
          res.send([...books])
        }
    })  
})

bookService.get( '/' , async (req,res)=>{
  
  try{
    let books = await Book.find();
    res.json([...books])
  }
  catch
  {
    res.status(500).send({ 
      message:"Erro Não foi possivel inserir/atualizar o Livro" 
    })
  }
  
})

bookService.get('/count' , async (req,res)=> {

  let count = await Book.estimatedDocumentCount()
  res.send({count})
})

bookService.post('/' , async (req,res) => {
  
  let _book = new Book(req.body)

  try{
    await _book.save( req.body )
    res.json(_book)
  }
  catch
  {
    res.status(500).send({ 
      message:"Erro Não foi possivel inserir/atualizar o Livro" 
    })
  }
})

bookService.delete('/',async(req,res)=>{
  
  try
  {
      if ( !req.query.id   ) { throw ("Erro Id não fornecido, não é possivel deletar o livro!") }

      await Book.deleteOne({ _id: req.query.id })
      res.send({ message:"Livro Deletado com Sucesso" })
  }
  catch
  {
    res.status(500).send({ 
      message:"Erro Não foi possivel deletar o Livro" 
    })
  }
})

bookService.put('/' , async( req , res ) => {     
    try{
      let { _id } = req.body 
      
      // if ( !_id   ) { throw ("Erro Id não fornecido, não é possivel deletar o livro!") }
      
      await Book.updateOne({_id}, req.body)
      res.send( req.body )
    }
    catch ( e ) {
      res.status(500).send({ 
        message:"Erro Não foi possivel atualizar o Livro" 
      })
    }
  
} )



module.exports = ( apiServiceCallback ) => apiServiceCallback( bookService ) 
