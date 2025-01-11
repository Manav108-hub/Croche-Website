const bcrypt = require('bcrypt');

const Data = [
    {
        name: "admin",
        email: "admin@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name: "user",
        email: "user@example.com",
        password: bcrypt.hashSync("123456", 10),
    }
];


module.exports = Data;