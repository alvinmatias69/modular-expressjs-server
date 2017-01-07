'use strict'

var express = require('express'),
	router = express.Router();

router.use('/field', require('./fieldsController'));
router.use('/farmer', require('./farmersController'));

module.exports = router;