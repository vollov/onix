'use strict';
var path = require('path');

module.exports = {

	logging: {
		name: 'onix',
		streams : [ {
			level : 'debug',
			type : 'rotating-file',
			path : path.join('.', 'logs/server.log'),
			period : '14d', // daily rotation
			count : 3 // keep 3 back copies
		} ]
	},

	app:{
		api_url:'/api/v1.0',
		port:3012,
		name:'onix',
		root:'.'
	},

	code:{
		NOT_FOUND: 201,
		SUCCESS: 200,
		DB_ERROR:	500,

	}
};
