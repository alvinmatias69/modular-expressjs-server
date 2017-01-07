'use strict';

var Fields = require('../models/Fields');

var FieldsService = {
	createNewField: function(field, callback) {
		Fields.create(field)
			.then(function(newField) {
				callback(newField);
			});
	},
	getAllField: function(callback) {
		Fields.findAll({
			attributes: ['id', 'lat', 'lng', 'dsc']
		})
			.then(function(fields) {
				callback(fields);
			});
	},
	getField: function(id, callback) {
		Fields.findById(id)
			.then(function(field) {
				callback(field);
			});
	},
	deleteField: function(id, callback) {
		Fields.destroy({
			where:{
				id: id
			}
		})
			.then(function(result) {
				callback(result);
			});
	},
	updateField: function(id, field, callback) {
		Fields.update(field, {
			where:{
				id: id
			}
		})
			.then(function(result) {
				callback(result);
			})
	}
}

module.exports = FieldsService;