'use strict';

var express = require('express'),
	router = express.Router();
var FieldsService = require('../services/FieldsService');

router.route('/')
	.post(function(req, res) {
		if (!req.body.lat || !req.body.lng) {
			res.status(500).json({
				status: 'Failure Post',
				message: 'latitude and longitude must not empty',
				data: null
			});
		} else {
			let field = {
				lat: req.body.lat,
				lng: req.body.lng,
				dsc: req.body.dsc
			}

			FieldsService.createNewField(field, function(result) {
				res.status(200).json({
					status: 'Success Post',
					message: 'Ok',
					data: result
				});
			})
		}
	})
	.get(function(req, res) {
		FieldsService.getAllField(function(result) {
			res.status(200).json({
				status: 'Success Get',
				message: 'Ok',
				data: result
			})
		});
	});

router.route('/:id')
	.get(function(req, res) {
		FieldsService.getField(req.params.id, function(result) {
			res.status(200).json({
				status: 'Success Get',
				message: 'Ok',
				data: result
			})
		});
	})
	.delete(function(req, res) {
		FieldsService.deleteField(req.params.id, function(result) {
			res.status(200).json({
				status: 'Success Delete',
				message: 'Ok',
				data: result
			})
		})
	})
	.put(function(req, res) {
		let field = {
			lat: req.body.lat,
			lng: req.body.lng,
			dsc: req.body.dsc
		}
		FieldsService.updateField(req.params.id, field, function(result) {
			res.status(200).json({
				status: 'Success Update',
				message: 'Ok',
				data: result	
			})
		})
	});

module.exports = router;