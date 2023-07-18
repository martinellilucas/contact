const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Contacto", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    tel: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    message: {
      type: DataTypes.STRING,
    },
    comment: {
      type: DataTypes.STRING,
      defaultValue: "No contactado",
    },
  });
};
