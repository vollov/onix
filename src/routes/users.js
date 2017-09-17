const express = require('express');
const router = express.Router();

const cfg = require('../cfg');
const _ = require('underscore');

const log = require('../lib/logger.js')
const models = require('../models');

/* GET users listing. */
router.get('/', function(req, res) {
	console.log('calling get users');

	models.User.findAll({
		include: [ { model: models.Role,
			attributes: ['name']
		}],
		attributes: [
		'username',
		'email']
	})
	.then((users) => {
		return res.status(200).json(users);
	})
	.catch((err) => {
		log.error('encountered database error when get all users %j', err);
		return res.status(500).json({
			message : 'database error when getting users'
		});
	});
});


router.post('/', function(req, res, next) {
	log.debug('POST user= %j', req.body);

	models.User.create(
		req.body
	)
	.then(user =>{
		return res.status(200).json({
			code: cfg.code.SUCCESS,
			data: user
		});
	})
	.catch(err => {
		log.error('encountered database error when create user %j', err);
		return res.status(500).json({
			code: cfg.code.DB_ERROR,
			message : 'database error when create user ' + req.body.username
		});
	});
});

router.get('/:id', function(req, res, next) {
	var id = req.params.id;
	log.debug('HTTP GET /users/:id -- id = %s', id);

	models.User.findById(id, {
		include: [ { model: models.Role,
			attributes: ['name']
		}],
		attributes: [
		'username',
		'email']
	})
	.then(user => {
		if (!user) {
			return res.status(200).json({
				code: cfg.code.NOT_FOUND,
				message : 'use does not exists!'
			});
		}
		return res.status(200).json({
			code: cfg.code.SUCCESS,
			data: user
		});
	})
	.catch(err => {
		log.error('encountered database error when get all users %j', err);
		return res.status(500).json({
			code: cfg.code.DB_ERROR,
			message : 'database error when getting users' + id
		});
	});
});

router.delete('/:id', function(req, res, next){
	var _id = req.params.id;
	models.User.destroy({
	  where: {
	    id: _id
	  }
	})
	.then(() => {
		return res.status(200).json({
			code: cfg.code.SUCCESS,
			data: {id: _id}
		});
	})
	.catch(err => {
		log.error('encountered database error when get all users %j', err);
		return res.status(500).json({
			code: cfg.code.DB_ERROR,
			message : 'database error when deleteing user ' + id
		});
	});
});

router.put('/:id', function(req, res, next) {
	var id = req.params.id;
	var body = req.body;
	// delete body._id;
	log.debug('calling put body =%j', body);

	models.User.findById()
	.then(user => {
		if (!user) {
			return res.status(200).json({
				code: cfg.code.NOT_FOUND,
				message : 'use does not exists!'
			});
		}

		_.extend(user,body);

		return user.save();
	})
	.then((user) =>{
		return res.status(200).json({
			code: cfg.code.SUCCESS,
			data: user
		});
	})
	.catch(err => {
		log.error('encountered database error when get all users %j', err);
		return res.status(500).json({
			code: cfg.code.DB_ERROR,
			message : 'database error when update user ' + body.username
		});
	});
});

// router.get('/cat', function(req, res, next) {
// 	log.debug('HTTP GET /cat -- all message');
// 	return res.status(200).json('calling get cat');
// });

module.exports = router;
