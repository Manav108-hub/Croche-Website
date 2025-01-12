const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Order = sequelize.define("Order", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "id",      
    },
  },
  orderItems: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  shippingAdd: {
    type: DataTypes.JSON, 
    allowNull: false,
    defaultValue: {
      address: "",
      city: "",
      pincode: null,
      country: "",
    },
  },
  paymentMethod: {
    type: DataTypes.ENUM("UPI"), 
    allowNull: false,
    defaultValue: "UPI",
  },
  paymentResult: {type : DataTypes.JSON,
    id : DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
  },
  isPaid : {
    type: DataTypes.BOOLEAN,
    require : true,
    defaultValues : false
  },
  isDelivered : {
    type: DataTypes.BOOLEAN,
    require : true,
    defaultValue : false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
} , {timestamps  : true});

module.exports = Order;
