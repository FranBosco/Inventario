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
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    unidadDeMedida: {
      type: DataTypes.STRING,
    },
    min: {
      type: DataTypes.INTEGER,
    },
    difference: {
      type: DataTypes.INTEGER,
      get() {
        let aux = this.stock - this.min;
        return aux;
      },
    },
  });
};
