const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("insumos", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
    },
    details: {
      type: DataTypes.TEXT,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    unidadDeMedida: {
      type: DataTypes.STRING,
    },
    minimo: {
      type: DataTypes.INTEGER,
    },
  });
};
