const inquirer = require("inquirer");
const consoleTable = require("console.table");
const Queries = require("./Queries");

// inquirer to prompt in command line

// array of questions

const options = [
  {
    type: "list",
    message: "Please select from the list what would you like to do:",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "Start over"
    ],
    name: "optionSelection",
  },
];



function init() {
  askPromptQuestions();
}

function askPromptQuestions() {
  inquirer
    .prompt(options)

    // data = giant object (answers from input)
    .then((answers) => {
      // console.log(answers);
      // each of these will be a promise / async await
      if (answers.optionSelection === "View all departments") {
        viewAllDepartments();
      }
      if (answers.optionSelection === "View all roles") {
        viewAllRoles();
      }
      if (answers.optionSelection === "View all employees") {
        viewAllEmployees();
      }
      if (answers.optionSelection === "Add a department") {
        addDepartment();
        // not dependent upon anything else
      }
      if (answers.optionSelection === "Add a role") {
        addRole();
        // have to give user a selection of dept
        // dependent upon dept and emp
      }
      if (answers.optionSelection === "Add an employee") {
        addEmployee();
        // dependent upon role and dept
      }
      if (answers.optionSelection === "Update an employee role") {
        updateEmployeeRole();
        // query db to list emp
        // query specific emp
        // update spec emp
        //
      }
      if (answers.optionSelection === "Start over") {
        return askPromptQuestions();
      }
    });
}

function viewAllDepartments() {
  Queries.viewAllDepartments().then(([rows]) => {
    let departments = rows;
    console.table(departments)
    .then(() => askPromptQuestions)
  });
}

function viewAllRoles() {
  Queries.viewAllRoles().then(([rows]) => {
    let roles = rows;
    console.table(roles)
    .then(() => askPromptQuestions)
  });
}

function viewAllEmployees() {
  Queries.viewAllEmployees().then(([rows]) => {
    let employees = rows;
    console.table(employees)
    .then(() => askPromptQuestions)
  });
}

function addDepartment() {
  Queries.addDepartment(departments).then(([rows]) => {
    let departments = rows;
    const departmentChoices = departments.map(({ id, name }) => ({
      name: name,
      value: id,
    }));

    prompt([
      {
        name: "title",
        message: "What is the name of the role?",
      },
      {
        name: "salary",
        message: "What is the salary of the role?",
      },
      {
        type: "list",
        name: "department_id",
        message: "Which department does the role belong to?",
        choices: departmentChoices,
      },
    ]).then((role) => {
      Queries.addRole(role)
        .then(() => console.log(`Added ${department.name} to the database`))
        .then(() => askPromptQuestions);
    });
  });
}

function addRole() {
  Queries.addRole(role).then(([rows]) => {
    let departments = rows;
    const departmentChoices = departments.map(({ id, name }) => ({
      name: name,
      value: id,
    }));

    prompt([
      {
        name: "title",
        message: "What is the name of the role?",
      },
      {
        name: "salary",
        message: "What is the salary of the role?",
      },
      {
        type: "list",
        name: "department_id",
        message: "Which department does the role belong to?",
        choices: departmentChoices,
      },
    ]).then((role) => {
      Queries.addRole(role)
        .then(() => console.log(`Added ${role.title} to the database`))
        .then(() => askPromptQuestions);
    });
  });
}

function addEmployee() {
  // const employee = { information from prompt I have yet to create}
  Queries.addEmployee(employee);
}

// I need to update with either more prompts / a db.query to CRUD db
// console.table is like console log to display table

init();