const express = require('express');
const path = require('path')
const app = express()
const logger = require('morgan')
let methodOverride = require('method-override')


require('dotenv').config()
require('./Database/connection')

const port = process.env.PORT || 3001

//middleware starts here
app.use(methodOverride('_method'))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'build')))
//middlewares end here

//routes start here


app.listen((port), () =>{
    console.log(`✅ PORT: ${(port)} 🌟`);
})



app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
