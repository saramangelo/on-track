const inquirer = require('inquirer');
const consoleTable = require('console.table');
const Queries = require('./db/index');


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
        ViewAllDepartments();
      }
      if (answers.optionSelection === "View all roles") {
        ViewAllRoles();
      }
      if (answers.optionSelection === "View all employees") {
        ViewAllEmployees();
      }
      if (answers.optionSelection === "Add a department") {
        AddDepartment();
        // not dependent upon anything else
      }
      if (answers.optionSelection === "Add a role") {
        AddRole();
        // have to give user a selection of dept
        // dependent upon dept and emp
      }
      if (answers.optionSelection === "Add an employee") {
        AddEmployee();
        // dependent upon role and dept
      }
      if (answers.optionSelection === "Update an employee role") {
        UpdateEmployeeRole();
        // query db to list emp
        // query specific emp
        // update spec emp
        // 
      }
    });
  }



  function AddEmployee() {
    // const employee = { information from prompt I have yet to create}
    Queries.createEmployee(employee)
  };

  function ViewAllDepartments() {
    
  }


  // function addRole() {
  //   Queries.findAllDepartments() --> needs to come from Class
  //     .then(([rows]) => {
  //       let departments = rows;
  //       const departmentChoices = departments.map(({ id, name }) => ({
  //         name: name,
  //         value: id
  //       }));
  
  //       prompt([
  //         {
  //           name: "title",
  //           message: "What is the name of the role?"
  //         },
  //         {
  //           name: "salary",
  //           message: "What is the salary of the role?"
  //         },
  //         {
  //           type: "list",
  //           name: "department_id",
  //           message: "Which department does the role belong to?",
  //           choices: departmentChoices
  //         }
  //       ])
  //         .then(role => {
  //           db.createRole(role)
  //             .then(() => console.log(`Added ${role.title} to the database`))
  //             .then(() => loadMainPrompts())
  //         })
  //     })
  // }


  // these functions above are not correct, I need to update with either more prompts or a db.query to CRUD db
  // console.table is like console log to display table

  

