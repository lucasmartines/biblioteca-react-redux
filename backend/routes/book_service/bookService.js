
const express = require('express')
const bookService = express.Router()


const Book = require('./../../models/book')

// ?sort ?search_field ?author
bookService.get('/search', async( req,res ) => {

  let { q , search , search_field, sort_field , sort   , page , qtd } = req.query

  search = search || req.body.search

  q = q || search || ''
 
  sort         = parseInt( +sort )  || 1 // if is -1 in reverse if is 1 is normal
  page         = parseInt( +page )  || 0 // is the page of pagination
  qtd          = page ? 5 : qtd // if user pass page them the default limit of books per request is 5
  qtd          = qtd ? parseInt( +qtd  ) : 5 // is the qtd of the books that clients whant


  let regex = new RegExp( q ,'i')
  
  let search_object = search_field ? { search_field : regex } : { 'name' : regex }
  let sort_obj      = sort_field   ? { [sort_field]     : +sort  } : {}

  Book
    .find ()
    .where( search_object )
    .sort ( sort_obj )
    .skip (  page * qtd )
    .limit( page * qtd + qtd )
    .exec ( ( e , books ) => {
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
    let books = await Book.find()
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
