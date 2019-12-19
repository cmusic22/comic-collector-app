//this file contains server routes
var express = require('express')

module.exports = function(Comics) {
	var router = express.Router()

	router.get('/comics-list', function(req, res, next){
		Comics.findAll({order: ['title']}).then( comics => {
			return res.json(comics)
		
	}).catch(err => next(err)) })	

	router.post('/comics-list', function(req, res, next){
		Comics.create(req.body).then( (data) => {
			return res.status(201).send('ok')
		}).catch( err => {
			if (err instanceof Sequelize.ValidationError) {
				let messages = err.errors.map( (e) => e.messages)
				return res.status(500).json(messages)
			}

			return next(err)
		})
	})

	router.patch('/comics-list/:id', function(req, res, next){
		Comics.update (
			req.body, {
				where: {
					id: req.params.id
				}
		}).then((rowsModified) => {
			if (!rowsModified[0]) {
				return res.status(404).send('Not Found')
			}else{
				return res.send('ok')
			}
		}).catch( err => {
			if (err instanceof Sequelize.ValidationError){
				let messages = err.errors.map( (e)=> e.messages)
				return res.status(500).json(messages)
			}
			return next (err)
		})
	})

	//this is supposed to get the entries with the year selected on the filter
	// Use a get request to query, not a patch. Patch should be used for updates
	router.get('/comics-list/year/:year', function(req, res, next){
		Comics.findAll(
			{
				where: {
					year: req.params.year   // match the year column 
				}
			}
		).then((comics) => {
			return res.json(comics)
		}).catch(err => next(err))
	})

	//this is supposed to get the entries with the condition selected on the filter
	router.patch('/comics-list/:condition', function(req, res, next){
		Comics.get(
			req.body,{
				where: {
					id: req.params.condition
				}
			}
		).then((comic) => {
			return res.json(comics)
		}).catch(err => next(err))
	})



	router.delete('/comics-list/:id', function(req, res, next){
		Comics.destroy({ where: {id: req.params.id}}).then( () => {
			return res.sent('ok')
		}).catch(err => next(err))
	})

	/*router.patch('/comic-list', function(req, res, next){
		Comic.create(req.body)
	})*/
	return router
}