'use strict';

var sequelize = require('./index');
var DataTypes = require('sequelize/lib/data-types');

var Fields = sequelize.define('Fields', {
	lat: {
		type: DataTypes.FLOAT,
		allowNull: false
	},
	lng: {
		type: DataTypes.FLOAT,
		allowNull: false
	},
	dsc: {
		type: DataTypes.STRING,
		allowNull: true
	}
}, {
	underscored: true,
	freezeTableName: true,
	paranoid: true
});

module.exports = Fields;