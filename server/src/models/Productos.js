const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("productos", {
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
    min: {
      type: DataTypes.INTEGER,
    },
    difference: {
      type: DataTypes.INTEGER,
      get() {
        return this.stock - this.min;
      },
    },
  });
};
