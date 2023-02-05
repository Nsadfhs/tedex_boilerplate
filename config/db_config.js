const mysql = require("mysql");
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 1000000000,
    timezone: "KST",
    multipleStatements: true,
});

module.exports = pool;