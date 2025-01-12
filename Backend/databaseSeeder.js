const router = require("express").Router();
const User = require("./models/user");
const Users = require("./data/User");
const products = require("./data/Product");
const Product = require("./models/product");

const handler = require("express-async-handler");

// Post route to seed users
router.post(
  "/user",
  handler(async (req, res) => {
    // Delete all existing users
    await User.destroy({ where: {} });

    // Insert the users from the seed data
    const userSeeder = await User.bulkCreate(Users);

    // Send response
    res.status(200).send(userSeeder);
  })
);

// Post route to seed products
router.post(
  "/product",
  handler(async (req, res) => {
    // Delete all existing products
    await Product.destroy({ where: {} });

    // Insert the products from the seed data
    const productSeeder = await Product.bulkCreate(products);

    // Send response
    res.status(200).send(productSeeder);
  })
);

module.exports = router;
