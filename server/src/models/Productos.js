const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("productos", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    detail: {
      type: DataTypes.TEXT,
    },
    min: {
      type: DataTypes.INTEGER,
    },
    img: {
      type: DataTypes.STRING,
    },
  });
};
