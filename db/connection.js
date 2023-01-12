const mysql = require('mysql2');
require('dotenv').config();

// Connect to database
const db = mysql.createConnection(

      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
  db.connect(function (err){
    if(err) {
        throw err
    }
  })

  module.exports = db;