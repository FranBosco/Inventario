const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("insumosproductos", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      primaryKey: false,
    },
  });
};
