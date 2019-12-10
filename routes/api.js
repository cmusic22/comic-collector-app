//this file contains server routes
var express = require('express')

module.exports = function(Comic) {
	var router = express.Router()

	router.get('/comic-list', function(req, res, next){
		Comic.findAll().then( comics => {
			return res.json(comics)
		})
	})

	router.post('/comics-list', function(req, res, next){
		Comic.create(req.body).then( (data) => {
			return res.status(201).send('ok')
		})
	})

	/*router.patch('/comic-list', function(req, res, next){
		Comic.create(req.body)
	})*/
	return router
}