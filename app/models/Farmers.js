'use strict'

var sequelize = require('./index');
var DataTypes = require('sequelize/lib/data-types');

var Farmers = sequelize.define('Farmers', {
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	phone: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
	underscored: true,
	freezeTableName: true,
	paranoid: true
});

module.exports = Farmers;