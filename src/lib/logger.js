'use strict';

const cfg = require('../cfg.js');
const path = require('path');
const bunyan = require('bunyan');

module.exports = (function() {

	const logger = bunyan.createLogger({
		name : cfg.app.name,
		streams : [ {
			level : 'debug',
			type : 'rotating-file',
			path : path.join(cfg.app.root, 'logs/server.log'),
			period : '1d', // daily rotation
			count : 3 // keep 3 back copies
		} ]
	});

	return logger;
})();
