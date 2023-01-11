const inquirer = require('inquirer');
const consoleTable = require('console.table')
const mysql = require('mysql2');
const db = require('./db/connection');

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
      }
      if (answers.optionSelection === "Add a role") {
        promptAddRole();
      }
      if (answers.optionSelection === "Add an employee") {
        promptAddEmployee();
      }
      if (answers.optionSelection === "Update an employee role") {
        promptUpdateEmployeeRole();
      }
    });
  }

  // these functions above are not correct, I need to update with either more prompts or a db.query to CRUD db



  

