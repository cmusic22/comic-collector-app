//this file is to configure and start the server session
var express = require('express')
var bodyParser = require('body-parser')
var Sequelize = require('sequelize')
var api_routes = require('./routes/api.js')
var path = require('path')

db_url = process.env.DATABASE_URL

let sequelize

if (db_url) {

//DB Config
sequelize = new Sequelize(db_url, {
	dialect: 'postgres',
})

//verify
sequelize.authenticate()
	.then(()=> console.log('connected to Postgres'))
	.catch(err => console.log('error connecting', err))
}
else {
	sequelize = new Sequelize({
		dialect: 'sqlite',
		storage: './db.sqlite3'
	})

	sequelize.authenticate()
		.then(() => console.log('connected to sqlite'))
		.catch(err => console.log(err))
}
//Initialize model
let comic = require('./model/comic.js')(sequelize, Sequelize)

//App Config.
var app = express()
app.use(bodyParser.json())

app.use('/api', api_routes(comic))

//Error handlers
//404 (route)
app.use(function(req, res, next){
	res.status(404).send('Not found')
})

//500(server)
app.use(function(err,req,res,next){
	console.error(err.stack)
	res.status(500).send('Server error')
})

//Start 
var server = app.listen(process.env.PORT || 3000, function(){
	console.log('app running on port', server.address().port)
})