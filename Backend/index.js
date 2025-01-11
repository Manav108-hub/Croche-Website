const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mysql = require('mysql2');
const databaseSeeder = require('./databaseSeeder');

//Environment varibles loading
dotenv.config();

//connection to db
const db = mysql.createConnection({
    host: process.env.DB_HOST,      
    user: process.env.DB_USER,      
    password: process.env.DB_PASSWORD,  
    database: process.env.DB_NAME   
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

//Test
app.get('/', (req, res)=>
{
    res.send("app is running")
})

//database seeders
app.use('/api/seed', databaseSeeder)

const PORT = process.env.PORT;
app.listen(PORT || 9000 , () =>
{
    console.log(`server is listening on ${PORT}`);
})