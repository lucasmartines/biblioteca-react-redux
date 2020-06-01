const path = require('path')
const bodyParser = require('body-parser')

const { base, _cors } = require('../../env.js')
const express = require('express')

/** carrega o aplicativo front end */
module.exports = (app) => {


    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    // static files from front end
    app.use(express.static(__dirname + './../../../frontend/public'))
        //    app.use(express.static(base + './../frontend/public'))

    /** send static file front end */
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(base, './../frontend/public/index.html'))
    })

}