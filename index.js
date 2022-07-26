const express = require('express');
const path = require('path')
const app = express()
const logger = require('morgan')
let methodOverride = require('method-override')



app.set('port', process.env.PORT || 8000);
//middleware starts here
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//middlewares end here

//routes start here
app.set("views", path.join(__dirname,"views"));

app.listen(app.get('port'), () =>{
    console.log(`✅ PORT: ${app.get('port')} 🌟`);
})