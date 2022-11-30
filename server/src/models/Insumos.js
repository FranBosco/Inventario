const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('insumos', {
		nombre: {
			type: DataTypes.STRING,
			allowNull: false
		},
		stock: {
			type: DataTypes.INTEGER
		},
		details: {
			type: DataTypes.TEXT
		},
		unidadDeMedida: {
			type: DataTypes.STRING
		},
		minimo: {
			type: DataTypes.INTEGER
		},
		img: {
			type: DataTypes.STRING
		}
	});
};
