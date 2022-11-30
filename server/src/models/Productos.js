const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('productos', {
		nombre: {
			type: DataTypes.STRING,
			allowNull: false
		},
		stock: {
			type: DataTypes.INTEGER
		},
		details: {
			type: DataTypes.TEXT
		}
	});
};
