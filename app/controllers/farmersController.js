'use strict';

var express = require('express'),
	router = express.Router();
var FarmersService = require('../services/FarmersService');

router.route('/')
	.post(function(req, res) {
		if (!req.body.name || !req.body.phone) {
			res.status(500).json({
				status: 'Failure Post',
				message: 'name and phone must not empty',
				data: null
			});
		} else{
			let farmer = {
				name: req.body.name,
				phone: req.body.phone
			}

			FarmersService.createNewFarmer(farmer, function(result) {
				res.status(200).json({
					status: 'Success Post',
					message: 'Ok',
					data: result
				});
			})
		}
	})
	.get(function(req, res) {
		FarmersService.getAllFarmer(function(result) {
			res.status(200).json({
				status: 'Success Get',
				message: 'Ok',
				data: result
			})
		})
	});

router.route('/:id')
	.get(function(req, res) {
		FarmersService.getFarmer(req.params.id, function(result) {
			res.status(200).json({
				status: 'Success Get',
				message: 'Ok',
				data: result
			})	
		})
	})
	.delete(function(req, res) {
		FarmersService.deleteFarmer(req.params.id, function(result) {
			res.status(200).json({
				status: 'Success Delete',
				message: 'Ok',
				data: result
			})
		})
	})
	.put(function(req, res) {
		let farmer = {
			name: req.body.name, 
			phone: req.body.phone
		}

		FarmersService.updateFarmer(req.params.id, farmer, function(result) {
			res.status(200).json({
				status: 'Success Put',
				message: 'Ok',
				data: result
			})	
		})
	})

module.exports = router;