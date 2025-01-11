const { DataTypes } = require('sequelize');  // Use 'require' instead of 'import'
const sequelize = require('../config/db');   // Use 'require' for sequelize instance
const bcrypt = require('bcrypt');  // Use 'require' for bcrypt

// Define User model
const User = sequelize.define("User", {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
    timestamps: true,
    hooks: {
        beforeCreate: (user) => {
            // Encrypt password before saving
            if (user.password) {
                user.password = bcrypt.hashSync(user.password, 10);
            }
        }
    }
});

// Sync database (optional: remove 'force: true' in production)
sequelize.sync({ force: false })  // force: true will drop the table if it exists
    .then(() => console.log("User model synced successfully"))
    .catch(error => console.error("Error syncing User model:", error));

module.exports = User;
