//this file is to configure and start the server session
var express = require('express')
var bodyParser = require('body-parser')
var Sequelize = require('sequelize')
var api_routes = require('./routes/api.js')

//DB Config
sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: './db.sqlite3'
})

//verify
sequelize.authenticate()
	.then(()=> console.log('connected to sqlite'))
	.catch(err => console.log('error connecting', err))

//Initialize model
let comic = require('./model/comic.js')(sequelize, Sequelize)

//App Config.
var app = express()
app.use(bodyParser.json())

app.use('/api', api_routes(comic))



//Start 
var server = app.listen(process.env.PORT || 3000, function(){
	console.log('app running on port', server.address().port)
})