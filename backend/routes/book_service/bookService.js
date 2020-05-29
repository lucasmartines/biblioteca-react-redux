//const mongoose = require('./../../config/mongoose')
const express = require('express')
const bookService = express.Router()


const Book = require('./../../models/book')


  
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

    let { name, author , publishDate , _id } = req.body 
    let _book = await Book.findOne({_id})
  
    _book.name        = name
    _book.author      = author
    _book.publishDate = publishDate
  
    _book.save()
    res.send({..._book})
  }
  catch( e ){
    console.log( e )
    res.status(500).send({ message:"Erro Não foi possivel atualizar o Livro" })
  }
})



module.exports = ( apiServiceCallback ) => apiServiceCallback( bookService ) 
