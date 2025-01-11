require('dotenv').config();  // Load .env file

const { Sequelize } = require('sequelize');

// Initialize Sequelize with database credentials from environment variables
const sequelize = new Sequelize(
    process.env.DB_NAME,    // Database name
    process.env.DB_USER,    // Database user
    process.env.DB_PASSWORD, // Database password
    {
        host: process.env.DB_HOST,   // Database host
        dialect: 'mysql',    // Specify MySQL as the dialect
    }
);

// Test the database connection
sequelize.authenticate()
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error("Error connecting to the database:", error));

module.exports = sequelize;
