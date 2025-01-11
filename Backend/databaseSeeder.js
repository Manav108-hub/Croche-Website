const router = require('express').Router();
const User = require('./models/user');  
const Users = require('./data/User');  
const products = require('./data/Product');
const Product = require('./models/product');

// Post route to seed users
router.post('/user', async (req, res) => {
    try {
        // Delete all existing users
        await User.destroy({ where: {} });

        // Insert the users from the seed data
        const userSeeder = await User.bulkCreate(Users);

        // Send response
        res.status(200).send(userSeeder);
    } catch (error) {
        console.error("Error seeding users:", error);
        res.status(500).send("Error seeding users");
    }
});

// Post route to seed products
router.post('/product', async (req, res) => {
    try {
        // Delete all existing products
        await Product.destroy({ where: {} });

        // Insert the products from the seed data
        const productSeeder = await Product.bulkCreate(products);

        // Send response
        res.status(200).send(productSeeder);
    } catch (error) {
        console.error("Error seeding products:", error);
        res.status(500).send("Error seeding products");
    }
});

module.exports = router;
