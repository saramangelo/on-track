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
      "Start over",
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
 
      }
      if (answers.optionSelection === "Start over") {
        return askPromptQuestions();
      }
    });
}

function viewAllDepartments() {
  Queries.viewAllDepartments().then(([rows]) => {
    let departments = rows;
    console.table(departments);
    askPromptQuestions();
  });
}

function viewAllRoles() {
  Queries.viewAllRoles().then(([rows]) => {
    let roles = rows;
    console.table(roles);
    askPromptQuestions();
  });
}

function viewAllEmployees() {
  Queries.viewAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.table(employees);
    })
    .then(() => askPromptQuestions());
}

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "departmentName",
        message: "What is the name of the department?",
        type: "input",
      },
    ])
    .then((answers) => {
      Queries.addDepartment(answers.departmentName)
        .then((response) => {
          console.log(`Added ${answers.departmentName} to the database`);
          askPromptQuestions();
        })
        .catch((error) => {
          console.log(error);
          askPromptQuestions();
        });
    });
}

function addRole() {
  Queries.viewAllDepartments().then(([rows]) => {
    let department = rows;
    const departmentChoices = department.map(({ id, name }) => {
      return {
      name: `${name}`,
      value: id,
    }
  });

  inquirer
    .prompt([
      {
        name: "title",
        message: "What is the name of the role?",
        type: "input",
      },
      {
        name: "salary",
        message: "What is the salary of the role?",
        type: "input",
      },
      {
        type: "list",
        name: "department_id",
        message: "Which department does the role belong to?",
        choices: departmentChoices,
      },
    ])
  
    .then((answers) => {
      Queries.addRole(answers.title, answers.salary, answers.department_id)
        .then((response) => {
          console.log(`Added Role to the database`);
          askPromptQuestions();
        })
        .catch((error) => {
          console.log(error);
          askPromptQuestions();
        });
    });
  })
};

function addEmployee() {
  Queries.viewAllRoles().then(([rows]) => {
    let role = rows;
    const roleChoices = role.map(({ id, title }) => {
      return {
      name: `${title}`,
      value: id,
    }
  })
  Queries.viewManager().then(([rows]) => {
    let manager = rows;
    const managerChoices = manager.map(({ id, first_name, last_name }) => {
      return {
      name: `${first_name} ${last_name}`,
      value: id,
    }
  });
  const employee = [
    {
      name: "firstName",
      message: "What is the employee's first name?",
      type: "input",
    },
    {
      name: "lastName",
      message: "What is the employee's last name?",
      type: "input",
    },
    {
      name: "role",
      message: "What is the employee's role?",
      type: "list",
      choices: roleChoices
    },
    {
      name: "manager",
      message: "Who is the employee's manager?",
      type: "list",
      choices: managerChoices
    },
  ];
  inquirer.prompt(employee).then((answers) => {
    Queries.addEmployee(answers.firstName, answers.lastName, answers.role, answers.manager)
    .then((response) => {
      console.log('Added Employee to the database');
      askPromptQuestions();
  });
})
  })
})
}

function updateEmployeeRole() {
  Queries.viewAllEmployees().then(([employees]) => {
    const employeeArray = employees.map(({ id, first_name, last_name }) => {
      return {
        name: `${first_name} ${last_name}`,
        value: id,
      };
    });
    inquirer
      .prompt([
        {
          type: "list",
          name: "employeeId",
          message: "Which employee's role would you like to update?",
          choices: employeeArray,
        },
      ])
      .then(({ employeeId }) => {
        Queries.viewAllRoles().then(([roles]) => {
          const roleArray = roles.map(({ id, title }) => {
            return {
              name: title,
              value: id,
            };
          });
          inquirer
            .prompt([
              {
                type: "list",
                name: "roleId",
                message: "Which role would you like to update the employee to?",
                choices: roleArray,
              },
            ])
            .then(({ roleId }) => {
              Queries.updateEmployeeRole(employeeId, roleId)
                .then(() => console.log("Updated Employees Role"))
                .then(() => askPromptQuestions());
            });
        });
      });
  });
}

init();
