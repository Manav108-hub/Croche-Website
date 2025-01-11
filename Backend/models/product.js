const { DataTypes } = require("sequelize");  // Use 'require' for DataTypes
const sequelize = require("../config/db");   // Use 'require' for sequelize instance

const Product = sequelize.define("Product", {
    name: { type: DataTypes.STRING, allowNull: false },
    category: {
        type: DataTypes.ENUM("small bag", "medium bag", "large bag", "clutch", "scrunchie"),
        allowNull: false,
    },
    price: { type: DataTypes.FLOAT, allowNull: false },
    stock: { type: DataTypes.INTEGER, defaultValue: 0 },
    description: { type: DataTypes.TEXT },
});

module.exports = Product;
