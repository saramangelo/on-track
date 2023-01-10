const inquirer = require('inquirer');
const consoleTable = require('console.table')
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: "localhost",
      // MySQL username,
      user: "root",
      // TODO: Add MySQL password here
      password: "Smalls9690!",
      database: "",
    },
    console.log(`Connected to the database.`)
  );

