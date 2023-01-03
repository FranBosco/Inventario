const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('productos', {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		img: {
			type: DataTypes.STRING
		},
		details: {
			type: DataTypes.STRING
		},
		stock: {
			type: DataTypes.INTEGER
		},
		min: {
			type: DataTypes.INTEGER
		},
		defaultInput: {
			// type: DataTypes.ARRAY(DataTypes.STRING, DataTypes.INTEGER),
			type: DataTypes.ARRAY(DataTypes.JSON)
		},
		difference: {
			type: DataTypes.INTEGER,
			get() {
				let aux = this.stock - this.min;
				return aux;
			}
		}
	});
};
