'use strict';

var Farmers = require('../models/Farmers');

var FarmersService = {
	createNewFarmer: function(farmer, callback) {
		Farmers.create(farmer)
			.then(function(newFarmer) {
				callback(newFarmer);
			});
	},
	getAllFarmer: function(callback) {
		Farmers.findAll({
			attributes: ['id', 'name', 'phone']
		})
			.then(function(farmers) {
				callback(farmers);
			})
	},
	getFarmer: function(id, callback) {
		Farmers.findById(id)
			.then(function(farmer) {
				callback(farmer)
			})
	},
	deleteFarmer: function(id, callback) {
		Farmers.destroy({
			where:{
				id: id
			}
		})
			.then(function(farmer) {
				callback(farmer);
			});
	},
	updateFarmer: function(id, farmer, callback) {
		Farmers.update(farmer, {
			where:{
				id: id
			}
		})
			.then(function(farmer) {
				callback(farmer);
			})
	}
}

module.exports = FarmersService;