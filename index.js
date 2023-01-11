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
    database: "employees_db",
  },
  console.log(`Connected to the database.`)
);


// inquirer to prompt in command line

// array of questions
const options = [
    {
      type: "list",
      message: "Please select from the list what would you like to do:",
      choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
      name: "optionSelection",
    },
];

function askPromptQuestions() {
  inquirer
    .prompt(options)

    // data = giant object (answers from input)
    .then((answers) => {
      // console.log(answers);
      // each of these will be a promise / async await (Michael thinks this is cleaner)
      if (answers.optionSelection === "View all departments") {
        promptViewAllDepartments();
      }
      if (answers.optionSelection === "View all roles") {
        promptViewAllRoles();
      }
      if (answers.optionSelection === "View all employees") {
        promptViewAllEmployees();
      }
      if (answers.optionSelection === "Add a department") {
        promptAddDepartment();
        // not dependent upon anything else
      }
      if (answers.optionSelection === "Add a role") {
        promptAddRole();
        // dependent upon dept and emp
      }
      if (answers.optionSelection === "Add an employee") {
        promptAddEmployee();
        // dependent upon role and dept
      }
      if (answers.optionSelection === "Update an employee role") {
        promptUpdateEmployeeRole();
        // query db to list emp
        // query specific emp
        // update spec emp
        // 
      }
    });
  }

  // these functions above are not correct, I need to update with either more prompts or a db.query to CRUD db



  

