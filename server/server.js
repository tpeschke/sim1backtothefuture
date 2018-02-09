const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , dotenv = require('dotenv').config()
    , massive = require('massive')
    , ctrl = require('./controller')

const app = new express()
app.use(bodyParser.json())
app.use(cors())

//Sim 1 74e
app.use( express.static( __dirname + `/../build` ) ) 

//Sim 1 76c
app.get('/api/getList', function(req,res,next) {
    // sim 2 75d
    console.log('this is request level middle ware and I\'m working')
    next()
},ctrl.getList)

//sim 1 74d-3
app.post('/api/saveList', ctrl.postList)
//sim 1 74d-4 & 76e
app.delete('/api/delete/:id', ctrl.deleteThing )
//sim 1 74d-2
app.put('/api/edit/:id', ctrl.editThing)

const port = process.env.PORT

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    app.listen(port, _ => {
        console.log(`Autumn Ends: The Frogs Settle Down Into The Earth ${port}`);
    })
});