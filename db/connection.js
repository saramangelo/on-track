const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: "localhost",
      // MySQL username,
      user: "root",
      // TODO: Add MySQL password here
      password: "Smalls9690!",
      database: "employees_db",
    },
    console.log(`Connected to the database.`)
  );
  db.connect(function (err){
    if(err) {
        throw err
    }
  })

  module.exports = db;